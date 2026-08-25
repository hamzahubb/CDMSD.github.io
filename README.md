# Center for Disaster Management & Sustainable Development (CDMSD)
### Official Institutional Web Platform & Next.js Application

[![Framework: Next.js 14](https://img.shields.io/badge/Framework-Next.js%2014-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Status: Public Record Verified](https://img.shields.io/badge/Fact%20Verification-100%25%20Verified-168A8A?style=flat)](#strict-fact-checking--evidence-policy)

---

## 📖 Overview

This repository contains the official, production-ready web platform for the **Center for Disaster Management & Sustainable Development (CDMSD)**, a registered independent multidisciplinary consulting firm established in Pakistan in 2013.

CDMSD specializes in **Disaster Risk Management (DRM)**, **Climate Change Adaptation (CVRA)**, **WASH (Water, Sanitation & Hygiene)**, **Food Security & Livelihoods**, **Governance & Institutional Strengthening**, and **Third-Party Monitoring & Evaluation (MEL)**.

The website is engineered with a **Dual-Architecture pattern**:
1. **Next.js 14 (App Router)** with **TypeScript** and **Tailwind CSS** for modern scalable frontend development.
2. **Zero-Dependency Static Build** (HTML5/CSS3/ES6) for instant, portable deployment on any standard web server without a Node.js runtime.

---

## 🎨 Visual Identity & Brand Emblem

The website incorporates the official **3-cube isometric triad logo** reflecting CDMSD's core pillars:
* 🟧 **Top Amber/Orange Cube** (`#fbbf24` / `#f59e0b` / `#f97316`): Disaster Risk Reduction & Emergency Preparedness.
* 🟩 **Bottom-Left Lime/Green Cube** (`#a3e635` / `#84cc16` / `#65a30d`): Sustainable Development & Climate Adaptation.
* 🟦 **Bottom-Right Cyan/Blue Cube** (`#38bdf8` / `#0ea5e9` / `#0284c7`): Water, Sanitation & Hygiene (WASH).
* 🏛️ **Institutional Palette**: Deep Navy (`#123047`), Teal (`#168A8A`), Warm Amber (`#E49A45`), Off-White (`#F7F8F5`), Slate (`#17252D`).

---

## 🏛️ Strict Fact-Checking & Evidence Policy

To maintain maximum credibility for international development partners (UN agencies, INGOs, government ministries), every piece of information on this website conforms to an explicit three-tier standard:

| Tier | Badge | Definition & Scope |
|---|---|---|
| **`VERIFIED`** | `Public Record Verified` | Directly supported by public records, independent evaluation reports (e.g. SDC, ALNAP/DEC), or documented assignment records (e.g. 2013 establishment, 2019 SBDRM Master Trainer certification, Thar Desert emergency evaluation, Bajaur/Mohmand study, 2014 Flood WASH assessment). |
| **`CLIENT_PROVIDED`** | `Client Coordinated` | Reserved official placeholders for direct CDMSD coordination coordinates (`[OFFICIAL EMAIL]`, `[OFFICIAL PHONE]`, `[OFFICIAL OFFICE ADDRESS]`, and leadership directories) until provided directly by CDMSD administration. |
| **`EDITORIAL`** | `Editorial Context` | Contextual sectoral framing without asserting unverified metrics or fabricated partnerships. |

> **Institutional Independence Note:** CDMSD (founded in 2013) is a registered independent consulting firm and is completely distinct from the academic Center for Disaster Management (CDM) at the University of Management and Technology (UMT), Lahore.

---

## 📁 Project Structure

```
cdmsd/
├── app/                                 # Next.js 14 App Router Pages
│   ├── layout.tsx                       # Global Root Layout (TopBar, Header, Footer)
│   ├── globals.css                      # Tailwind base directives & tokens
│   ├── page.tsx                         # Homepage
│   ├── sitemap.ts                       # Dynamic XML Sitemap generator
│   ├── robots.ts                        # SEO Robot directives
│   ├── about/page.tsx                   # Institutional background, 2013 timeline & fact policy
│   ├── expertise/page.tsx               # Technical Practice Areas Hub
│   ├── expertise/[slug]/page.tsx        # Dynamic route for all 7 Practice Areas
│   ├── projects/page.tsx                # Filterable Project Portfolio
│   ├── projects/[slug]/page.tsx         # Dynamic route for Documented Field Assignments
│   ├── resources/page.tsx               # Knowledge Hub (Evaluations & Research)
│   ├── news/page.tsx                    # Field notes & updates
│   ├── team/page.tsx                    # Multidisciplinary expert network
│   ├── careers/page.tsx                 # Careers status & Consultant Roster modal
│   ├── contact/page.tsx                 # RFP inquiry form & contact coordinates
│   └── admin/page.tsx                   # Live CMS Data Explorer & Fact Verification Inspector
│
├── components/                          # Reusable React UI Components
│   ├── TopBar.tsx                       # Credibility bar with status indicator
│   ├── Header.tsx                       # Responsive header with official 3-cube logo
│   ├── Footer.tsx                       # Institutional footer with legal & independence notes
│   ├── Hero.tsx                         # Hero section with mission quote & action CTAs
│   ├── CredibilityStrip.tsx             # Fact-only organizational credentials
│   ├── ExpertiseCard.tsx                # Domain card with dynamic Lucide icons
│   ├── ProjectCard.tsx                  # Documented assignment card with source citations
│   ├── ProjectFilterGrid.tsx            # Live keyword search & sector filter engine
│   ├── PakistanMap.tsx                  # Interactive SVG vector map with geographic projection
│   ├── ResourceFilterGrid.tsx           # Category filter for publications & studies
│   ├── ContactForm.tsx                  # Institutional inquiry form with validation
│   ├── WorkWithUsModal.tsx              # Modal popup for institutional collaboration
│   └── ConsultantRosterModal.tsx        # Modal popup for technical consultant registration
│
├── lib/
│   └── data.ts                          # Type-Safe Headless Data Layer & Content Models
│
├── assets/                              # Static Build Assets
│   ├── images/
│   │   ├── cdmsd-logo.svg               # High-definition SVG vector logo
│   │   └── cdmsd-logo.jpg               # Official source raster logo
│   ├── css/
│   │   └── styles.css                   # Institutional CSS design system
│   └── js/
│       ├── app.js                       # UI controller (modals, forms, navigation)
│       ├── data.js                      # Headless client data models
│       └── map.js                       # Mathematical projection & SVG pin interactions
│
├── package.json                         # Node dependencies & scripts
├── tsconfig.json                        # TypeScript path aliases (@/*) & compiler options
├── tailwind.config.ts                   # Tailwind color configuration
└── postcss.config.js                    # PostCSS processor configuration
```

---

## ⚡ Key Interactive Features

1. **Interactive SVG Pakistan Map (`components/PakistanMap.tsx`)**:
   * Uses real latitude/longitude coordinates mapped to an SVG vector projection of Pakistan.
   * Interactive pins link to verified assignments in Islamabad, Tharparkar, Bajaur, Mohmand, Jhang, Muzaffargarh, and AJK.
2. **Live Project Search & Multi-Tag Filtering (`ProjectFilterGrid.tsx`)**:
   * Real-time client-side text search and category pill filtering across thematic tags and regions.
3. **Fact Verification Inspector (`app/admin/page.tsx`)**:
   * Administrative console showing real-time auditing of verified vs. client-pending content items with a raw JSON data viewer.
4. **Accessible Modals (`WorkWithUsModal.tsx` & `ConsultantRosterModal.tsx`)**:
   * Interactive dialogs with instant validation and keyboard navigation (Escape key support).
5. **SEO & Structured Data**:
   * Implements Schema.org JSON-LD `Organization` metadata, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🚀 Getting Started & Local Development

### Option 1: Instant Server (No installation required)
To run the pre-rendered production build immediately:
```powershell
python -m http.server 8000 --directory "d:\prd\cdmsd"
```
Open **[http://localhost:8000](http://localhost:8000)** in Google Chrome.

---

### Option 2: Next.js Development Server
To run the full Next.js development environment:
```powershell
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in Google Chrome.

---

### Option 3: Production Build & Static Export
```powershell
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment Options

* **Vercel / Netlify**: Connect the GitHub repository for automatic CI/CD deployment.
* **Cloudflare Pages / GitHub Pages**: Deploy the static HTML export directly.
* **Apache / Nginx / Docker**: Point web root to the project directory.

---

## 📄 License & Attribution

* **Organization**: Center for Disaster Management & Sustainable Development (CDMSD)
* **Established**: 2013 (Pakistan)
* **Platform Build**: Next.js 14 + TypeScript + Tailwind CSS
