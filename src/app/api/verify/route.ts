import { NextResponse } from "next/server";
import { getCertificateById, getCertificates } from "@/lib/storage";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || searchParams.get("code");

    if (!id) {
      // If no ID is provided, return all certificates (or recent list for verification explorer)
      const allCerts = getCertificates();
      return NextResponse.json({
        success: true,
        count: allCerts.length,
        certificates: allCerts.map((c) => ({
          id: c.id,
          certificateNumber: c.certificateNumber,
          studentName: c.studentName,
          courseName: c.courseName,
          type: c.type,
          issueDate: c.issueDate,
          status: c.status,
        })),
      });
    }

    const cert = getCertificateById(id);

    if (!cert) {
      return NextResponse.json(
        {
          success: false,
          error: `No certificate found matching ID "${id}". Please verify the code on your certificate or contact admissions@endowitacademy.com for manual HR background verification.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      certificate: cert,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to verify certificate" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const id = body.id || body.code || body.certificateNumber;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Certificate Verification ID or Code is required." },
        { status: 400 }
      );
    }

    const cert = getCertificateById(id);

    if (!cert) {
      return NextResponse.json(
        {
          success: false,
          error: `No official record found for Certificate ID "${id}". Please ensure the code is typed exactly as shown on the physical or digital certificate.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      certificate: cert,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Verification request failed" },
      { status: 500 }
    );
  }
}
