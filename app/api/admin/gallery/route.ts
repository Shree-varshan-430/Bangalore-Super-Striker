import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/adminAuth";
import fs from "fs";
import path from "path";

const galleryFilePath = path.join(process.cwd(), "content", "gallery.json");

function getGallery(): any[] {
  try {
    if (fs.existsSync(galleryFilePath)) {
      return JSON.parse(fs.readFileSync(galleryFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading gallery file:", err);
  }
  return [];
}

function saveGallery(data: any[]) {
  fs.writeFileSync(galleryFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const gallery = getGallery();
  return NextResponse.json(gallery);
}

export async function POST(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, src, tag, date } = body;

    if (!title || !src) {
      return NextResponse.json({ error: "Title and image source are required" }, { status: 400 });
    }

    const gallery = getGallery();
    const nextId = String(Date.now());

    const newPhoto = {
      id: nextId,
      title: title.trim(),
      src: src.trim(),
      tag: tag?.trim() || "Squad",
      date: date || new Date().toISOString().split("T")[0],
    };

    const updated = [newPhoto, ...gallery];
    saveGallery(updated);

    return NextResponse.json({ success: true, photo: newPhoto });
  } catch (error) {
    console.error("Error adding photo to gallery:", error);
    return NextResponse.json({ error: "Failed to add photo" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, title, src, tag, date } = body;

    if (!id) {
      return NextResponse.json({ error: "Photo ID is required" }, { status: 400 });
    }

    const gallery = getGallery();
    const index = gallery.findIndex((item) => String(item.id) === String(id));
    if (index === -1) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    gallery[index] = {
      ...gallery[index],
      title: title?.trim() ?? gallery[index].title,
      src: src?.trim() ?? gallery[index].src,
      tag: tag?.trim() ?? gallery[index].tag,
      date: date ?? gallery[index].date,
    };

    saveGallery(gallery);
    return NextResponse.json({ success: true, photo: gallery[index] });
  } catch (error) {
    console.error("Error updating photo in gallery:", error);
    return NextResponse.json({ error: "Failed to update photo" }, { status: 500 });
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
      return NextResponse.json({ error: "Photo ID is required" }, { status: 400 });
    }

    const gallery = getGallery();
    const filtered = gallery.filter((item) => String(item.id) !== String(id));
    saveGallery(filtered);

    return NextResponse.json({ success: true, message: "Photo deleted" });
  } catch (error) {
    console.error("Error deleting photo from gallery:", error);
    return NextResponse.json({ error: "Failed to delete photo" }, { status: 500 });
  }
}
