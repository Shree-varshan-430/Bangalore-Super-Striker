import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

export function getAdminCredentials() {
  const envFiles = [".env.local", ".env"];
  let fileUsername: string | null = null;
  let filePassword: string | null = null;
  let fileSecret: string | null = null;

  for (const envFile of envFiles) {
    const filePath = path.join(/*turbopackIgnore: true*/ process.cwd(), envFile);
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const userMatch = content.match(/^ADMIN_USERNAME\s*=\s*["']?([^"'\r\n]+)["']?/m);
        const passMatch = content.match(/^ADMIN_PASSWORD\s*=\s*["']?([^"'\r\n]+)["']?/m);
        const secMatch = content.match(/^ADMIN_SECRET\s*=\s*["']?([^"'\r\n]+)["']?/m);
        if (userMatch && !fileUsername) fileUsername = userMatch[1].trim();
        if (passMatch && !filePassword) filePassword = passMatch[1].trim();
        if (secMatch && !fileSecret) fileSecret = secMatch[1].trim();
      } catch {
        // ignore read error
      }
    }
  }

  const username = fileUsername || process.env.ADMIN_USERNAME || "admin";
  const password = filePassword || process.env.ADMIN_PASSWORD || "bssfcadmin2026";
  const secret = fileSecret || process.env.ADMIN_SECRET || "bssfc-secret-token-2026-auth";

  return { username, password, secret };
}

export function writeAdminCredentials(newPassword: string, newUsername?: string) {
  const envFiles = [".env.local", ".env"];
  
  for (const file of envFiles) {
    const filePath = path.join(/*turbopackIgnore: true*/ process.cwd(), file);
    let content = "";
    if (fs.existsSync(filePath)) {
      try {
        content = fs.readFileSync(filePath, "utf-8");
      } catch {
        content = "";
      }
    }

    const updates: Record<string, string> = {
      ADMIN_PASSWORD: newPassword,
    };
    if (newUsername && newUsername.trim()) {
      updates.ADMIN_USERNAME = newUsername.trim();
    }
    // Ensure token secret exists too
    if (!content.includes("ADMIN_SECRET")) {
      updates.ADMIN_SECRET = process.env.ADMIN_SECRET || "bssfc-secret-token-2026-auth";
    }

    for (const [key, val] of Object.entries(updates)) {
      const regex = new RegExp(`^${key}\\s*=.*$`, "m");
      if (regex.test(content)) {
        content = content.replace(regex, `${key}="${val}"`);
      } else {
        const separator = content.length > 0 && !content.endsWith("\n") ? "\n" : "";
        content = content + separator + `${key}="${val}"\n`;
      }
    }

    try {
      fs.writeFileSync(filePath, content, "utf-8");
    } catch (err) {
      console.error(`Failed to write to ${file}:`, err);
    }
  }

  // Also update in-memory process.env so subsequent requests see it immediately
  process.env.ADMIN_PASSWORD = newPassword;
  if (newUsername && newUsername.trim()) {
    process.env.ADMIN_USERNAME = newUsername.trim();
  }
}

export function verifyCredentials(username: string, pass: string): boolean {
  const creds = getAdminCredentials();
  return username === creds.username && pass === creds.password;
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("bssfc_admin_token")?.value;
    if (!token) return false;
    const creds = getAdminCredentials();
    return token === creds.secret;
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE_NAME = "bssfc_admin_token";
export function getAdminTokenValue(): string {
  return getAdminCredentials().secret;
}
