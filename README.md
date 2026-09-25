# Gujjeti Avineesh — Portfolio

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A high-fidelity, interactive personal portfolio website engineered by **Gujjeti Avineesh**. Built with React 19, raw Three.js WebGL rendering, and GSAP ScrollTrigger animations.

> **Live Deployment:** [https://gujjeti-avineesh-portfolio-v1pf-fluhvdqoj.vercel.app](https://gujjeti-avineesh-portfolio-v1pf-fluhvdqoj.vercel.app)  
> **GitHub Repository:** [https://github.com/Avineesh-G/My-portfolio](https://github.com/Avineesh-G/My-portfolio)

---

## Key Features

- **Immersive 3D Canvas Background**: Fixed WebGL canvas running behind page content, featuring a wireframe icosahedron, an inner spinner mesh, a 1,000-instance particle field, and a cylindrical text ribbon driven by a high-performance `requestAnimationFrame` loop.
- **Cinematic iPhone Intro Sequence**: Multilingual intro greeting screen with a multi-phase GSAP timeline (loading indicator -> spinner dissolve -> overlay fade -> 3D text reveal -> hero content stagger).
- **Scroll-Driven Camera**: GSAP ScrollTrigger mapping page scroll progress (0 to 1) to a power-curve camera Y movement, lerp-smoothed on every frame.
- **Mouse & Touch Reactive 3D Group**: Desktop mouse coordinates rotate the 3D scene in real time via per-frame lerp, with an auto-rotation fallback for touch devices.
- **Parallax Section Reveals**: Content bands animate smoothly from `opacity: 0` and `translateY: -80px` to fully visible upon entering the viewport.
- **Featured Work Grid**: Showcase of 8+ full-stack, machine learning, deep learning, and mobile applications with live demo links, repository links, and tech stack tags.

---

## Featured Projects

| Project | Category | Key Technologies | Links |
|---|---|---|---|
| **LifeOS** | Android / Web OS | React, TypeScript, Capacitor 8, Android Native, Tailwind CSS, Firebase, Google Generative AI | [Live / Download](https://lifeos-gujjeti-avineeshs-projects.vercel.app/download) \| [GitHub](https://github.com/Avineesh-G/LIFEOS) |
| **Flow Tracker** | Financial PWA | React 18, TypeScript, Tailwind CSS, Framer Motion, Zustand, Recharts, Google OAuth, Gmail API, PWA | [Live Demo](https://flow-expenses-tracker.vercel.app/) \| [GitHub](https://github.com/Avineesh-G/Flow-Expenses-Tracker) |
| **OceanEmbed (SIH)** | Geospatial Deep Learning | React, TypeScript, FastAPI, Python, PyTorch, Tailwind CSS, NetCDF Oceanographic Data | [GitHub](https://github.com/Avineesh-G/Ocean-embed-main) |
| **Cricket Action ML** | Computer Vision / ML | Python, Scikit-Learn, OpenCV, MediaPipe Pose, Random Forest, SVM, Optical Flow, HOG, PCA | [GitHub](https://github.com/Avineesh-G/Python-Model-Cricket-Analyzer-) |
| **GitHub Developer Predictor** | Machine Learning Analytics | Python, Scikit-Learn, Gradient Boosting, Random Forest, GitHub REST API, Pandas, NumPy | [GitHub](https://github.com/Avineesh-G/Github-Profile-Analyzer) |
| **CompanionX** | Bus Ride-Sharing | TypeScript, JavaScript, HTML, CSS | [Live Demo](https://companion-x.vercel.app/) |
| **LaundryHub** | AI Laundry Management | React, TypeScript, Firebase, Tailwind CSS, Gemini AI | [Live Demo](https://laundryhub-5ab8e.web.app/login) |
| **Ultimate Career AI** | AI Career Advisor | JavaScript, Node.js, Firebase, Gemini AI, Chart.js | [Live Demo](https://ultimate-career-ai-456a5.web.app/) |
| **Hand Gesture Space Shooter** | Gesture Controlled Game | JavaScript, MediaPipe, HTML, CSS | [Live Demo](https://hand-gestures-space-void.vercel.app/) |

---

## Skills Architecture

- **Languages**: Java, Python, JavaScript, TypeScript, C / C++, SQL, HTML5, CSS3
- **Frameworks & Libraries**: React.js, Next.js, FastAPI, Node.js, Tailwind CSS, Zustand, Recharts, Chart.js, Vite, Framer Motion
- **Databases & Backend**: Firebase, Firestore, REST APIs, MongoDB, NetCDF / Oceanographic Data
- **Machine Learning & AI**: Scikit-Learn, PyTorch, Computer Vision (OpenCV), MediaPipe Pose Tracking, Predictive Modeling, Feature Engineering, Gemini AI, Reinforcement Learning, NPC Behaviour Training
- **Tools & Platforms**: Git, GitHub, Capacitor (Android Native), PWA (Progressive Web Apps), Google OAuth & Gmail API, Biometric Auth, CI/CD, Vercel, Firebase Hosting, Netlify, Figma, Canva
- **Core Fundamentals**: Data Structures & Algorithms, OOPs, DBMS, System Design

---

## Project Structure

```text
G.Avineesh/
├── app/                        # Vite + React 19 application
│   ├── src/
│   │   ├── App.tsx             # Root shell — canvas mount, scroll & mouse tracking
│   │   ├── main.tsx            # React entry point
│   │   ├── hooks/
│   │   │   └── useScene.ts     # Three.js lifecycle (renderer, camera, particles, RAF loop)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── components/
│   │   │   ├── IPhoneIntro.tsx # Multilingual intro animation
│   │   │   ├── ProjectCard.tsx # Project card component with live & github links
│   │   │   └── SkillPill.tsx   # Skill badge with Devicon / Lucide icon mappings
│   ├── public/
│   │   └── assets/             # Project screenshots & visual assets
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── vercel.json             # Vercel SPA route rewrite configuration
│   └── package.json
├── tech-spec.md                # Architecture & animation specification
└── GUJJETI AVINEESH RESUME.pdf
```

---

## Tech Stack Summary

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| 3D Engine | Three.js (raw WebGL — no R3F wrapper) |
| Animation | GSAP 3 + ScrollTrigger |
| Routing | React Router 7 |
| Icons | Devicon CDN + Lucide React |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Avineesh-G/My-portfolio.git
cd My-portfolio/app

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

App will run locally at `http://localhost:3000` with HMR enabled.

### Production Build

```bash
npm run build     # Type-check + bundle -> build/
npm run preview   # Preview production build locally
```

---

## Deployment (Vercel)

The repository contains `app/vercel.json` configured for single-page application routing.

1. Import the repository `https://github.com/Avineesh-G/My-portfolio` into Vercel.
2. Set the **Root Directory** to `app`.
3. Vercel auto-detects Vite. Click **Deploy**.

---

## License

This project is personal and proprietary. All design, source code, and assets belong to **Gujjeti Avineesh**.
