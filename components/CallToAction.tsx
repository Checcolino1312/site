'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.content} animate-on-scroll`}>
          <h2 className={styles.title}>
            Hai un progetto in mente?
          </h2>
          <p className={styles.description}>
            Sono sempre alla ricerca di nuove sfide interessanti.
            Che tu abbia bisogno di un sito web, una consulenza IT o semplicemente
            voglia scambiare idee su tecnologia, sarò felice di sentirti.
          </p>
          <div className={styles.buttons}>
            <a href="mailto:ciccio.paolo.ragusa@gmail.com" className={styles.primaryBtn}>
              <FontAwesomeIcon icon={faEnvelope} />
              Contattami
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
            </a>
            <a href="#portfolio" className={styles.secondaryBtn}>
              Vedi i miei lavori
            </a>
          </div>
        </div>
        <div className={styles.decoration}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </section>
  );
}
