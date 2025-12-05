'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { testimonials } from '@/data/projects';

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Cosa Dicono di <span className={styles.gradientText}>Me</span></h2>
          <p className={styles.sectionSubtitle}>Feedback dai clienti con cui ho collaborato</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`${styles.card} animate-on-scroll`}>
              <div className={styles.quoteIcon}>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatarPlaceholder}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
