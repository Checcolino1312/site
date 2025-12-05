'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faGlobe, faGraduationCap, faStar, faBook, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from './Portfolio.module.css';
import PortfolioModal from './PortfolioModal';
import { projects, Project } from '@/data/projects';

const statusIcons = {
  'star': faStar,
  'exclamation-triangle': faExclamationTriangle,
  'book': faBook,
};

export default function Portfolio() {
  const [filter, setFilter] = useState<'*' | 'web' | 'university'>('*');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project =>
    filter === '*' || project.category === filter
  );

  const handleCardClick = (project: Project) => {
    if (project.category === 'university' && project.link) {
      // Per progetti universitari, naviga direttamente al link
      window.location.href = project.link;
    } else if (project.category === 'web') {
      // Per progetti web, apri la modal
      setSelectedProject(project);
    }
  };

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
              <FontAwesomeIcon icon={faTh} />
              Tutti i Progetti
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'web' ? styles.active : ''}`}
              onClick={() => setFilter('web')}
            >
              <FontAwesomeIcon icon={faGlobe} />
              Web Projects
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'university' ? styles.active : ''}`}
              onClick={() => setFilter('university')}
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              Università
            </button>
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={`${styles.portfolioItem} animate-on-scroll`}>
                {project.category === 'university' && project.link ? (
                  <Link href={project.link} className={styles.portfolioCardLink}>
                    <div className={styles.portfolioCard}>
                      <div className={styles.portfolioImage}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          loading="lazy"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className={styles.portfolioContent}>
                        <div className={styles.portfolioHeader}>
                          <span className={`${styles.portfolioCategory} ${styles.universityCategory}`}>
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
                            <FontAwesomeIcon icon={statusIcons[project.statusIcon]} />
                            <span>{project.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={styles.portfolioCardClickable}
                    onClick={() => handleCardClick(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCardClick(project)}
                  >
                    <div className={styles.portfolioCard}>
                      <div className={styles.portfolioImage}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          loading="lazy"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className={styles.portfolioContent}>
                        <div className={styles.portfolioHeader}>
                          <span className={`${styles.portfolioCategory} ${styles.webCategory}`}>
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
                            <FontAwesomeIcon icon={statusIcons[project.statusIcon]} />
                            <span>{project.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
