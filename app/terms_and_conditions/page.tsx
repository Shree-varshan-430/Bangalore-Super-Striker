import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms and Conditions | Bangalore Super Strikers FC",
  description: "Terms and conditions of participation and service at Bangalore Super Strikers Football Club.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/terms_and_conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        crumbs={[{ label: "Terms & Conditions" }]}
      />
      <section className="section-py">
        <div className="container-site max-w-4xl text-gray-700 leading-relaxed text-sm flex flex-col gap-6">
          <p className="font-semibold text-base text-gray-900">
            Terms of Participation & Code of Conduct
          </p>

          <p>
            By enrolling in any program, training session, trial, or camp organized by Bangalore Super Strikers Football Club And Soccer School (BSSFC), parents, players, and participants agree to abide by the following terms:
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            1. Player Conduct & Fair Play
          </h2>
          <p>
            BSSFC champions sportsmanship, integrity, and discipline. Discrimination, bullying, abusive language, or unsporting conduct towards teammates, opposition players, referees, or coaches will result in immediate disciplinary review or expulsion without refund.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            2. Health, Fitness & Injury Disclaimer
          </h2>
          <p>
            Football is a physically strenuous contact sport with inherent risks of physical exertion and accidental injury. While BSSFC exercises safety protocols and provides certified coaching supervision, parents/guardians verify that participants are physically fit and hold relevant medical insurance coverage.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            3. Media & Photography Consent
          </h2>
          <p>
            During training, league matches, and tournaments, photographs and video footage of players may be captured for coaching analysis, celebratory social media channels, and promotional publication on the official club website.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            4. Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws of Karnataka, India. Any disputes arising shall be subject exclusively to the courts of Bangalore.
          </p>
        </div>
      </section>
    </>
  );
}
