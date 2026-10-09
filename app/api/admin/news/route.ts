import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/adminAuth";
import fs from "fs";
import path from "path";

const newsFilePath = path.join(process.cwd(), "content", "news.json");
const achFilePath = path.join(process.cwd(), "content", "achievements.json");

function getNewsList(): any[] {
  try {
    if (fs.existsSync(newsFilePath)) {
      return JSON.parse(fs.readFileSync(newsFilePath, "utf8"));
    }
    if (fs.existsSync(achFilePath)) {
      return JSON.parse(fs.readFileSync(achFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading news file:", err);
  }
  return [];
}

function saveNewsList(list: any[]) {
  fs.writeFileSync(newsFilePath, JSON.stringify(list, null, 2));
  // Keep achievements.json synchronized so legacy routes continue smoothly
  fs.writeFileSync(achFilePath, JSON.stringify(list, null, 2));
}

export async function GET() {
  const news = getNewsList();
  return NextResponse.json(news);
}

export async function POST(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, tag, excerpt, content, image, date, source, readTime } = body;

    if (!title || !excerpt) {
      return NextResponse.json({ error: "Title and excerpt are required" }, { status: 400 });
    }

    const news = getNewsList();
    const nextId = news.length > 0 ? Math.max(...news.map((n) => Number(n.id) || 0)) + 1 : 1;

    const newArticle = {
      id: nextId,
      title: title.trim(),
      source: source?.trim() || "BSSFC Match Centre",
      date: date || new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      tag: tag?.trim() || "Club News",
      excerpt: excerpt.trim(),
      url: `/blogs/${nextId}`,
      image: image || "/assets/imgs/clubs/news-scouting.jpg",
      imageAlt: title.trim(),
      readTime: readTime || "3 min read",
      content: Array.isArray(content) && content.length > 0 ? content : [excerpt.trim()],
      highlights: body.highlights || [],
      quote: body.quote || null,
      createdAt: new Date().toISOString(),
      featured: true,
    };

    // Prepend to top so newest article immediately becomes #1
    const updatedNews = [newArticle, ...news];
    saveNewsList(updatedNews);

    return NextResponse.json({ success: true, article: newArticle });
  } catch (error) {
    console.error("Error creating news article:", error);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, title, tag, excerpt, content, image, date, source, readTime } = body;

    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    const news = getNewsList();
    const index = news.findIndex((item) => String(item.id) === String(id));
    if (index === -1) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    news[index] = {
      ...news[index],
      title: title?.trim() ?? news[index].title,
      tag: tag?.trim() ?? news[index].tag,
      excerpt: excerpt?.trim() ?? news[index].excerpt,
      content: Array.isArray(content) ? content : news[index].content,
      image: image ?? news[index].image,
      date: date ?? news[index].date,
      source: source?.trim() ?? news[index].source,
      readTime: readTime ?? news[index].readTime,
      highlights: body.highlights ?? news[index].highlights,
      quote: body.quote ?? news[index].quote,
    };

    saveNewsList(news);
    return NextResponse.json({ success: true, article: news[index] });
  } catch (error) {
    console.error("Error updating news article:", error);
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 });
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
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    const news = getNewsList();
    const filtered = news.filter((item) => String(item.id) !== String(id));
    saveNewsList(filtered);

    return NextResponse.json({ success: true, message: "Article deleted" });
  } catch (error) {
    console.error("Error deleting news article:", error);
    return NextResponse.json({ error: "Failed to delete article" }, { status: 500 });
  }
}
