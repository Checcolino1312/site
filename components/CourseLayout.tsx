'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './CourseLayout.module.css';

interface CourseLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  children: ReactNode;
}

export default function CourseLayout({
  title,
  subtitle,
  description,
  topics,
  children,
}: CourseLayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            Francesco Paolo Ragusa
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.sectionTitle}>
            <h1>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          <div className={styles.card}>
            <h2>Contenuti del Corso</h2>
            <p>{description}</p>

            <h3>Argomenti Trattati:</h3>
            <ul className={styles.topicsList}>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>

            {children}

            <div className={styles.backButton}>
              <Link href="/#portfolio" className={styles.btnPrimary}>
                Torna al Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
