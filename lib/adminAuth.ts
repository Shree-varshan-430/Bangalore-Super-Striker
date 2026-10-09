import { cookies } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "bssfcadmin2026";
const TOKEN_SECRET = process.env.ADMIN_SECRET || "bssfc-secret-token-2026-auth";

export function verifyCredentials(username: string, pass: string): boolean {
  return username === ADMIN_USERNAME && pass === ADMIN_PASSWORD;
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("bssfc_admin_token")?.value;
    if (!token) return false;
    // Simple secure token check
    return token === TOKEN_SECRET;
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE_NAME = "bssfc_admin_token";
export const ADMIN_TOKEN_VALUE = TOKEN_SECRET;
