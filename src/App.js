import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import "./styles/glass.css";
import profilePhoto from "../Avineesh Gujjeti.jpg";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <div className="app-container">
      <DarkModeToggle />
      <header className="glass card-3d" style={{padding: '2rem', margin: '2rem auto', maxWidth: 400, textAlign: 'center'}}>
        <img src={profilePhoto} alt="Gujjeti Avineesh" loading="lazy" style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 16px rgba(0,0,0,0.15)'}} />
        <h1>Gujjeti Avineesh</h1>
        <p>Computer Science Engineering Student | IEEE Student Chapter Member</p>
      </header>
      <main>
        <AboutSection />
        {/* Add more sections here, applying glass and card-3d classes for design */}
      </main>
    </div>
  );
}
