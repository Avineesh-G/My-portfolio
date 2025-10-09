import React, { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  }

  return (
    <section className="glass card-3d" aria-label="Contact Form" tabIndex={0} style={{padding: '2rem', margin: '2rem auto', maxWidth: 500}}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required aria-required="true" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required aria-required="true" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required aria-required="true" />
        <button type="submit" className="btn" disabled={loading} aria-busy={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {loading && <div className="spinner" aria-live="polite" />}
      {sent && <div role="status">Thank you! Your message was sent.</div>}
    </section>
  );
}
