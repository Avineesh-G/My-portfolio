import React from "react";

export default function BlogSection() {
  return (
    <section className="glass card-3d" aria-label="Blog Section" tabIndex={0} style={{padding: '2rem', margin: '2rem auto', maxWidth: 700}}>
      <h2>Blog & Articles</h2>
      <div>
        <article className="glass card-3d" style={{marginBottom: '1.5rem', padding: '1rem'}}>
          <h3>
            <a href="https://24bca7481.blogspot.com/2024/12/flood-resilient-park-with-underground.html" target="_blank" rel="noopener noreferrer">
              Flood Resilient Park with Underground Water Storage
            </a>
          </h3>
          <p>Designing parks to manage floods and store water underground for resilience.</p>
        </article>
        <article className="glass card-3d" style={{marginBottom: '1.5rem', padding: '1rem'}}>
          <h3>
            <a href="https://24bca7481.blogspot.com/2024/11/1.html" target="_blank" rel="noopener noreferrer">
              1
            </a>
          </h3>
          <p>Blog post published in November 2024.</p>
        </article>
      </div>
    </section>
  );
}
