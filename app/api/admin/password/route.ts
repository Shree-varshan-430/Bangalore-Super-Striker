import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  isAuthenticated,
  getAdminCredentials,
  verifyCredentials,
  writeAdminCredentials,
  ADMIN_COOKIE_NAME,
  getAdminTokenValue,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  try {
    const authed = await isAuthenticated();
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { currentPassword, newPassword, confirmPassword, newUsername } = body;

    if (!currentPassword) {
      return NextResponse.json(
        { error: "Current password is required to authorize this change" },
        { status: 400 }
      );
    }

    if (!newPassword || newPassword.trim().length < 6) {
      return NextResponse.json(
        { error: "New password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "New password and confirmation do not match" },
        { status: 400 }
      );
    }

    const currentCreds = getAdminCredentials();
    const isCurrentValid = verifyCredentials(currentCreds.username, currentPassword);

    if (!isCurrentValid) {
      return NextResponse.json(
        { error: "Current password is incorrect. Please check and try again." },
        { status: 400 }
      );
    }

    // Write updated credentials to .env / .env.local
    writeAdminCredentials(newPassword, newUsername);

    // Refresh cookie so user stays authenticated seamlessly
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, getAdminTokenValue(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Password successfully updated and written to .env file! Active immediately.",
      username: newUsername?.trim() || currentCreds.username,
    });
  } catch (err: any) {
    console.error("Error updating admin password:", err);
    return NextResponse.json(
      { error: err.message || "Failed to update password" },
      { status: 500 }
    );
  }
}
