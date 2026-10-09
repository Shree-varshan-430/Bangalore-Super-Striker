import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/adminAuth";
import fs from "fs";
import path from "path";

const videosFilePath = path.join(process.cwd(), "content", "videos.json");

function getVideos(): any[] {
  try {
    if (fs.existsSync(videosFilePath)) {
      return JSON.parse(fs.readFileSync(videosFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading videos file:", err);
  }
  return [];
}

function saveVideos(data: any[]) {
  fs.writeFileSync(videosFilePath, JSON.stringify(data, null, 2));
}

// Extract YouTube ID from various YouTube URL formats
function extractYouTubeId(urlOrId: string): string {
  const clean = urlOrId.trim();
  if (!clean.includes("/") && !clean.includes("?")) return clean;

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = clean.match(regExp);
  return match && match[2].length === 11 ? match[2] : clean;
}

export async function GET() {
  const videos = getVideos();
  return NextResponse.json(videos);
}

export async function POST(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, youtubeUrl, thumbnail, category, duration, date, featuredOnHome } = body;

    if (!title || !youtubeUrl) {
      return NextResponse.json({ error: "Title and YouTube URL/ID are required" }, { status: 400 });
    }

    const videoId = extractYouTubeId(youtubeUrl);
    const autoThumbnail = thumbnail?.trim() || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const videos = getVideos();
    const newVideo = {
      id: videoId,
      title: title.trim(),
      youtubeUrl: youtubeUrl.includes("http") ? youtubeUrl : `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail: autoThumbnail,
      category: category?.trim() || "BSSFC TV",
      duration: duration?.trim() || "03:30",
      date: date || new Date().toISOString().split("T")[0],
      featuredOnHome: Boolean(featuredOnHome ?? true),
    };

    const updated = [newVideo, ...videos];
    saveVideos(updated);

    return NextResponse.json({ success: true, video: newVideo });
  } catch (error) {
    console.error("Error adding video:", error);
    return NextResponse.json({ error: "Failed to add video" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, title, youtubeUrl, thumbnail, category, duration, date, featuredOnHome } = body;

    if (!id) {
      return NextResponse.json({ error: "Video ID is required" }, { status: 400 });
    }

    const videos = getVideos();
    const index = videos.findIndex((item) => String(item.id) === String(id));
    if (index === -1) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    const videoId = youtubeUrl ? extractYouTubeId(youtubeUrl) : videos[index].id;
    const resolvedThumb = thumbnail?.trim() || (youtubeUrl ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : videos[index].thumbnail);

    videos[index] = {
      ...videos[index],
      id: videoId,
      title: title?.trim() ?? videos[index].title,
      youtubeUrl: youtubeUrl ?? videos[index].youtubeUrl,
      thumbnail: resolvedThumb,
      category: category?.trim() ?? videos[index].category,
      duration: duration ?? videos[index].duration,
      date: date ?? videos[index].date,
      featuredOnHome: featuredOnHome !== undefined ? Boolean(featuredOnHome) : videos[index].featuredOnHome,
    };

    saveVideos(videos);
    return NextResponse.json({ success: true, video: videos[index] });
  } catch (error) {
    console.error("Error updating video:", error);
    return NextResponse.json({ error: "Failed to update video" }, { status: 500 });
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
      return NextResponse.json({ error: "Video ID is required" }, { status: 400 });
    }

    const videos = getVideos();
    const filtered = videos.filter((item) => String(item.id) !== String(id));
    saveVideos(filtered);

    return NextResponse.json({ success: true, message: "Video deleted" });
  } catch (error) {
    console.error("Error deleting video:", error);
    return NextResponse.json({ error: "Failed to delete video" }, { status: 500 });
  }
}
