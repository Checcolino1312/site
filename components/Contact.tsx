'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Lavoriamo <span className={styles.gradientText}>Insieme</span></h2>
          <p className={styles.sectionSubtitle}>Hai un progetto in mente? Contattami e realizziamolo insieme!</p>
        </div>
        <div className={styles.card}>
          <p className={styles.description}>
            Sono sempre aperto a nuove sfide e collaborazioni. Se hai un&apos;idea da realizzare o semplicemente vuoi chiacchierare di tecnologia, non esitare a contattarmi!
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:ciccio.paolo.ragusa@gmail.com" className={`${styles.btn} ${styles.btnPrimary}`}>
              <i className="fas fa-envelope"></i>
              Invia una Email
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
