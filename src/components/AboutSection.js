import React from "react";

export default function AboutSection() {
  return (
    <section className="glass card-3d" style={{padding: '2rem', margin: '2rem auto', maxWidth: 600}}>
      <h2>About Me</h2>
      <p>Passionate Computer Science Engineering student at VIT-AP University with expertise in web development, AI applications, and full-stack programming. Active IEEE Student Chapter member committed to leveraging technology for innovative solutions.</p>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem'}}>
        <div className="glass card-3d" style={{flex: 1, minWidth: 180, padding: '1rem'}}>
          <h3>Programming Languages</h3>
          <span className="btn">Python</span> <span className="btn">Java</span> <span className="btn">JavaScript</span> <span className="btn">HTML/CSS</span>
        </div>
        <div className="glass card-3d" style={{flex: 1, minWidth: 180, padding: '1rem'}}>
          <h3>Frameworks</h3>
          <span className="btn">Flask</span> <span className="btn">React</span> <span className="btn">Node.js</span>
        </div>
        <div className="glass card-3d" style={{flex: 1, minWidth: 180, padding: '1rem'}}>
          <h3>Technologies</h3>
          <span className="btn">Git</span> <span className="btn">GitHub</span> <span className="btn">API Integration</span> <span className="btn">Database Management</span>
        </div>
        <div className="glass card-3d" style={{flex: 1, minWidth: 180, padding: '1rem'}}>
          <h3>Specializations</h3>
          <span className="btn">Web Development</span> <span className="btn">Artificial Intelligence</span> <span className="btn">Software Engineering</span> <span className="btn">UI/UX Design</span>
        </div>
      </div>
    </section>
  );
}
