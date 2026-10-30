import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: {
    default: "Bangalore Super Strikers FC | Best Football Academy in Bangalore",
    template: "%s | BSSFC",
  },
  description:
    "Bangalore Super Strikers Football Club & Soccer School — top football coaching academy in Bangalore for ages 5–25. Academy training, school coaching, university scholarships & summer camp in Bangalore.",
  keywords: [
    "football academy Bangalore",
    "soccer school Bangalore",
    "football coaching Bangalore",
    "BSSFC",
    "Bangalore Super Strikers",
    "youth football Karnataka",
    "football training Bangalore",
  ],
  authors: [{ name: "Bangalore Super Strikers FC" }],
  creator: "BSSFC",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.bangaloresuperstrikersfc.com",
    siteName: site.site.name,
    title: "Bangalore Super Strikers FC | Best Football Academy in Bangalore",
    description:
      "Top football coaching academy in Bangalore for ages 5–25. Academy training, school coaching, university scholarships & summer camps.",
    images: [
      {
        url: "https://bangaloresuperstrikersfc.com/assets/imgs/logo.jpg",
        width: 400,
        height: 400,
        alt: "Bangalore Super Strikers FC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bangalore_super",
    creator: "@bangalore_super",
    title: "Bangalore Super Strikers FC | Best Football Academy in Bangalore",
    description:
      "Top football coaching academy in Bangalore for ages 5–25.",
    images: ["https://bangaloresuperstrikersfc.com/assets/imgs/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/assets/imgs/logobar.png",
    apple: "/assets/imgs/logobar.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsOrganization", "LocalBusiness"],
      "@id": "https://www.bangaloresuperstrikersfc.com/#organization",
      name: site.site.name,
      alternateName: site.site.shortName,
      url: "https://www.bangaloresuperstrikersfc.com",
      logo: "https://bangaloresuperstrikersfc.com/assets/imgs/logo.jpg",
      image: "https://bangaloresuperstrikersfc.com/assets/imgs/logo.jpg",
      description:
        "Football club and soccer school in Bangalore, offering academy training, school coaching, university scholarships and summer camps for players aged 5–25.",
      telephone: [site.site.phone1Display, site.site.phone2Display],
      email: site.site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "QPQ9+RQP, Thirumagondanahalli, Bommasandra, Tirumagondanahalli",
        addressLocality: "Bommasandra, Bangalore",
        addressRegion: "Karnataka",
        postalCode: "562107",
        addressCountry: "IN",
      },
      sameAs: [
        site.site.socials.instagram,
        site.site.socials.facebook,
        site.site.socials.twitter,
        site.site.socials.youtube,
        site.site.socials.linkedin,
      ],
      sport: "Football",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="canonical" href="https://www.bangaloresuperstrikersfc.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#696484] bg-[#F8F9FC]">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
