import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null) || Object.fromEntries(await req.formData());
    
    // In production, integrate email provider (e.g. Resend, SendGrid, Nodemailer)
    // Destination: coaching@bangaloresuperstrikersfc.com
    console.log("Inquiry received for BSSFC:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! A BSSFC coach will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please contact via phone." },
      { status: 500 }
    );
  }
}
