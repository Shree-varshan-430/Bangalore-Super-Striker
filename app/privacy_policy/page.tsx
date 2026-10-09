import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Bangalore Super Strikers FC",
  description: "Official Privacy Policy of Bangalore Super Strikers Football Club And Soccer School.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/privacy_policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="section-py">
        <div className="container-site max-w-4xl text-gray-700 leading-relaxed text-sm flex flex-col gap-6">
          <p className="font-semibold text-base text-gray-900">
            Last Updated: January 2026
          </p>

          <p>
            Bangalore Super Strikers Football Club and Soccer School (“BSSFC”, “we”, “our”, or “us”) respects the privacy of players, parents, guardians, and visitors to our website (https://www.bangaloresuperstrikersfc.com). This Privacy Policy explains how we collect, store, and safeguard your personal details when you engage with our training programmes, register for trials, or contact our coaching staff.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            1. Information We Collect
          </h2>
          <p>
            When registering for trials, programmes, scholarship auditions, or newsletters, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Player's full name, date of birth, age, gender, and playing position.</li>
            <li>Parent or guardian's full name, email address, telephone numbers, and residential address.</li>
            <li>Relevant medical details or emergency contact notes essential for player safety during field sessions.</li>
          </ul>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            2. Use of Information
          </h2>
          <p>
            Information collected is strictly utilized to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Administer training sessions, match fixtures, and tournament registrations with KSFA/AIFF.</li>
            <li>Communicate match schedules, venue changes, and progress evaluations.</li>
            <li>Ensure player safety and emergency medical preparedness during active coaching.</li>
          </ul>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            3. Data Protection and Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. Data is only shared with accredited governing sports authorities (e.g., KSFA, AIFF) where officially mandated for league player accreditation.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            4. Contact
          </h2>
          <p>
            For privacy inquiries, please email coaching@bangaloresuperstrikersfc.com or write to our registered facility address at QPQ9+RQP, Thirumagondanahalli, Bommasandra, Tirumagondanahalli, Karnataka 562107.
          </p>
        </div>
      </section>
    </>
  );
}
