import { NextResponse } from "next/server";
import { getSiteConfig, saveSiteConfig } from "@/lib/storage";
import { SiteConfig } from "@/lib/types";

export async function GET() {
  try {
    const config = getSiteConfig();
    return NextResponse.json({ success: true, config });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: SiteConfig = await request.json();
    saveSiteConfig(body);
    return NextResponse.json({ success: true, config: body });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
