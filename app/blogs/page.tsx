import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import achievements from "@/content/achievements.json";

export const metadata: Metadata = {
  title: "Blogs & News | Bangalore Super Strikers FC",
  description:
    "Latest news, tournament match reports, match highlights and blog updates from Bangalore Super Strikers FC.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="Blogs & News"
        crumbs={[{ label: "Blogs" }]}
      />
      <section className="section-py">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-subheading">Latest Stories</p>
            <h2 className="section-heading">BSSFC NEWS & MATCH REPORTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item) => (
              <article
                key={item.id}
                className="card-hover bg-white shadow-sm flex flex-col group overflow-hidden border border-gray-100"
              >
                <div className="card-img relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1 flex items-center gap-1"
                    style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
                  >
                    <Tag size={10} aria-hidden />
                    {item.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar size={12} aria-hidden />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="font-semibold">{item.source}</span>
                  </div>

                  <h3
                    className="text-lg font-bold leading-snug mb-3 flex-1"
                    style={{
                      fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                      color: "var(--bssfc-navy)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1B4193] hover:text-[#e9d319] hover:underline transition-colors mt-auto"
                  >
                    Read full article <ArrowRight size={13} aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
