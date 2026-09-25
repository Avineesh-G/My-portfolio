import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "LifeOS – Unified Personal Operating System",
    description:
      "A unified, offline-first personal operating system for Android and Web. Features native launcher widgets, hardware-synced focus timers, gym hypertrophy tracking, trip expense splitting, biometric vault, mess menu, and automated SHA-256 APK updates.",
    image: "/assets/lifeos.jpg",
    techStack: ["React", "TypeScript", "Capacitor 8", "Android Native", "Tailwind CSS", "Firebase", "Google Generative AI", "Framer Motion"],
    link: "https://lifeos-gujjeti-avineeshs-projects.vercel.app/download",
    githubLink: "https://github.com/Avineesh-G/LIFEOS",
  },
  {
    name: "AI Cyber Defense Platform",
    description:
      "Advanced AI cybersecurity platform for Network Intrusion Detection (NIDS), Graph Neural Network (GraphSAGE) lateral movement threat analysis, automated threat intelligence pipelines, and real-time low-latency FastAPI prediction microservices.",
    image: "/assets/cyber-defense.jpg",
    techStack: ["Python", "PyTorch", "PyTorch Geometric", "Graph Neural Networks", "FastAPI", "Scikit-Learn", "Transformers", "Cybersecurity Analytics"],
    githubLink: "https://github.com/Avineesh-G/AI-Cyber-Defence-platform",
  },
  {
    name: "Flow – Personal Expense & Savings Tracker (PWA)",
    description:
      "A calm, local-first personal financial companion featuring automatic Gmail transaction sync across 14 Indian banking domains, Google OAuth2, Zustand state persistence, Recharts donut insights, calendar spending heatmaps, and PWA installation.",
    image: "/assets/flow-expense-tracker.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Recharts", "Google OAuth & Gmail API", "PWA"],
    link: "https://flow-expenses-tracker.vercel.app/",
    githubLink: "https://github.com/Avineesh-G/Flow-Expenses-Tracker",
  },
  {
    name: "OceanEmbed – Subsurface Ocean Temperature Reconstruction (SIH)",
    description:
      "Engineered an oceanographic modeling and visualization system to reconstruct 3D subsurface ocean temperature profiles across the North Indian Ocean using Copernicus Marine Service NetCDF datasets, FastAPI REST microservices, PyTorch, and a React dashboard.",
    image: "/assets/oceanembed.jpg",
    techStack: ["React", "TypeScript", "FastAPI", "Python", "PyTorch", "Tailwind CSS", "NetCDF Oceanographic Data"],
    githubLink: "https://github.com/Avineesh-G/Ocean-embed-main",
  },
  {
    name: "Cricket Action Recognition — ML Pipeline",
    description:
      "Machine learning pipeline classifying 23 cricket outcome classes (shots, dismissals, bowling types) from video clips and MediaPipe 3D pose keypoints using early feature fusion, HOG, Optical Flow, PCA, and calibrated soft Voting Classifiers (Random Forest + SVM).",
    image: "/assets/cricket-action-ml.jpg",
    techStack: ["Python", "Scikit-Learn", "OpenCV", "MediaPipe Pose", "Random Forest & SVM", "Optical Flow & HOG", "PCA"],
    githubLink: "https://github.com/Avineesh-G/Python-Model-Cricket-Analyzer-",
  },
  {
    name: "GitHub Developer Evolution Predictor",
    description:
      "Machine learning predictive framework that analyzes 22 developer activity metrics via GitHub REST API to forecast career growth rate, hire probability (regression), project quality score, developer tier, and next technology recommendations.",
    image: "/assets/github-developer-predictor.jpg",
    techStack: ["Python", "Scikit-Learn", "Gradient Boosting", "Random Forest", "GitHub REST API", "Pandas", "NumPy"],
    githubLink: "https://github.com/Avineesh-G/Github-Profile-Analyzer",
  },
  {
    name: "CompanionX – Intelligent Ride-Sharing Platform",
    description:
      "Engineered a web-based ride-sharing platform designed to optimize bus travel costs by intelligently matching users with co-travellers on shared routes.",
    image: "/assets/companion-x.png",
    techStack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    link: "https://companion-x.vercel.app/",
  },
  {
    name: "LaundryHub – AI-Based Laundry Management System",
    description:
      "Developed a full-stack AI-powered laundry management platform featuring QR-based tracking, multi-role dashboards, real-time notifications, and Gemini AI chatbot integration.",
    image: "/assets/laundry-hub.png",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Gemini AI"],
    link: "https://laundryhub-5ab8e.web.app/login",
    zoomOut: true,
  },
  {
    name: "Ultimate Career AI – AI Career Recommendation Platform",
    description:
      "Built an AI-powered career assessment and recommendation platform delivering personalized insights through Gemini AI with PDF reports, analytics dashboards, and automated email delivery.",
    image: "/assets/ultimate-career-ai.png",
    techStack: ["JavaScript", "Node.js", "Firebase", "Gemini AI", "Chart.js"],
    link: "https://ultimate-career-ai-456a5.web.app/",
    zoomOut: true,
  },
  {
    name: "Hand Gesture Space Shooter",
    description:
      "Created a browser-based space shooter game controlled entirely through webcam hand gestures without requiring installations or external hardware.",
    image: "/assets/space-shooter.png",
    techStack: ["JavaScript", "MediaPipe", "HTML", "CSS"],
    link: "https://hand-gestures-space-void.vercel.app/",
    zoomOut: true,
  },
];

export function ProjectsSection() {
  const bandRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!bandRef.current || !innerRef.current) return;

    gsap.fromTo(
      bandRef.current,
      { opacity: 0, y: -80 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: bandRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 0.5,
        },
      }
    );

    // Heading and intro
    const header = innerRef.current.querySelector("[data-header]");
    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    const intro = innerRef.current.querySelector("[data-intro]");
    if (intro) {
      gsap.fromTo(
        intro,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: 0.2,
        }
      );
    }

    // Project cards stagger
    const cards = innerRef.current.querySelectorAll("[data-card]");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });
  }, { scope: bandRef });

  return (
    <div ref={bandRef} className="w-full bg-white opacity-0" style={{ padding: "80px 0" }}>
      <div ref={innerRef} className="mx-auto px-6 md:px-[60px]" style={{ maxWidth: 1200 }}>
        <h2
          data-header
          className="font-display text-4xl text-charcoal tracking-[0.05em] mb-4 opacity-0"
        >
          Selected Work
        </h2>
        <p
          data-intro
          className="font-body text-base text-mist leading-relaxed max-w-[600px] mb-12 opacity-0"
        >
          A selection of projects I've built — from real-time data platforms to
          developer tooling and open-source contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} data-card className="opacity-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
