'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faTag, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '@/data/projects';
import styles from './blog.module.css';

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Torna alla Home
          </Link>
          <h1 className={styles.title}>
            Il Mio <span className={styles.gradientText}>Blog</span>
          </h1>
          <p className={styles.subtitle}>
            Articoli, tutorial e riflessioni sul mondo dello sviluppo web e della tecnologia
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.imagePlaceholder}>
                    <FontAwesomeIcon icon={faTag} />
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.category}>{post.category}</div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <FontAwesomeIcon icon={faCalendar} />
                      {new Date(post.date).toLocaleDateString('it-IT', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <span className={styles.metaItem}>
                      <FontAwesomeIcon icon={faClock} />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Leggi l&apos;articolo
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.comingSoon}>
            <h3>Altri articoli in arrivo!</h3>
            <p>Sto lavorando a nuovi contenuti. Torna presto per scoprire i prossimi articoli.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Francesco Paolo Ragusa. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
