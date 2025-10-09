import React, { useEffect, useState } from "react";

function Stat({ label, end }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [end]);
  return (
    <div className="glass card-3d" style={{padding: '1rem', margin: '1rem', minWidth: 120, textAlign: 'center'}}>
      <div style={{fontSize: '2rem', fontWeight: 'bold'}}>{count}</div>
      <div>{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="glass card-3d" aria-label="Animated Stats" tabIndex={0} style={{padding: '2rem', margin: '2rem auto', maxWidth: 600, display: 'flex', justifyContent: 'center', gap: '2rem'}}>
      <Stat label="GitHub Contributions" end={120} />
      <Stat label="Projects" end={8} />
      <Stat label="Hackathons" end={3} />
    </section>
  );
}
