'use client';

import { useEffect } from 'react';
import styles from './PortfolioModal.module.css';

type Project = {
  id: string;
  category: 'web' | 'university';
  image: string;
  modalContent: {
    category: string;
    title: string;
    description: string[];
    tech: string[];
    link?: string;
  };
};

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
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.modalClose} onClick={onClose}>&times;</span>
        <div className={styles.modalBody}>
          <div className={styles.modalImage}>
            <img src={project.image} alt={project.modalContent.title} />
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
                <i className="fas fa-external-link-alt"></i>
                Vedi {project.category === 'web' ? 'il sito' : 'la sezione'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
