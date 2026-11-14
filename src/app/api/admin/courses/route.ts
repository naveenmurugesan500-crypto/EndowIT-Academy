import { NextResponse } from "next/server";
import { getCourses, saveCourses } from "@/lib/storage";
import { Course } from "@/lib/types";

export async function GET() {
  try {
    const courses = getCourses();
    return NextResponse.json({ success: true, courses });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: Course = await request.json();
    const courses = getCourses();

    // Check if slug or id already exists
    const existingIndex = courses.findIndex(
      (c) => c.id === body.id || c.slug === body.slug
    );

    if (existingIndex !== -1) {
      // Update existing course
      courses[existingIndex] = body;
    } else {
      // Add new course
      courses.unshift(body);
    }

    saveCourses(courses);
    return NextResponse.json({ success: true, course: body });
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
        { success: false, error: "Course ID is required" },
        { status: 400 }
      );
    }
    const courses = getCourses();
    const filtered = courses.filter((c) => c.id !== id);
    saveCourses(filtered);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
