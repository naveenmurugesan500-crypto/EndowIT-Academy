import { NextResponse } from "next/server";
import { getCertificates, saveCertificate } from "@/lib/storage";
import { Certificate } from "@/lib/types";

export async function GET() {
  try {
    const certs = getCertificates();
    return NextResponse.json({ success: true, certificates: certs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      studentName,
      courseName,
      type,
      certificateNumber,
      issueDate,
      completionDate,
      duration,
      grade,
      skills,
      liveProjectTitle,
      liveProjectDescription,
      batchId,
      mode,
      signatoryName,
      signatoryTitle,
    } = body;

    if (!studentName || !courseName) {
      return NextResponse.json(
        { success: false, error: "Student name and Course name are required." },
        { status: 400 }
      );
    }

    const autoCode =
      certificateNumber ||
      (type === "Practical Internship"
        ? `EIT-INT-2026-${Math.floor(1000 + Math.random() * 9000)}`
        : `EIT-CC-2026-${Math.floor(1000 + Math.random() * 9000)}`);

    const newCert: Certificate = {
      id: autoCode.toUpperCase(),
      certificateNumber: autoCode.toUpperCase(),
      studentName,
      courseName,
      type: type || "Course Completion",
      issueDate: issueDate || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      completionDate: completionDate || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      duration: duration || "3 Months (Intensive Hands-on)",
      grade: grade || "Distinction · Grade A+",
      status: "Verified & Active",
      skills: Array.isArray(skills) ? skills : (skills ? skills.split(",").map((s: string) => s.trim()) : ["Practical Project Work"]),
      liveProjectTitle: liveProjectTitle || "Industry Practical Deliverable",
      liveProjectDescription: liveProjectDescription || "Completed hands-on practical project requirements under mentor supervision.",
      batchId: batchId || "EIT-CHN-2026",
      mode: mode || "Chennai Lab (Classroom)",
      signatoryTitle: signatoryTitle || "Director of Technical Education",
      signatoryName: signatoryName || "Dr. S. Raghunathan, Ph.D.",
    };

    saveCertificate(newCert);

    return NextResponse.json({ success: true, certificate: newCert });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
