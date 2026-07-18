'use client';
import { useRef, useState, useEffect, FormEvent } from 'react';
import styles from './Contact.module.css';
import { personalInfo } from '@/lib/data';

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('https://formspree.io/f/mgogkvwj', { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      setSubmitted(true);
      form.reset();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
        </p>

        <div className={`${styles.grid} ${inView ? styles.visible : ''}`}>
          {/* Contact info */}
          <div className={styles.info}>
            <div className={`${styles.infoCard} glass-card`}>
              <h3 className={styles.infoTitle}>Contact Info</h3>
              <div className={styles.infoItems}>
                <a href={`mailto:${personalInfo.email}`} className={styles.infoItem}>
                  <span className={styles.infoIcon}>📧</span>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>{personalInfo.email}</span>
                  </div>
                </a>
                <a href={`tel:${personalInfo.phone}`} className={styles.infoItem}>
                  <span className={styles.infoIcon}>📱</span>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <span className={styles.infoValue}>{personalInfo.phone}</span>
                  </div>
                </a>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socials}>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} glass-card`} aria-label="LinkedIn">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} glass-card`} aria-label="GitHub">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} glass-card`} aria-label="LeetCode">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formCard} glass-card`}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✉️</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input type="text" id="name" name="name" required className={styles.input} placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" required className={styles.input} placeholder="you@example.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" name="message" required rows={5} className={styles.textarea} placeholder="Your message..." />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
