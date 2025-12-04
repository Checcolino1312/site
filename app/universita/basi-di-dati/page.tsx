import CourseLayout from '@/components/CourseLayout';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Basi di Dati - Francesco Paolo Ragusa',
  description: 'Appunti e materiali per il corso di Progettazione di Basi di Dati',
};

export default function BasiDiDatiPage() {
  const topics = [
    'Modello Entità-Relazione',
    'Progettazione concettuale di database',
    'Normalizzazione delle relazioni',
    'SQL e linguaggi di interrogazione',
    'Transazioni e concorrenza',
    'Ottimizzazione delle query',
  ];

  return (
    <CourseLayout
      title="Progettazione di Basi di Dati"
      subtitle="Appunti e materiali didattici"
      description="Appunti completi per il corso di Progettazione di Basi di Dati, coprendo teoria e pratica della progettazione di database relazionali."
      topics={topics}
    >
      <h3>Materiali Disponibili:</h3>
      <div className={styles.resourcesList}>
        <Link
          href="/universita/appunti_basi1.pdf"
          target="_blank"
          className={styles.resourceLink}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Appunti Basi di Dati - Parte 1</span>
        </Link>
        <Link
          href="/universita/appunti_basi2.pdf"
          target="_blank"
          className={styles.resourceLink}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Appunti Basi di Dati - Parte 2</span>
        </Link>
      </div>
    </CourseLayout>
  );
}
