# ✦ Gujjeti Avineesh — Portfolio

A high-fidelity personal portfolio site built with **React 19**, **Three.js**, and **GSAP**. Features a live WebGL 3D scene, scroll-driven animations, a multilingual iPhone-style intro screen, and smooth parallax section reveals.

> **Live →** *https://gujjeti-avineesh-portfolio-v1pf-fluhvdqoj.vercel.app
---

## ✨ Features

- **Immersive 3D Background** — Raw Three.js scene with an animated icosahedron wireframe, an inner spinner mesh, a 1 000-instance particle cloud, and a cylindrical text ribbon, all running on a fixed WebGL canvas behind the page content.
- **Cinematic Intro Sequence** — iPhone-style multilingual greeting screen that dissolves into the 3D scene via a multi-phase GSAP timeline (loading indicator → spinner dissolve → overlay fade → 3D text reveal → hero content stagger).
- **Scroll-Driven Camera** — A single GSAP ScrollTrigger maps page scroll progress (0 → 1) to a power-curve camera Y movement, lerp-smoothed every frame.
- **Mouse-Reactive Rotation** — Desktop mouse position drives the 3D group rotation in real time via per-frame lerp; touch devices fall back to auto-rotation.
- **Parallax Section Reveals** — Every content band animates from opacity 0 / translateY -80px to fully visible as it enters the viewport.
- **Five Content Sections** — Hero, About, Skills, Projects, Contact — each with its own internal staggered entrance animations.
- **Fully Responsive** — Works on desktop, tablet, and mobile. Touch devices receive adapted 3D behaviour.

---

## 🗂 Project Structure

```
G.Avineesh/
├── app/                        # Vite + React application
│   ├── src/
│   │   ├── App.tsx             # Root shell — canvas, scroll tracking, mouse tracking
│   │   ├── main.tsx            # React entry point
│   │   ├── hooks/
│   │   │   └── useScene.ts     # Full Three.js scene lifecycle (renderer, scene, RAF loop)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── components/
│   │   │   └── IPhoneIntro.tsx # Multilingual intro animation
│   │   ├── pages/
│   │   └── lib/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── vercel.json             # SPA rewrite rule for Vercel
│   └── package.json
├── tech-spec.md                # Architecture & animation decisions
└── GUJJETI AVINEESH RESUME.pdf
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| 3D engine | Three.js (raw — no React Three Fiber) |
| Animation | GSAP 3 + ScrollTrigger |
| Routing | React Router 7 |
| Icons | Lucide React |
| Fonts | DM Sans (display), Inter (body) via Fontsource |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/G.Avineesh.git
cd G.Avineesh/app

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with HMR enabled.

### Production Build

```bash
npm run build     # Type-check + bundle → dist/
npm run preview   # Preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## 🌐 Deployment (Vercel)

The project includes a `vercel.json` that rewrites all routes to `index.html` for SPA navigation.

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set the **Root Directory** to `app`.
4. Vercel auto-detects Vite — no extra configuration needed.
5. Click **Deploy**.

---

## 🎨 Animation Architecture

The animation system is split into two coordinated layers:

| Layer | Library | Runs In |
|---|---|---|
| 3D scene objects (icosahedron, cloud, ribbon) | Three.js | requestAnimationFrame loop outside React |
| DOM reveals & intro sequence | GSAP + ScrollTrigger | React useEffect hooks |

The two layers share lightweight refs (`scrollProgressRef`, `mousePosRef`) that React writes and the Three.js render loop reads — keeping 3D rendering fully decoupled from React's reconciler.

For a detailed breakdown of every animation, see [`tech-spec.md`](tech-spec.md).

---

## 📁 Key Files

| File | Purpose |
|---|---|
| `src/hooks/useScene.ts` | Entire Three.js scene: renderer, camera, all 3D objects, RAF loop, cleanup |
| `src/App.tsx` | Canvas mount, scroll progress tracking, mouse tracking, section layout |
| `src/components/IPhoneIntro.tsx` | Multilingual intro screen with GSAP exit timeline |
| `tech-spec.md` | Full architecture doc: dependencies, component inventory, animation plan |

---

## 📄 License

This project is personal and not licensed for redistribution. All design, code, and content belong to **Gujjeti Avineesh**.
