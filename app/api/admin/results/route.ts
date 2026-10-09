import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/adminAuth";
import fs from "fs";
import path from "path";

const fixturesFilePath = path.join(process.cwd(), "content", "fixtures.json");

function getFixtures(): any {
  try {
    if (fs.existsSync(fixturesFilePath)) {
      return JSON.parse(fs.readFileSync(fixturesFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading fixtures file:", err);
  }
  return { lastResult: {}, nextMatch: null };
}

function saveFixtures(data: any) {
  fs.writeFileSync(fixturesFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = getFixtures();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = getFixtures();

    data.lastResult = {
      ...data.lastResult,
      competition: body.competition ?? data.lastResult.competition,
      date: body.date ?? data.lastResult.date,
      homeTeam: body.homeTeam ?? data.lastResult.homeTeam,
      homeScore: Number(body.homeScore ?? data.lastResult.homeScore),
      awayTeam: body.awayTeam ?? data.lastResult.awayTeam,
      awayScore: Number(body.awayScore ?? data.lastResult.awayScore),
      homeCrest: body.homeCrest ?? data.lastResult.homeCrest,
      awayCrest: body.awayCrest ?? data.lastResult.awayCrest,
      resultBadge: body.resultBadge ?? data.lastResult.resultBadge,
      reportUrl: body.reportUrl ?? data.lastResult.reportUrl,
      location: body.location ?? data.lastResult.location,
      sourceUrl: body.sourceUrl ?? data.lastResult.sourceUrl,
    };

    if (body.nextMatch !== undefined) {
      data.nextMatch = body.nextMatch;
    }

    saveFixtures(data);
    return NextResponse.json({ success: true, fixtures: data });
  } catch (error) {
    console.error("Error updating fixtures:", error);
    return NextResponse.json({ error: "Failed to update match results" }, { status: 500 });
  }
}
