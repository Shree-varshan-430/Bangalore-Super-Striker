import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Navigation,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";

const programLinks = [
  { label: "All Programs", href: "/programs" },
  { label: "Academy Training", href: "/academy_training" },
  { label: "School / University Coaching And Scholarship Program", href: "/school_university" },
  { label: "Age Wise Progression", href: "/agewise_progression" },
  { label: "Summer Camp", href: "/summer_camp" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Players Roster", href: "/players" },
  { label: "Achievements", href: "/achievements" },
  { label: "Blogs", href: "/blogs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Technical Team", href: "/technical_team" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy_policy" },
  { label: "Refund Policy", href: "/refund_policy" },
  { label: "Terms and Conditions", href: "/terms_and_conditions" },
];

const socials = [
  { href: "https://www.instagram.com/bangaloresuperstrikersfc/", Icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.facebook.com/Bangalore-Super-Strikers-Football-Club-103692111889893", Icon: FacebookIcon, label: "Facebook" },
  { href: "https://twitter.com/bangalore_super", Icon: TwitterIcon, label: "X / Twitter" },
  { href: "https://www.youtube.com/channel/UC1hf_p-XBtiIO3QyI5U43dQ", Icon: YoutubeIcon, label: "YouTube" },
  { href: "https://wa.me/+919739869535", Icon: WhatsAppIcon, label: "WhatsApp" },
  { href: "https://www.linkedin.com/in/bssfc-bangalore-2021", Icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="font-sans">
      {/* Pre-footer social band */}
      <div
        className="py-10 text-white text-center"
        style={{ background: "#25265e" }}
      >
        <p className="text-xs font-extrabold uppercase tracking-[4px] mb-5 text-[#e9d319]">
          FOLLOW THE STRIKERS
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap" role="list" aria-label="Social media links">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              role="listitem"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e9d319] hover:border-[#e9d319] hover:text-[#11123c] transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div
        className="py-16"
        style={{ background: "#11123c" }}
      >
        <div className="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: For parents & players */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[3px] mb-5 pb-3 border-b border-white/20 font-display">
              For Parents & Players
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get your free consultation & trials today.
            </p>
            <a
              href="tel:+919591069293"
              className="flex items-center gap-2 text-gray-200 text-sm hover:text-[#e9d319] transition-colors mb-4"
            >
              <Phone size={14} aria-hidden />
              (+91) 95910 69293
            </a>
            <Link
              href="/contact"
              className="btn-cyan text-xs py-2.5 px-5"
            >
              Contact Now
            </Link>
          </div>

          {/* Column 2: Our Programs */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[3px] mb-5 pb-3 border-b border-white/20 font-display">
              Our Programs
            </h3>
            <ul className="flex flex-col gap-2">
              {programLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 text-sm hover:text-[#e9d319] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[3px] mb-5 pb-3 border-b border-white/20 font-display">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 text-sm hover:text-[#e9d319] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + Contact */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[3px] mb-5 pb-3 border-b border-white/20 font-display">
              Stay Updated
            </h3>
            <form
              action="/api/subscribe"
              method="POST"
              className="flex gap-0 mb-6"
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="flex-1 px-3 py-2.5 text-sm bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none focus:border-[#e9d319]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-xs font-extrabold uppercase bg-[#e9d319] text-[#11123c] hover:bg-[#00B8E0] transition-colors"
              >
                Subscribe
              </button>
            </form>

            <h4 className="text-white text-xs font-bold uppercase tracking-[2px] mb-3 font-display">
              Talk to Us
            </h4>
            <a
              href="mailto:coaching@bangaloresuperstrikersfc.com"
              className="flex items-start gap-2 text-gray-300 text-sm hover:text-[#e9d319] transition-colors mb-2"
            >
              <Mail size={14} className="mt-0.5 shrink-0" aria-hidden />
              coaching@bangaloresuperstrikersfc.com
            </a>
            <a
              href="tel:+919591069293"
              className="flex items-center gap-2 text-gray-300 text-sm hover:text-[#e9d319] transition-colors mb-3"
            >
              <Phone size={14} aria-hidden />
              (+91) 95910 69293
            </a>
            <div className="flex flex-col gap-2">
              <a
                href="https://maps.app.goo.gl/5XCLNndNmM3Kc4dd8?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-[#e9d319] text-xs leading-relaxed transition-colors group"
                title="View location on Google Maps"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#e9d319] group-hover:scale-110 transition-transform" aria-hidden />
                <span>QPQ9+RQP, Thirumagondanahalli, Bommasandra, Tirumagondanahalli, Karnataka 562107</span>
              </a>
              <a
                href="https://maps.app.goo.gl/DhbdHLXyuBtY2EDRA?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 ml-5 text-[11px] font-bold text-[#e9d319] hover:text-white uppercase tracking-wider transition-colors w-fit"
                title="Get Directions on Google Maps"
              >
                <Navigation size={12} aria-hidden />
                <span>Get Directions →</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-4 px-4"
        style={{ background: "#070b19" }}
      >
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-xs">
          <p>
            © 2021–2026 Bangalore Super Strikers Soccer School &nbsp;|&nbsp;
            <Link href="/privacy_policy" className="hover:text-[#e9d319] transition-colors">
              Privacy Policy
            </Link>
            &nbsp;|&nbsp;
            <Link href="/refund_policy" className="hover:text-[#e9d319] transition-colors">
              Refund Policy
            </Link>
            &nbsp;|&nbsp;
            <Link href="/terms_and_conditions" className="hover:text-[#e9d319] transition-colors">
              Terms
            </Link>
          </p>
          <p className="text-gray-400">
            Designed &amp; developed by{" "}
            <a
              href="https://aibuildinfra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e9d319] hover:text-white font-bold transition-colors underline decoration-[#e9d319]/40 hover:decoration-white"
            >
              AI BuildInfra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
