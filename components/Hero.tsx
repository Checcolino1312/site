'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import styles from './Hero.module.css';

export default function Hero() {
  const contentRef = useAnimateOnScroll<HTMLDivElement>();

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
              <FontAwesomeIcon icon={faRocket} />
              Scopri i miei progetti
            </a>
            <a href="/FRANCESCO PAOLO RAGUSA CV.pdf" className={`${styles.btn} ${styles.btnSecondary}`}>
              <FontAwesomeIcon icon={faDownload} />
              Scarica CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
