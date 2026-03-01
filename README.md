# 🏛️ CivicPulse — Civic Sense Awareness & Community Reporting

> Your City. Your Voice. Your Impact.

CivicPulse is a modern web platform that **educates citizens about civic sense** and empowers them to **report, track, and upvote civic issues** in their communities — all in one place.

Built after researching platforms like SeeClickFix, FixMyStreet, CitizenLab, and Mark-a-Spot, CivicPulse fills the gaps they leave behind.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 📚 Civic Sense Education
Interactive guide covering 6 categories of civic sense with real-world examples:
- Public Conduct & Etiquette
- Environmental Responsibility
- Traffic & Road Safety
- Public Property Care
- Community Engagement
- Digital Civic Sense

### 🚨 Issue Reporting
Multi-step form to report civic issues with:
- Category selection (6 types)
- Severity levels — Low / Medium / High / Critical
- Photo upload with live preview
- Location/address input
- Review summary before submission

### 📋 Community Issues Board
- Public feed of all reported issues (sample + user-submitted)
- Filter by **category**, **severity**, and **status**
- Upvote issues that matter to you
- Status badges: Open → In Progress → Resolved

### 📊 Impact Dashboard
- Animated stat counters (issues reported, resolved, active citizens)
- Top contributors leaderboard with civic scores
- Category-wise issue breakdown with progress bars

### 💡 Civic Tips Carousel
- 8 curated daily civic tips with auto-rotation
- Covers environment, traffic, digital civics, and more
- Clickable grid + dot navigation

### ⚡ Why CivicPulse is Different
Feature comparison table showing what we offer that SeeClickFix, FixMyStreet, and others don't:

| Feature | Other Apps | CivicPulse |
|---------|:----------:|:----------:|
| Civic Education | ❌ | ✅ |
| Community Feed with Upvotes | ❌ | ✅ |
| Impact Dashboard & Leaderboard | ❌ | ✅ |
| Gamification & Scoring | ❌ | ✅ |
| Severity Priority System | ❌ | ✅ |
| Knowledge Base & Tips | ❌ | ✅ |
| Photo-based Reporting | ✅ | ✅ |
| Issue Status Tracking | ✅ | ✅ |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd civic-sense

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
civic-sense/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx            # Glassmorphism sticky navbar
│   │   ├── Footer.tsx            # Multi-column footer
│   │   ├── HeroSection.tsx       # Animated hero with particles
│   │   ├── CivicSenseInfo.tsx    # 6 expandable category cards
│   │   ├── ReportForm.tsx        # Multi-step report form
│   │   ├── IssuesFeed.tsx        # Issues board with filters
│   │   ├── ImpactDashboard.tsx   # Stats + leaderboard
│   │   ├── CivicTips.tsx         # Tips carousel
│   │   └── WhyDifferent.tsx      # Feature comparison table
│   ├── report/
│   │   └── page.tsx              # Dedicated report page
│   ├── issues/
│   │   └── page.tsx              # Dedicated issues board page
│   ├── globals.css               # Design system & theme
│   ├── layout.tsx                # Root layout with SEO
│   └── page.tsx                  # Home page
├── public/
├── package.json
└── tsconfig.json
```

---

## 🛣️ Routes

| Route | Description |
|-------|-------------|
| `/` | Home — all sections in a single-page experience |
| `/report` | Dedicated issue reporting form |
| `/issues` | Full issues board with advanced filtering |

---

## 🎨 Design

- **Theme**: Premium dark mode with emerald/teal accent palette
- **Typography**: Inter (Google Fonts)
- **Effects**: Glassmorphism navbar, floating particles, gradient text, animated counters
- **Responsive**: Fully responsive with mobile hamburger menu

---

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **localStorage** | Client-side data persistence (demo) |

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">Made with 💚 for civic-minded citizens</p>
