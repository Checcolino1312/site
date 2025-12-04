import CourseLayout from '@/components/CourseLayout';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Programmazione 2 - Francesco Paolo Ragusa',
  description: 'Appunti e materiali per la programmazione orientata agli oggetti',
};

export default function Programmazione2Page() {
  const topics = [
    'Fondamenti della programmazione ad oggetti',
    'Classi e oggetti in Java',
    'Ereditarietà e polimorfismo',
    'Design patterns fondamentali',
    'Gestione delle eccezioni',
    'Interfacce grafiche (GUI)',
  ];

  const repositories = [
    {
      id: 'base',
      title: 'Programmazione2_base - Fondamenti Java',
      url: 'https://github.com/Checcolino1312/Programmazione2_base',
    },
    {
      id: '1',
      title: 'Programmazione_2_1 - Esercizi OOP',
      url: 'https://github.com/Checcolino1312/Programmazione_2_1',
    },
    {
      id: '2',
      title: 'Programmazione2_2 - Design Patterns',
      url: 'https://github.com/Checcolino1312/Programmazione2_2',
    },
    {
      id: '3',
      title: 'Programmazione2_3 - Progetti Avanzati',
      url: 'https://github.com/Checcolino1312/Programmazione2_3',
    },
    {
      id: '4',
      title: 'Programmazione2_4 - GUI e Applicazioni',
      url: 'https://github.com/Checcolino1312/Programmazione2_4',
    },
  ];

  return (
    <CourseLayout
      title="Programmazione 2"
      subtitle="Appunti e materiali per la programmazione orientata agli oggetti"
      description="Materiali didattici e progetti per il corso di Programmazione 2, con focus sulla programmazione orientata agli oggetti in Java."
      topics={topics}
    >
      <h3>Repository GitHub:</h3>
      <div className={styles.reposList}>
        {repositories.map((repo) => (
          <Link
            key={repo.id}
            href={repo.url}
            target="_blank"
            className={styles.repoLink}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>{repo.title}</span>
          </Link>
        ))}
      </div>
    </CourseLayout>
  );
}
