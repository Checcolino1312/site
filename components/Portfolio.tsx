'use client';

import { useState } from 'react';
import styles from './Portfolio.module.css';
import PortfolioModal from './PortfolioModal';

type Project = {
  id: string;
  category: 'web' | 'university';
  image: string;
  categoryLabel: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  statusIcon: string;
  link?: string;
  modalContent: {
    category: string;
    title: string;
    description: string[];
    tech: string[];
    link?: string;
  };
};

const projects: Project[] = [
  {
    id: 'palio',
    category: 'web',
    image: '/images/works/screen1.svg',
    categoryLabel: 'Web Design',
    year: '2023',
    title: 'Palio di Oria',
    description: 'Sito web con e-commerce integrato per la storica manifestazione oritana.',
    tech: ['WordPress', 'Web Design', 'E-commerce', 'WooCommerce'],
    status: 'Offline',
    statusIcon: 'fa-exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Palio di Oria',
      description: [
        'Ho lavorato al progetto del Palio di Oria, raccontando la tradizione locale in modo coinvolgente e implementando uno shop online e una sezione premi. Il progetto è stato un successo e mi rende orgoglioso di aver contribuito alla promozione della mia città.',
        'ATTENZIONE: Attualmente il sito non è più visibile poichè sostituito da un altro non prodotto da me.'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce']
    }
  },
  {
    id: 'martina',
    category: 'web',
    image: '/images/works/screen2.svg',
    categoryLabel: 'Web Design',
    year: '2023',
    title: 'Martina Ingegneria',
    description: 'Portfolio professionale per studio di ingegneria strutturale e geotecnica.',
    tech: ['WordPress', 'Web Design', 'SEO'],
    status: 'Offline',
    statusIcon: 'fa-exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Martina Ingegneria',
      description: [
        'Sono stato molto soddisfatto di aver lavorato al sito web Martina Ingegneria, che ho realizzato per l\'ingegner Martina. In particolare, ho dedicato molto tempo e impegno alla realizzazione del portfolio di progetti, che è risultato molto efficace nel presentare al meglio l\'esperienza e le competenze dell\'ingegner Martina.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['WordPress', 'Custom Theme', 'SEO']
    }
  },
  {
    id: 'casina',
    category: 'web',
    image: '/images/works/screen3.svg',
    categoryLabel: 'Web Design',
    year: '2022',
    title: 'Casina dei Nonni',
    description: 'Sito web per agriturismo con sistema di prenotazioni online e galleria fotografica.',
    tech: ['WordPress', 'Web Design', 'Booking'],
    status: 'Offline',
    statusIcon: 'fa-exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Casina dei Nonni',
      description: [
        'Sono molto contento di aver lavorato al sito web Casina dei Nonni, un agriturismo situato nella meravigliosa città di Oria, in provincia di Brindisi. Questo progetto mi ha permesso di mettere in pratica le mie competenze di sviluppo web e di design, creando un sito web moderno e accattivante, che ha suscitato grande interesse tra i visitatori.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['WordPress', 'Booking', 'Gallery']
    }
  },
  {
    id: 'spazio',
    category: 'web',
    image: '/images/works/screen4.svg',
    categoryLabel: 'Web Design',
    year: '2022',
    title: 'Spazio Libero',
    description: 'Piattaforma web per associazione di animazione e inclusione sociale.',
    tech: ['WordPress', 'Web Design', 'Events'],
    status: 'Offline',
    statusIcon: 'fa-exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Spazio Libero',
      description: [
        'Sono molto felice di aver lavorato al sito web di Spazio Libero, un team di professionisti che si occupano di animazione, divertimento e inclusione sociale. Questo progetto mi ha permesso di mettere in pratica le mie competenze di sviluppo web, creando un sito moderno e accattivante che rispecchia perfettamente lo spirito e la mission dell\'azienda.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['CMS', 'Events', 'Community']
    }
  },
  {
    id: 'homa',
    category: 'web',
    image: '/images/works/screen5.svg',
    categoryLabel: 'Web Design',
    year: '2021',
    title: 'Homa Artigiani',
    description: 'E-commerce specializzato in prodotti artigianali e rievocazione storica.',
    tech: ['WordPress', 'Web Design', 'WooCommerce'],
    status: 'Offline',
    statusIcon: 'fa-exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Homa Artigiani',
      description: [
        'Sono stato orgoglioso di aver lavorato al sito web del progetto Homa Artigiani, un\'azienda che nasce dalla passione per la storia e la rievocazione storica. Ho lavorato con cura alla creazione di un sito web moderno e accattivante, che trasmettesse l\'idea di un\'azienda che si dedica completamente alla creazione di prodotti di alta qualità artigianale e ricostruttiva.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['WooCommerce', 'Payments', 'Inventory']
    }
  },
  {
    id: 'mr',
    category: 'web',
    image: '/images/works/screen6.svg',
    categoryLabel: 'Web Design',
    year: '2021',
    title: 'MR Technology Systems',
    description: 'Sito corporate per azienda specializzata in controlli dimensionali e servizi topografici.',
    tech: ['WordPress', 'Web Design', 'B2B'],
    status: 'Live',
    statusIcon: 'fa-star',
    link: 'https://www.mrtechnology.it/',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - MR Technology Systems',
      description: [
        'Sono contento di aver lavorato al sito web di M.R. Technology Systems, una realtà aziendale specializzata in controlli e collaudi dimensionali, servizi topografici e consulenza tecnica. Ho creato un sito web moderno ed efficiente, che trasmettesse la professionalità e l\'esperienza che caratterizzano l\'azienda.'
      ],
      tech: ['Corporate', 'B2B', 'Lead Gen'],
      link: 'https://www.mrtechnology.it/'
    }
  },
  {
    id: 'prog1',
    category: 'university',
    image: '/images/works/screen7.svg',
    categoryLabel: 'Programmazione',
    year: '2023',
    title: 'Programmazione 1',
    description: 'Esercizi e progetti in linguaggio C con algoritmi fondamentali e strutture dati per il corso universitario.',
    tech: ['C Language', 'Algorithms', 'Data Structures'],
    status: 'Materiale',
    statusIcon: 'fa-book',
    link: '/universita/programmazione1.html',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Programmazione 1',
      description: [
        'Qui una raccolta di esercizi svolti da me, presi dal libro "Il linguaggio C. Fondamenti e tecniche di programmazione."'
      ],
      tech: ['C Language', 'Algorithms', 'Data Structures'],
      link: '/universita/programmazione1.html'
    }
  },
  {
    id: 'prog2',
    category: 'university',
    image: '/images/works/screen8.svg',
    categoryLabel: 'Programmazione',
    year: '2023',
    title: 'Programmazione 2',
    description: 'Materiali didattici per programmazione orientata agli oggetti in Java con design patterns e architetture software.',
    tech: ['Java', 'OOP', 'Patterns'],
    status: 'Appunti',
    statusIcon: 'fa-book',
    link: '/universita/programmazione2.html',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Programmazione 2',
      description: [
        'Qui una raccolta di appunti da cui studiare le basi della programmazione orientata agli oggetti ed esercitazioni in Java da cui prendere spunto.'
      ],
      tech: ['Java', 'OOP', 'Patterns'],
      link: '/universita/programmazione2.html'
    }
  },
  {
    id: 'reti',
    category: 'university',
    image: '/images/works/screen9.svg',
    categoryLabel: 'Networking',
    year: '2022',
    title: 'Reti di Calcolatori',
    description: 'Progetti su protocolli di rete, applicazioni client-server e architetture di rete con esempi pratici in C.',
    tech: ['TCP/IP', 'Sockets', 'Protocols'],
    status: 'Teoria',
    statusIcon: 'fa-book',
    link: '/universita/reti_di_calcolatori.html',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Reti di Calcolatori',
      description: [
        'Qui una raccolta di appunti da cui studiare Reti di Calcolatori e realizzare un applicazione in C client-server.'
      ],
      tech: ['TCP/IP', 'Sockets', 'Protocols'],
      link: '/universita/reti_di_calcolatori.html'
    }
  },
  {
    id: 'db',
    category: 'university',
    image: '/images/works/screen10.svg',
    categoryLabel: 'Database',
    year: '2022',
    title: 'Progettazione di Basi di Dati',
    description: 'Documentazione per progettazione database con modellazione ER, SQL e ottimizzazione query con case studies.',
    tech: ['SQL', 'ER Model', 'Optimization'],
    status: 'Appunti',
    statusIcon: 'fa-book',
    link: '/universita/basi_di_dati.html',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Progettazione di Basi di Dati',
      description: [
        'Qui una raccolta di appunti da cui studiare Progettazione di Basi di Dati e svolgere alcune query in SQL.'
      ],
      tech: ['SQL', 'ER Model', 'Optimization'],
      link: '/universita/basi_di_dati.html'
    }
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'*' | 'web' | 'university'>('*');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project =>
    filter === '*' || project.category === filter
  );

  return (
    <>
      <section className={styles.section} id="portfolio">
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>I Miei <span className={styles.gradientText}>Progetti</span></h2>
            <p className={styles.sectionSubtitle}>Una selezione dei lavori che ho realizzato nelle diverse aree di competenza</p>
          </div>

          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${filter === '*' ? styles.active : ''}`}
              onClick={() => setFilter('*')}
            >
              <i className="fas fa-th"></i>
              Tutti i Progetti
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'web' ? styles.active : ''}`}
              onClick={() => setFilter('web')}
            >
              <i className="fas fa-globe"></i>
              Web Projects
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'university' ? styles.active : ''}`}
              onClick={() => setFilter('university')}
            >
              <i className="fas fa-graduation-cap"></i>
              Università
            </button>
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={`${styles.portfolioItem} animate-on-scroll`}>
                <div className={styles.portfolioCard}>
                  <div className={styles.portfolioImage}>
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className={styles.portfolioOverlay}>
                      <div className={styles.portfolioIcons}>
                        <button
                          className={styles.portfolioIcon}
                          onClick={() => setSelectedProject(project)}
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.portfolioIcon}>
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.portfolioContent}>
                    <div className={styles.portfolioHeader}>
                      <span className={`${styles.portfolioCategory} ${project.category === 'web' ? styles.webCategory : styles.universityCategory}`}>
                        {project.categoryLabel}
                      </span>
                      <span className={styles.portfolioYear}>{project.year}</span>
                    </div>
                    <h3 className={styles.portfolioTitle}>{project.title}</h3>
                    <p className={styles.portfolioDescription}>{project.description}</p>
                    <div className={styles.portfolioTech}>
                      {project.tech.map((tech, index) => (
                        <span key={index} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.portfolioStats}>
                      <div className={styles.stat}>
                        <i className={`fas ${project.statusIcon}`}></i>
                        <span>{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
