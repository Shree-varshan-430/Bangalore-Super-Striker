import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Refund Policy | Bangalore Super Strikers FC",
  description: "Official Refund and Cancellation Policy of Bangalore Super Strikers Football Club.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/refund_policy" },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title="Refund Policy"
        crumbs={[{ label: "Refund Policy" }]}
      />
      <section className="section-py">
        <div className="container-site max-w-4xl text-gray-700 leading-relaxed text-sm flex flex-col gap-6">
          <p className="font-semibold text-base text-gray-900">
            Effective Date: January 2026
          </p>

          <p>
            At Bangalore Super Strikers Football Club And Soccer School, we commit resources, pitch bookings, and certified coaching staff ahead of each scheduled season and training cycle.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            1. Registration & Consultation Fees
          </h2>
          <p>
            Free consultation and trial sessions are provided at no fee. Academy registration or kit fees paid upon official onboarding are non-refundable once sports equipment and personalized kits are allocated.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            2. Term & Camp Tuition
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Cancellation before commencement:</strong> Cancellations received at least 7 days prior to camp commencement are eligible for an 80% refund or full credit transfer to a subsequent semester.
            </li>
            <li>
              <strong>After session commencement:</strong> Once coaching batches have commenced, pro-rated refunds are generally not permitted except under verified medical incapacitation accompanied by doctor certification.
            </li>
          </ul>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            3. Weather & Ground Cancellations
          </h2>
          <p>
            Sessions cancelled due to torrential rain, pitch unsuitability, or natural force majeure will be rescheduled for makeup sessions or extended training clinics rather than direct monetary refunds.
          </p>

          <h2 className="text-xl font-bold uppercase text-gray-900 mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            4. Claims & Contact
          </h2>
          <p>
            To submit a refund or enrollment transfer query, contact management via coaching@bangaloresuperstrikersfc.com with proof of payment receipt.
          </p>
        </div>
      </section>
    </>
  );
}
