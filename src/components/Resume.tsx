'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './Resume.module.css';
import { resumeData, personalInfo } from '@/lib/data';

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

export default function Resume() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">My professional journey at a glance.</p>
          </div>
          <a href="/resume.pdf" download className={styles.downloadBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Skills summary */}
        <div className={`${styles.skillsGrid} ${inView ? styles.visible : ''}`}>
          {Object.entries(resumeData.technicalSkills).map(([category, value], i) => (
            <div key={category} className={`${styles.skillBlock} glass-card`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <h4 className={styles.skillCategory}>{category}</h4>
              <p className={styles.skillList}>{value}</p>
            </div>
          ))}
        </div>

        {/* Experience timeline */}
        <div className={styles.experienceSection}>
          <h3 className={styles.sectionLabel}>Experience</h3>
          {resumeData.positions.map((pos, i) => (
            <div key={i} className={`${styles.position} glass-card ${inView ? styles.visible : ''}`} style={{ transitionDelay: `${0.4 + i * 0.15}s` }}>
              <div className={styles.posHeader}>
                <div>
                  <h4 className={styles.posTitle}>{pos.title}</h4>
                  <p className={styles.posCompany}>{pos.company} · {pos.location}</p>
                </div>
                <span className={styles.posPeriod}>{pos.period}</span>
              </div>
              <ul className={styles.posBullets}>
                {pos.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.experienceSection}>
          <h3 className={styles.sectionLabel}>Education</h3>
          <div className={`${styles.position} glass-card ${inView ? styles.visible : ''}`} style={{ transitionDelay: '0.7s' }}>
            <div className={styles.posHeader}>
              <div>
                <h4 className={styles.posTitle}>{resumeData.education.degree}</h4>
                <p className={styles.posCompany}>{resumeData.education.institution}</p>
              </div>
              <div className={styles.eduRight}>
                <span className={styles.posPeriod}>{resumeData.education.year}</span>
                <span className={styles.cgpa}>CGPA: {resumeData.education.cgpa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
