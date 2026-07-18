'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import { skills } from '@/lib/data';

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

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, 0.1);
  const [leetcode, setLeetcode] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    fetch('/api/leetcode')
      .then(r => r.json())
      .then(data => {
        if (!data.error) {
          setLeetcode({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            ranking: data.ranking,
          });
        }
      })
      .catch(() => {});
  }, []);

  const skillEntries = Object.values(skills);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className={styles.grid}>
          {skillEntries.map((category, index) => (
            <div
              key={category.label}
              className={`${styles.skillCard} glass-card ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className={styles.categoryLabel} style={{ color: category.color }}>
                <span className={styles.dot} style={{ background: category.color }} />
                {category.label}
              </h3>
              <div className={styles.tags}>
                {category.items.map(item => (
                  <span key={item} className={styles.tag} style={{ borderColor: `${category.color}22`, color: category.color, background: `${category.color}0a` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Stats */}
        <div className={`${styles.leetcode} glass-card ${inView ? styles.visible : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div className={styles.leetcodeHeader}>
            <svg className={styles.leetcodeIcon} viewBox="0 0 24 24" width="28" height="28" fill="var(--accent-amber)">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
            <div>
              <h3 className={styles.leetcodeTitle}>LeetCode</h3>
              <a href="https://leetcode.com/u/vrajmistry0311/" target="_blank" rel="noopener noreferrer" className={styles.leetcodeLink}>@vrajmistry0311</a>
            </div>
          </div>
          {leetcode ? (
            <div className={styles.leetcodeStats}>
              <div className={styles.lcStat}>
                <span className={styles.lcNum}>{leetcode.totalSolved}</span>
                <span className={styles.lcLabel}>Total Solved</span>
              </div>
              <div className={styles.lcStat}>
                <span className={styles.lcNum} style={{ color: '#00b8a3' }}>{leetcode.easySolved}</span>
                <span className={styles.lcLabel}>Easy</span>
              </div>
              <div className={styles.lcStat}>
                <span className={styles.lcNum} style={{ color: '#ffc01e' }}>{leetcode.mediumSolved}</span>
                <span className={styles.lcLabel}>Medium</span>
              </div>
              <div className={styles.lcStat}>
                <span className={styles.lcNum} style={{ color: '#ef4743' }}>{leetcode.hardSolved}</span>
                <span className={styles.lcLabel}>Hard</span>
              </div>
              <div className={styles.lcStat}>
                <span className={styles.lcNum}>#{leetcode.ranking?.toLocaleString()}</span>
                <span className={styles.lcLabel}>Ranking</span>
              </div>
            </div>
          ) : (
            <div className={styles.leetcodeLoading}>Loading stats...</div>
          )}
        </div>
      </div>
    </section>
  );
}
