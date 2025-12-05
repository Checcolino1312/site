'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faBrain, faChartLine, faCode } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './Services.module.css';

type Service = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: faPalette,
    title: 'Web Design',
    description: 'Progettazione e sviluppo di siti web moderni e responsive con focus su UX/UI.'
  },
  {
    icon: faBrain,
    title: 'Smart Solutions',
    description: 'Sviluppo di soluzioni software personalizzate per esigenze specifiche di business.'
  },
  {
    icon: faChartLine,
    title: 'IT Consultant',
    description: 'Consulenza tecnica per ottimizzazione infrastrutture IT e risoluzione problematiche.'
  },
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Sviluppo di applicazioni web custom con tecnologie moderne e best practices.'
  }
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Le Mie <span className={styles.gradientText}>Competenze</span></h2>
          <p className={styles.sectionSubtitle}>Servizi professionali per trasformare le tue idee in realtà digitale</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} animate-on-scroll`}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
