'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';
import { experience } from '@/lib/data';

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

function MetricCounter({ value, suffix = '', label }: { value: string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);
  const numVal = parseFloat(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = numVal / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numVal) {
        setCount(numVal);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, numVal]);

  return (
    <div ref={ref} className={styles.metric}>
      <span className={styles.metricValue}>
        {Number.isInteger(numVal) ? Math.floor(count) : count.toFixed(1)}
        <span className={styles.metricSuffix}>{suffix}</span>
      </span>
      <span className={styles.metricLabel}>{label}</span>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          3+ years building enterprise-scale AI solutions, microservices, and cutting-edge frontends.
        </p>
        <div className={styles.timeline}>
          {experience.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <div
      ref={ref}
      className={`${styles.card} glass-card ${inView ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{project.icon}</span>
        <div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardSubtitle}>{project.subtitle}</p>
        </div>
      </div>
      <p className={styles.cardDescription}>{project.description}</p>
      <div className={styles.metrics}>
        {project.metrics.map(m => (
          <MetricCounter key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
        ))}
      </div>
      <ul className={styles.highlights}>
        {project.highlights.map((h, i) => (
          <li key={i} className={styles.highlight}>
            <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {h}
          </li>
        ))}
      </ul>
      <div className={styles.techStack}>
        {project.techStack.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
}
