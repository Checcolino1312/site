'use client';

import styles from './Services.module.css';

const services = [
  {
    icon: 'fa-palette',
    title: 'Web Design',
    description: 'Progettazione e sviluppo di siti web moderni e responsive con focus su UX/UI.'
  },
  {
    icon: 'fa-brain',
    title: 'Smart Solutions',
    description: 'Sviluppo di soluzioni software personalizzate per esigenze specifiche di business.'
  },
  {
    icon: 'fa-chart-line',
    title: 'IT Consultant',
    description: 'Consulenza tecnica per ottimizzazione infrastrutture IT e risoluzione problematiche.'
  },
  {
    icon: 'fa-code',
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
                <i className={`fas ${service.icon}`}></i>
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
