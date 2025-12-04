import CourseLayout from '@/components/CourseLayout';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Reti di Calcolatori - Francesco Paolo Ragusa',
  description: 'Progetti e documentazione per architetture di rete',
};

export default function RetiDiCalcolatoriPage() {
  const topics = [
    'Protocolli TCP/IP',
    'Architetture client-server',
    'Socket programming in C',
    'Analisi delle prestazioni di rete',
    'Sicurezza delle comunicazioni',
    'Protocolli applicativi (HTTP, FTP, SMTP)',
  ];

  const repositories = [
    {
      id: '0',
      title: 'Esercizio_0_RdC - Fondamenti Socket',
      url: 'https://github.com/Checcolino1312/Esercizio_0_RdC',
    },
    {
      id: '1',
      title: 'Esercizio_1_RdC - Client-Server Base',
      url: 'https://github.com/Checcolino1312/Esercizio_1_RdC',
    },
    {
      id: '2',
      title: 'Esercizio_2_RdC - Protocolli TCP/IP',
      url: 'https://github.com/Checcolino1312/Esercizio_2_RdC',
    },
    {
      id: '3',
      title: 'Esercizio_3_RdC - Applicazioni Avanzate',
      url: 'https://github.com/Checcolino1312/Esercizio_3_RdC',
    },
  ];

  return (
    <CourseLayout
      title="Reti di Calcolatori"
      subtitle="Progetti e documentazione per architetture di rete"
      description="Progetti e documentazione per il corso di Reti di Calcolatori, includendo implementazioni pratiche e analisi teoriche."
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
