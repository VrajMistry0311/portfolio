import styles from './Footer.module.css';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>VM</span>
            <span className={styles.copyright}>© {new Date().getFullYear()} {personalInfo.name}</span>
          </div>
          <div className={styles.links}>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
          <p className={styles.made}>
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
}
