'use client';

import styles from './Footer.module.css';

const socialLinks = [
  { href: 'https://www.facebook.com/francescopaolo.ragusa/', icon: 'fa-facebook-f', label: 'Facebook' },
  { href: 'https://instagram.com/_frapr_', icon: 'fa-instagram', label: 'Instagram' },
  { href: 'https://github.com/Checcolino1312', icon: 'fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/francesco-paolo-ragusa/', icon: 'fa-linkedin-in', label: 'LinkedIn' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.label}
            >
              <i className={`fab ${link.icon}`}></i>
            </a>
          ))}
        </div>
        <div className={styles.copyright}>
          © {currentYear} Francesco Paolo Ragusa. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
