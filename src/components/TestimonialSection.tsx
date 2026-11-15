"use client";

import React, { useEffect, useState } from "react";
import { Star, ExternalLink, CheckCircle2, MessageSquarePlus } from "lucide-react";
import { GoogleReview } from "@/lib/types";

export default function TestimonialSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(142);
  const [reviewUrl, setReviewUrl] = useState("https://maps.google.com");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews/google")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.reviews || []);
          if (data.rating) setRating(data.rating);
          if (data.totalReviews) setTotalReviews(data.totalReviews);
          if (data.reviewUrl) setReviewUrl(data.reviewUrl);
        }
      })
      .catch((err) => console.error("Error loading reviews:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-8 sm:py-10 bg-transparent text-white relative" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200">
            {/* Google G SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Google Business Profile Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Reviews from <span className="gradient-text-amber">Real Students</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Live reviews synced directly from our verified Google My Business profile.
          </p>

          {/* Rating Summary Card */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
              <span className="text-2xl font-extrabold text-white">
                {rating}
              </span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-semibold border-l border-slate-700 pl-3">
                Based on <strong>{totalReviews}+ Google reviews</strong>
              </span>
            </div>

            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all hover:scale-105"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review on Google</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: User Info & Google Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.profile_photo_url}
                      alt={rev.author_name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-500/30"
                      onError={(e: any) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80";
                      }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{rev.author_name}</span>
                      </h4>
                      <span className="text-[11px] text-slate-400 block">
                        {rev.relative_time_description || "Recently posted"}
                      </span>
                    </div>
                  </div>

                  {/* Google G icon */}
                  <div className="p-1.5 rounded-lg bg-navy-950 shadow-sm border border-slate-800">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 ml-1.5">
                    Verified Google Review
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Card Footer: Verified on Google link */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Review</span>
                </span>

                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-600 transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Google CTA */}
        <div className="mt-12 text-center">
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:underline"
          >
            <span>See All Customer Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
