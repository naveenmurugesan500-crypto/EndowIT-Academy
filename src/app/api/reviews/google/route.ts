import { NextResponse } from "next/server";
import { getSiteConfig, saveSiteConfig } from "@/lib/storage";
import { GoogleReview } from "@/lib/types";

export async function GET(request: Request) {
  try {
    const config = getSiteConfig();
    const gmb = config.gmb || {
      placeId: "",
      apiKey: "",
      businessName: "EndowIT Academy",
      reviewUrl: "",
      overallRating: 4.9,
      totalReviews: 120,
      autoSync: true,
      minRatingToDisplay: 4,
      customReviews: [],
    };

    // If Google Places API key & placeId are available, fetch live from Google
    if (gmb.apiKey && gmb.placeId) {
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${gmb.placeId}&fields=name,rating,reviews,user_ratings_total&key=${gmb.apiKey}`;
        const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache 1 hour
        const data = await res.json();

        if (data.status === "OK" && data.result) {
          const liveRating = data.result.rating || gmb.overallRating;
          const liveTotal = data.result.user_ratings_total || gmb.totalReviews;

          const rawReviews = data.result.reviews || [];
          const formattedReviews: GoogleReview[] = rawReviews
            .filter((r: any) => r.rating >= (gmb.minRatingToDisplay || 4))
            .map((r: any, idx: number) => ({
              id: "gmb_live_" + (r.time || Date.now()) + "_" + idx,
              author_name: r.author_name,
              author_url: r.author_url,
              profile_photo_url:
                r.profile_photo_url ||
                "https://lh3.googleusercontent.com/a/default-user=s64",
              rating: r.rating,
              relative_time_description: r.relative_time_description,
              text: r.text,
              time: r.time,
              verified: true,
            }));

          // Merge live reviews into config
          if (formattedReviews.length > 0) {
            config.gmb.overallRating = liveRating;
            config.gmb.totalReviews = liveTotal;
            config.gmb.customReviews = formattedReviews;
            saveSiteConfig(config);
          }

          return NextResponse.json({
            success: true,
            live: true,
            rating: liveRating,
            totalReviews: liveTotal,
            reviews: formattedReviews,
            reviewUrl: gmb.reviewUrl,
          });
        }
      } catch (apiErr) {
        console.warn("Google Places API call failed, falling back to cached reviews:", apiErr);
      }
    }

    // Fallback to saved/custom reviews
    return NextResponse.json({
      success: true,
      live: false,
      rating: gmb.overallRating,
      totalReviews: gmb.totalReviews,
      reviews: gmb.customReviews || [],
      reviewUrl: gmb.reviewUrl,
      placeId: gmb.placeId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST endpoint to update GMB settings or manually sync/add reviews
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const config = getSiteConfig();

    if (body.gmb) {
      config.gmb = {
        ...config.gmb,
        ...body.gmb,
      };
      saveSiteConfig(config);
    }

    return NextResponse.json({ success: true, gmb: config.gmb });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
