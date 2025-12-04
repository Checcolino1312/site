import CourseLayout from '@/components/CourseLayout';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Programmazione 1 - Francesco Paolo Ragusa',
  description: 'Materiali didattici e esercizi per il corso di Programmazione 1',
};

export default function Programmazione1Page() {
  const topics = [
    'Fondamenti del linguaggio C',
    'Strutture dati elementari',
    'Algoritmi di base',
    'Gestione della memoria',
    'File e I/O',
  ];

  const exercises = [
    { id: '232', title: 'Esercizio 2.32', url: 'https://replit.com/@FrancescoPaoloP/232#main.c' },
    { id: '233', title: 'Esercizio 2.33', url: 'https://replit.com/@FrancescoPaoloP/233#main.c' },
    { id: '345', title: 'Esercizio 3.45', url: 'https://replit.com/@FrancescoPaoloP/345#main.c' },
    { id: '411', title: 'Esercizio 4.11', url: 'https://replit.com/@FrancescoPaoloP/411#main.c' },
    { id: '428', title: 'Esercizio 4.28', url: 'https://replit.com/@FrancescoPaoloP/428#main.c' },
    { id: '438', title: 'Esercizio 4.38', url: 'https://replit.com/@FrancescoPaoloP/438#main.c' },
    { id: '439', title: 'Esercizio 4.39', url: 'https://replit.com/@FrancescoPaoloP/439#main.c' },
  ];

  return (
    <CourseLayout
      title="Programmazione 1"
      subtitle="Materiali didattici e esercizi per il corso di Programmazione 1"
      description='Questa sezione contiene una raccolta completa di esercizi e materiali didattici per il corso di Programmazione 1, basati sul libro "Il linguaggio C. Fondamenti e tecniche di programmazione."'
      topics={topics}
    >
      <h3>Esercizi su Replit:</h3>
      <div className={styles.exercisesList}>
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            href={exercise.url}
            target="_blank"
            className={styles.exerciseLink}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>{exercise.title}</span>
          </Link>
        ))}
      </div>
    </CourseLayout>
  );
}
