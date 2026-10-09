"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";

const navItems = [
  { label: "NEWS", href: "/blogs" },
  {
    label: "WE ARE BSSFC",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Achievements & Milestones", href: "/achievements" },
      { label: "Technical Team", href: "/technical_team" },
      { label: "Club Gallery", href: "/gallery" },
      { label: "BSSFC Foundation", href: "https://superstrikersinternational.com/", external: true },
    ],
  },
  { label: "BSSFC ACADEMY", href: "/academy_training" },
  { label: "PLAYERS", href: "/players" },
  { label: "BSSFC SOCCER SCHOOLS", href: "/programs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openDropdown = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(label);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(null), 120);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-[#e9d319] focus:text-[#11123c] focus:px-4 focus:py-2 focus:font-bold"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-[900] transition-all duration-300">
        {/* Top small utility bar: stays in brand navy (#11123c) */}
        <div className="bg-[#11123c] border-b border-white/10">
          <div className="container-site flex items-center justify-end py-2.5 sm:py-3 gap-4 sm:gap-6 text-white/90 text-xs sm:text-[13px]">
            <Link
              href="/#bssfc-tv"
              className="font-bold tracking-wider hover:text-[#e9d319] transition-colors hidden sm:inline-block"
            >
              BSSFC TV
            </Link>

            {/* Call CTA before Social Links */}
            <a
              href="tel:+919591069293"
              className="inline-flex items-center gap-1.5 font-black text-xs sm:text-[13px] uppercase tracking-wider text-[#e9d319] hover:text-white transition-colors py-1 px-3 rounded bg-white/10 hover:bg-[#e9d319] hover:text-[#11123c]"
              aria-label="Call BSSFC: (+91) 95910 69293"
            >
              <Phone size={13} className="shrink-0" />
              <span>CALL: (+91) 95910 69293</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://www.instagram.com/bangaloresuperstrikersfc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#e9d319] transition-colors"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="https://www.facebook.com/Bangalore-Super-Strikers-Football-Club-103692111889893"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#e9d319] transition-colors"
              >
                <FacebookIcon size={15} />
              </a>
              <a
                href="https://twitter.com/bangalore_super"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="hover:text-[#e9d319] transition-colors"
              >
                <TwitterIcon size={15} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1hf_p-XBtiIO3QyI5U43dQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#e9d319] transition-colors"
              >
                <YoutubeIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation row: PURE WHITE BACKGROUND */}
        <div
          className={`bg-white border-b border-gray-200 transition-all duration-300 ${
            scrolled ? "shadow-md py-1" : "py-2"
          }`}
        >
          <div className="container-site flex items-center justify-between">
            {/* Logo with Bangalore Crest */}
            <Link href="/" aria-label="Bangalore Super Strikers FC - Home" className="py-0.5">
              <Image
                src="/assets/imgs/crests/bangalore-crest.png"
                alt="Bangalore Super Strikers FC Crest"
                width={130}
                height={130}
                style={{ width: "auto" }}
                className={`object-contain transition-all duration-300 drop-shadow-md ${
                  scrolled ? "h-[64px] py-0.5" : "h-[82px] sm:h-[88px] py-0.5"
                }`}
                priority
              />
            </Link>

            {/* Desktop Nav Items */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href={item.href}
                      className="nav-link text-[#11123c] flex items-center gap-1.5 py-4 text-[14px] xl:text-[15px] font-black uppercase tracking-wider hover:text-[#1B4193]"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen === item.label}
                    >
                      {item.label}
                      <ChevronDown size={14} aria-hidden />
                    </Link>

                    {dropdownOpen === item.label && (
                      <div
                        className="dropdown-menu-panel !bg-white border border-gray-200 shadow-2xl rounded-b-xl py-2 min-w-[260px]"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block px-5 py-2.5 text-[#11123c] text-xs sm:text-[13px] font-black uppercase tracking-wider hover:bg-[#1B4193] hover:text-[#e9d319] transition-all duration-150"
                            {...(child.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-link text-[#11123c] py-4 text-[14px] xl:text-[15px] font-black uppercase tracking-wider hover:text-[#1B4193]"
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* BSSFC SHOP / CONTACT BUTTON */}
              <Link
                href="/contact"
                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#1B4193] border-2 border-[#1B4193] hover:bg-[#1B4193] hover:text-white transition-all duration-200"
              >
                <ShoppingCart size={15} aria-hidden />
                <span>BSSFC SHOP</span>
              </Link>
            </nav>

            {/* Mobile hamburger on white bar */}
            <button
              className="lg:hidden text-[#11123c] p-2 hover:text-[#1B4193]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
      <nav
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] z-[950] overflow-y-auto transition-transform duration-300 bg-[#11123c] text-white ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/assets/imgs/crests/bangalore-crest.png"
              alt="Bangalore Super Strikers FC Crest"
              width={95}
              height={95}
              style={{ width: "auto" }}
              className="object-contain h-[70px]"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-[#e9d319]"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="p-4 flex flex-col gap-1">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  className="w-full flex items-center justify-between text-white text-xs font-bold uppercase tracking-wider py-3 border-b border-white/10"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label
                    )
                  }
                  aria-expanded={mobileExpanded === item.label}
                >
                  {item.label}
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      mobileExpanded === item.label ? "rotate-90" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {mobileExpanded === item.label && (
                  <ul className="pl-4 py-2 flex flex-col gap-2 bg-white/5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-white/80 text-xs py-1.5 block hover:text-[#e9d319]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white text-xs font-bold uppercase tracking-wider py-3 block border-b border-white/10 hover:text-[#e9d319]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Call CTA */}
        <div className="p-4 border-t border-white/10 mt-4">
          <a
            href="tel:+919591069293"
            className="flex items-center justify-center gap-2 bg-[#e9d319] text-[#11123c] font-black text-xs uppercase tracking-wider py-3 px-4 rounded w-full mb-3"
          >
            <Phone size={14} />
            <span>CALL: (+91) 95910 69293</span>
          </a>
          <Link
            href="/contact"
            className="btn-cyan text-xs w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            JOIN BSSFC ACADEMY
          </Link>
        </div>
      </nav>
    </>
  );
}
