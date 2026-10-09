import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Quote,
  ArrowRight,
  Shield,
  Tag,
} from "lucide-react";
import achievements from "@/content/achievements.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return achievements.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = achievements.find((item) => item.id.toString() === id);
  if (!article) return { title: "News Article | BSSFC" };

  return {
    title: `${article.title} | Bangalore Super Strikers FC`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.bangaloresuperstrikersfc.com/blogs/${article.id}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = achievements.find((item) => item.id.toString() === id);

  if (!article) {
    notFound();
  }

  const relatedArticles = achievements
    .filter((item) => item.id.toString() !== id)
    .slice(0, 3);

  return (
    <>
      <PageHero
        title="Match Report & News"
        backgroundImage={article.image}
        crumbs={[
          { label: "News & Blogs", href: "/blogs" },
          { label: article.tag },
        ]}
      />

      <article className="py-14 sm:py-20 bg-white" aria-label={article.title}>
        <div className="container-site max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1B4193] hover:text-[#e9d319] transition-colors"
            >
              <ArrowLeft size={14} /> Back to all stories & reports
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 text-left">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                {article.tag}
              </span>
              <span className="text-xs font-semibold text-gray-400">
                Official Club Publication
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c] leading-[1.15] mb-6">
              {article.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 pb-6 border-b border-gray-200 text-xs text-gray-500 font-sans">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#1B4193]" />
                <span className="font-semibold text-gray-700">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#1B4193]" />
                <span>{article.source}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#1B4193]" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl mb-12 bg-gray-100 border border-gray-200">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Lead Paragraph */}
          <div className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed mb-8 border-l-4 border-[#e9d319] pl-5 bg-gray-50/80 py-4 rounded-r-lg">
            {article.excerpt}
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base font-sans">
            {(Array.isArray(article.content) && article.content.length > 0
              ? article.content
              : [
                  article.excerpt,
                  "Bangalore Super Strikers FC continues to expand opportunities across Karnataka, Tamil Nadu, and Pondicherry through high-performance training camps, school partnerships, and competitive league pathways.",
                ]
            ).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Highlights Box */}
          {Array.isArray(article.highlights) && article.highlights.length > 0 && (
            <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#11123c] text-white shadow-xl border-2 border-[#e9d319]">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/15">
                <Shield size={20} className="text-[#e9d319]" />
                <h2 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-white">
                  KEY HIGHLIGHTS &amp; EVENTS
                </h2>
              </div>
              <ul className="space-y-3">
                {article.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 size={16} className="text-[#e9d319] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Coach / Official Quote */}
          {article.quote && article.quote.text && (
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1B4193]/10 to-transparent border-l-4 border-[#1B4193] relative">
              <Quote size={32} className="text-[#1B4193]/30 mb-2" />
              <blockquote className="text-base sm:text-lg italic font-medium text-[#11123c] leading-relaxed mb-4">
                "{article.quote.text}"
              </blockquote>
              <div className="text-xs font-black uppercase tracking-wider text-[#1B4193]">
                {article.quote.author} &nbsp;·&nbsp;{" "}
                <span className="text-gray-500 font-semibold">{article.quote.role}</span>
              </div>
            </div>
          )}

          {/* Share & Tag Footer */}
          <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <Tag size={14} className="text-[#1B4193]" />
              <span>Category: {article.tag}</span>
            </div>
            <Link
              href="/contact"
              className="bg-[#1B4193] text-white hover:bg-[#11123c] font-black text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors"
            >
              BOOK ACADEMY ADMISSION
            </Link>
          </div>

        </div>
      </article>

      {/* Related Stories */}
      <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-200" aria-label="Related Stories">
        <div className="container-site max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[3px] text-[#e9d319] mb-1">
                MORE UPDATES
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#11123c]">
                RELATED STORIES &amp; REPORTS
              </h2>
            </div>
            <Link
              href="/blogs"
              className="text-xs font-black uppercase tracking-wider text-[#1B4193] hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span
                      className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded"
                      style={{ background: "#e9d319", color: "#11123c" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-2">
                      {item.date} · {item.source}
                    </p>
                    <h3 className="font-display text-base font-bold uppercase text-[#11123c] leading-snug group-hover:text-[#1B4193] transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/blogs/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1B4193] hover:text-[#e9d319] transition-colors"
                  >
                    Read article <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
