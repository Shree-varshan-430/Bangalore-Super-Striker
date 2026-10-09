import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

interface PageHeroProps {
  title: string;
  backgroundImage?: string;
  crumbs?: Crumb[];
}

export default function PageHero({
  title,
  backgroundImage = "/assets/imgs/index1.jpg",
  crumbs = [],
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center pt-[200px] sm:pt-[230px] md:pt-[245px] pb-20 sm:pb-28 overflow-hidden"
      aria-label={`Page header: ${title}`}
      style={{ minHeight: 460 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#11123c]/88 via-[#11123c]/82 to-[#11123c]/92"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site w-full">
        <h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mb-4 tracking-tight drop-shadow-md"
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/75 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#e9d319] transition-colors">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#e9d319]" aria-hidden />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#e9d319] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#e9d319] font-bold" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
