import { NextResponse } from "next/server";
import { getBlogs, saveBlogs } from "@/lib/storage";
import { BlogPost } from "@/lib/types";

export async function GET() {
  try {
    const blogs = getBlogs();
    return NextResponse.json({ success: true, blogs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: BlogPost = await request.json();
    const blogs = getBlogs();

    const existingIndex = blogs.findIndex(
      (b) => b.id === body.id || b.slug === body.slug
    );

    if (existingIndex !== -1) {
      blogs[existingIndex] = body;
    } else {
      blogs.unshift(body);
    }

    saveBlogs(blogs);
    return NextResponse.json({ success: true, blog: body });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Blog ID is required" },
        { status: 400 }
      );
    }
    const blogs = getBlogs();
    const filtered = blogs.filter((b) => b.id !== id);
    saveBlogs(filtered);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
