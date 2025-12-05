'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './PortfolioModal.module.css';
import { Project } from '@/data/projects';

type Props = {
  project: Project;
  onClose: () => void;
};

export default function PortfolioModal({ project, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className={styles.modal} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Chiudi"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.modalBody}>
          <div className={styles.modalImage}>
            <Image
              src={project.image}
              alt={project.modalContent.title}
              width={500}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className={styles.modalInfo}>
            <div className={styles.modalCategory}>{project.modalContent.category}</div>
            <h3>{project.modalContent.title}</h3>
            {project.modalContent.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className={styles.modalTech}>
              {project.modalContent.tech.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            {project.modalContent.link && (
              <a href={project.modalContent.link} className={styles.modalBtn} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                Vedi {project.category === 'web' ? 'il sito' : 'la sezione'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
