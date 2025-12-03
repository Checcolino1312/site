'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Chi <span className={styles.gradientText}>Sono</span></h2>
          <p className={styles.sectionSubtitle}>La mia storia e le mie passioni</p>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.card} animate-on-scroll`}>
            <h3 className={styles.cardTitle}>La mia storia</h3>
            <p className={styles.cardText}>Sono Francesco Paolo Ragusa, Studente di Informatica e Tecnologie per la Produzione del Software. Vivo in Puglia, ad Oria, una città ricca di storia e tradizioni.</p>
            <p className={styles.cardText}>Ho diverse competenze nel settore informatico, ho dimestichezza con varie lingue di programmazione, e il mio punto forte è l&apos;adattamento alle nuove tecnologie.</p>
            <p className={styles.cardText}>Collaboro da anni come Web Developer ed IT Consultant con l&apos;agenzia di comunicazione <a href="https://www.oraspot.it" target="_blank" rel="noopener noreferrer" className={styles.link}>ORASPOT</a> e attualmente collaboro anche con <a href="https://www.cetma.it" target="_blank" rel="noopener noreferrer" className={styles.link}>CETMA</a>.</p>
          </div>
          <div className={`${styles.card} animate-on-scroll`}>
            <h3 className={styles.cardTitle}>Le mie passioni</h3>
            <div className={styles.passionsList}>
              <div className={styles.passionItem}>
                <div className={`${styles.passionIcon} ${styles.gradient1}`}>
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4>Sviluppo Web</h4>
                  <p className={styles.passionDesc}>Creare esperienze digitali innovative</p>
                </div>
              </div>
              <div className={styles.passionItem}>
                <div className={`${styles.passionIcon} ${styles.gradient2}`}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <h4>Apprendimento</h4>
                  <p className={styles.passionDesc}>Sempre alla ricerca di nuove sfide</p>
                </div>
              </div>
              <div className={styles.passionItem}>
                <div className={`${styles.passionIcon} ${styles.gradient3}`}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h4>Innovazione</h4>
                  <p className={styles.passionDesc}>Soluzioni creative ai problemi complessi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
