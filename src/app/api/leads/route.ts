import { NextResponse } from "next/server";
import { getLeads, saveLead, updateLeadStatus } from "@/lib/storage";

export async function GET() {
  try {
    const leads = getLeads();
    return NextResponse.json({ success: true, leads });
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
    const { name, email, phone, course, mode, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const saved = saveLead({
      name,
      email: email || "Not Provided",
      phone,
      course: course || "General Inquiry",
      mode: mode || "Classroom",
      message: message || "",
    });

    // Forward to Google Sheets Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEET_LEADS_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEET_LEADS_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            name,
            phone,
            email: email || "Not Provided",
            course: course || "General Inquiry",
            mode: mode || "Classroom",
            message: message || "-",
          }),
        }).catch((err) => console.error("Google Sheet webhook error:", err));
      } catch (sheetErr) {
        console.error("Google Sheet sync error:", sheetErr);
      }
    }

    return NextResponse.json({ success: true, lead: saved });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "ID and status are required." },
        { status: 400 }
      );
    }
    updateLeadStatus(id, status);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
