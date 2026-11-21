import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/adminAuth";
import fs from "fs";
import path from "path";

const tournamentsFilePath = path.join(process.cwd(), "content", "tournaments.json");

export interface TournamentItem {
  id: number;
  year: number;
  title: string;
  ageGroup: string;
  result: string;
  location: string;
}

function getTournaments(): TournamentItem[] {
  try {
    if (fs.existsSync(tournamentsFilePath)) {
      return JSON.parse(fs.readFileSync(tournamentsFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading tournaments file:", err);
  }
  return [];
}

function saveTournaments(data: TournamentItem[]) {
  fs.writeFileSync(tournamentsFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const tournaments = getTournaments();
  return NextResponse.json(tournaments);
}

export async function POST(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, year, ageGroup, result, location } = body;

    if (!title || !title.trim()) {
      return NextResponse.json({ error: "Tournament / achievement title is required" }, { status: 400 });
    }
    if (!year || isNaN(Number(year))) {
      return NextResponse.json({ error: "Valid year is required (e.g. 2026)" }, { status: 400 });
    }
    if (!result || !result.trim()) {
      return NextResponse.json({ error: "Result or honor achieved is required" }, { status: 400 });
    }

    const tournaments = getTournaments();
    const nextId =
      tournaments.length > 0
        ? Math.max(...tournaments.map((t) => Number(t.id) || 0)) + 1
        : 1;

    const newRecord: TournamentItem = {
      id: nextId,
      year: Number(year),
      title: title.trim(),
      ageGroup: ageGroup?.trim() || "Open Age",
      result: result.trim(),
      location: location?.trim() || "Bangalore",
    };

    // Prepend new achievement at the top so it's immediately visible
    const updated = [newRecord, ...tournaments];
    saveTournaments(updated);

    return NextResponse.json({ success: true, achievement: newRecord });
  } catch (error) {
    console.error("Error creating achievement:", error);
    return NextResponse.json({ error: "Failed to create achievement record" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, title, year, ageGroup, result, location } = body;

    if (id === undefined || id === null) {
      return NextResponse.json({ error: "Achievement ID is required" }, { status: 400 });
    }

    const tournaments = getTournaments();
    const index = tournaments.findIndex((item) => Number(item.id) === Number(id));

    if (index === -1) {
      return NextResponse.json({ error: "Achievement record not found" }, { status: 404 });
    }

    tournaments[index] = {
      ...tournaments[index],
      title: title?.trim() ?? tournaments[index].title,
      year: year !== undefined && !isNaN(Number(year)) ? Number(year) : tournaments[index].year,
      ageGroup: ageGroup?.trim() ?? tournaments[index].ageGroup,
      result: result?.trim() ?? tournaments[index].result,
      location: location?.trim() ?? tournaments[index].location,
    };

    saveTournaments(tournaments);

    return NextResponse.json({ success: true, achievement: tournaments[index] });
  } catch (error) {
    console.error("Error updating achievement:", error);
    return NextResponse.json({ error: "Failed to update achievement record" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Achievement ID is required" }, { status: 400 });
    }

    const tournaments = getTournaments();
    const filtered = tournaments.filter((item) => Number(item.id) !== Number(id));
    saveTournaments(filtered);

    return NextResponse.json({ success: true, message: "Achievement deleted successfully" });
  } catch (error) {
    console.error("Error deleting achievement:", error);
    return NextResponse.json({ error: "Failed to delete achievement record" }, { status: 500 });
  }
}
