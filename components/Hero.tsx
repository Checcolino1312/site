'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent} ref={contentRef}>
          <div className={`${styles.heroSubtitle} animate-on-scroll`}>ciao, sono</div>
          <h1 className={`${styles.heroTitle} animate-on-scroll`}>
            francesco paolo ragusa
          </h1>
          <p className={`${styles.heroDescription} animate-on-scroll`}>
            Web Developer, IT Consultant e Studente di Informatica appassionato di tecnologie moderne e soluzioni innovative
          </p>
          <div className={`${styles.ctaButtons} animate-on-scroll`}>
            <a href="#portfolio" className={`${styles.btn} ${styles.btnPrimary}`}>
              <i className="fas fa-rocket"></i>
              Scopri i miei progetti
            </a>
            <a href="/FRANCESCO PAOLO RAGUSA CV.pdf" className={`${styles.btn} ${styles.btnSecondary}`}>
              <i className="fas fa-download"></i>
              Scarica CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
