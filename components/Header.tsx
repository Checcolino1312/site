'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            francesco paolo ragusa
          </div>
          <nav className={styles.nav}>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>Chi Sono</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Competenze</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}>Portfolio</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contatti</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
