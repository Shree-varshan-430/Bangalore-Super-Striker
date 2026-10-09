import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null) || Object.fromEntries(await req.formData());
    console.log("Newsletter subscription for BSSFC:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to BSSFC updates and match reports!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Subscription failed." },
      { status: 500 }
    );
  }
}
