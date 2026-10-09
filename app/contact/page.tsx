import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { Phone, Mail, MapPin, Clock, Navigation, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Trials | Bangalore Super Strikers FC",
  description:
    "Contact Bangalore Super Strikers FC. Book a free consultation and trial session. Academy phone, email, and facility location in Bangalore.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section-py">
        <div className="container-site max-w-6xl">
          <div className="text-center mb-12">
            <p className="section-subheading">Get In Touch</p>
            <h2 className="section-heading">JOIN BSSFC OR BOOK A TRIAL</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
              Have questions about our academy sessions, scholarships, or summer camps? Fill out the form or reach us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 shadow-sm border border-gray-100 rounded-lg">
              <h3
                className="text-xl font-bold uppercase mb-6"
                style={{
                  fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                  color: "var(--bssfc-navy)",
                }}
              >
                Send Us A Message
              </h3>

              <form action="/api/contact" method="POST" className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Player or Parent Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-[#1A3F8F] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-[#1A3F8F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 95910 69293"
                      className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-[#1A3F8F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Player Age Group
                    </label>
                    <select
                      name="ageGroup"
                      className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-[#1A3F8F] bg-white transition-colors"
                    >
                      <option value="U7">Under 7 (Ages 5–7)</option>
                      <option value="U9">Under 9 (Ages 8–9)</option>
                      <option value="U11">Under 11 (Ages 10–11)</option>
                      <option value="U13">Under 13 (Ages 12–13)</option>
                      <option value="U15">Under 15 (Ages 14–15)</option>
                      <option value="U17">Under 17 (Ages 16–17)</option>
                      <option value="Senior">Senior (18+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                      Program of Interest
                    </label>
                    <select
                      name="program"
                      className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-[#1A3F8F] bg-white transition-colors"
                    >
                      <option value="academy">Academy Training</option>
                      <option value="school_university">School / University Coaching</option>
                      <option value="agewise">Age Wise Progression</option>
                      <option value="summer">Summer Camp</option>
                      <option value="trials">Free Consultation & Trial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Message / Inquiries
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your background or questions..."
                    className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-[#1A3F8F] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary justify-center w-full py-4 text-xs font-bold uppercase tracking-widest mt-2"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>

            {/* Contact details & Map */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div
                className="p-8 text-white flex flex-col gap-6 rounded-lg shadow-sm"
                style={{ background: "var(--bssfc-navy)" }}
              >
                <h3
                  className="text-lg font-bold uppercase tracking-wide border-b border-white/20 pb-4"
                  style={{ fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
                >
                  Direct Contact
                </h3>

                <div className="flex items-start gap-4">
                  <Phone size={18} className="shrink-0 mt-1 text-[#e9d319]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-0.5">Direct Line</p>
                    <a href="tel:+919591069293" className="block text-sm font-semibold hover:text-[#e9d319] transition-colors">
                      (+91) 95910 69293
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={18} className="shrink-0 mt-1 text-[#e9d319]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-0.5">Email Inquiries</p>
                    <a
                      href="mailto:coaching@bangaloresuperstrikersfc.com"
                      className="block text-sm font-semibold hover:text-[#e9d319] break-all transition-colors"
                    >
                      coaching@bangaloresuperstrikersfc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={18} className="shrink-0 mt-1 text-[#e9d319]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-0.5">Headquarters & Ground</p>
                    <p className="text-sm leading-relaxed text-white/90">
                      QPQ9+RQP, Thirumagondanahalli, Bommasandra, Tirumagondanahalli, Karnataka 562107
                    </p>
                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                      <a
                        href="https://maps.app.goo.gl/5XCLNndNmM3Kc4dd8?g_st=ac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e9d319] hover:underline transition-colors"
                        title="View on Google Maps"
                      >
                        <ExternalLink size={13} />
                        <span>View Location</span>
                      </a>
                      <a
                        href="https://maps.app.goo.gl/DhbdHLXyuBtY2EDRA?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00B8E0] hover:underline transition-colors"
                        title="Get Directions"
                      >
                        <Navigation size={13} />
                        <span>Get Directions →</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={18} className="shrink-0 mt-1 text-[#e9d319]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-0.5">Training Hours</p>
                    <p className="text-sm text-white/80">
                      Tuesday – Sunday: 6:00 AM – 8:30 PM<br />
                      Mondays: Rest / Recovery Day
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed / facility banner */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-100 flex flex-col shadow-sm">
                <div className="aspect-video relative w-full overflow-hidden">
                  <iframe
                    title="BSSFC Academy Location Map"
                    src="https://maps.google.com/maps?q=QPQ9%2BRQP%2C+Thirumagondanahalli%2C+Bommasandra%2C+Karnataka+562107&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 absolute inset-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
                  <a
                    href="https://maps.app.goo.gl/5XCLNndNmM3Kc4dd8?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4193] hover:text-[#e9d319] transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/DhbdHLXyuBtY2EDRA?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#11123c] bg-[#e9d319] hover:bg-[#1B4193] hover:text-white px-3 py-1.5 rounded transition-all"
                  >
                    <Navigation size={13} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
