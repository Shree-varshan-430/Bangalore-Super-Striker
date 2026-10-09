# Bangalore Super Strikers FC (BSSFC) — Website Rebuild

Designed & Developed by [AI BuildInfra](https://aibuildinfra.com/)

Modern, accessible, fast, and SEO-optimized website for **Bangalore Super Strikers Football Club & Soccer School**. Designed to replicate the visual rhythm, header behaviors, typography scale, section flow, and card designs of [Bengaluru FC](https://www.bengalurufc.com/), while ensuring 100% authentic BSSFC copy, assets, results, and contact information from [Bangalore Super Strikers FC](https://www.bangaloresuperstrikersfc.com/).

---

## 🛠 Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Custom Design Tokens (BSSFC Navy `#0A1B3D`, Gold `#F5A623`, Royal Blue `#1A3F8F`, Red `#D0202A`)
- **Animation:** Framer Motion + `react-intersection-observer` (Scroll Reveal & Carousel Transitions)
- **Icons:** Lucide React + Bespoke Accessible Social SVGs
- **Content Management:** Fully typed JSON structure in `/content` for zero-code client updates

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with v22)
- npm or yarn

### Installation & Development
```bash
# Navigate to the website root
cd "bssfc-website"

# Install dependencies (if setting up fresh)
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📝 How to Edit Content Without Touching Components

All club data is organized in the `/content` folder:
- **`content/site.json`**: Global metadata, phone numbers, emails, addresses, social links, foundation link.
- **`content/hero.json`**: Homepage hero banner slides, titles, eyebrow tags, and CTAs.
- **`content/fixtures.json`**: Match results, upcoming fixtures (`null` creates the authentic "TBA" empty state), and trial phone triggers.
- **`content/achievements.json`**: News stories, tournament knockout reports, and external GoMaidan / YouTube links.
- **`content/programs.json`**: Curriculum points, age eligibility, and descriptions for all 4 club coaching tracks.
- **`content/testimonials.json`**: Verbatim parent reviews and player feedback.
- **`content/videos.json`**: YouTube video IDs and highlights for the BSSFC TV grid.

---

## 🔎 SEO & Accessibility Features
- **Meta Hierarchy:** Unique page title & meta descriptions for every preserved URL targeting *"football academy Bangalore"*, *"soccer school Bangalore"*, and *"football coaching Bangalore"*.
- **JSON-LD Structured Data:** SportsOrganization & LocalBusiness schema embedded globally, with BreadcrumbList schema on inner pages.
- **Automated Sitemaps & Robots:** Auto-generated at `/sitemap.xml` and `/robots.txt`.
- **Accessibility:** Skip-to-content anchor, semantic headings (one H1 per page), full keyboard-navigable dropdowns and mobile drawer, image `alt` tags, and `prefers-reduced-motion` compliance.

---

## 📞 Items to Confirm with the Client
1. **Primary Phone Routing:** Confirm whether `(+91) 95917 69293`, `(+91) 95910 69293`, or the WhatsApp line `(+91) 97398 69535` is the primary phone number.
2. **Trophy Cabinet & Honours:** Provide exact trophy names and championship years to replace the Reach grid with an Honours showcase.
3. **Foundation Page Strategy:** Confirm whether the Foundation should remain an external link to `bssfc.in` or be unified into this website.
4. **Form & Newsletter Provider:** Confirm preferred email service (e.g., Resend, Brevo, SendGrid, or direct SMTP) for routing inquiries.

---

## 💻 Credits & Development

Designed & Developed by **[AI BuildInfra](https://aibuildinfra.com/)** — Intelligent Digital Infrastructure & Web Engineering.

