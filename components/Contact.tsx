'use client';

import { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload, faUser, faComment, faPaperPlane, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Il nome è obbligatorio';
        if (value.trim().length < 2) return 'Il nome deve avere almeno 2 caratteri';
        return undefined;
      case 'email':
        if (!value.trim()) return 'L\'email è obbligatoria';
        if (!validateEmail(value)) return 'Inserisci un\'email valida';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Il messaggio è obbligatorio';
        if (value.trim().length < 10) return 'Il messaggio deve avere almeno 10 caratteri';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate form submission - in production, replace with actual API call
    try {
      // Create mailto link as fallback
      const mailtoLink = `mailto:ciccio.paolo.ragusa@gmail.com?subject=Contatto da ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`)}`;

      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Lavoriamo <span className={styles.gradientText}>Insieme</span></h2>
          <p className={styles.sectionSubtitle}>Hai un progetto in mente? Contattami e realizziamolo insieme!</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={`${styles.card} animate-on-scroll`}>
            <h3 className={styles.cardTitle}>Inviami un messaggio</h3>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  <FontAwesomeIcon icon={faUser} />
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
                  placeholder="Il tuo nome"
                  disabled={status === 'submitting'}
                />
                {errors.name && touched.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
                  placeholder="La tua email"
                  disabled={status === 'submitting'}
                />
                {errors.email && touched.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  <FontAwesomeIcon icon={faComment} />
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.textarea} ${errors.message && touched.message ? styles.inputError : ''}`}
                  placeholder="Il tuo messaggio..."
                  rows={5}
                  disabled={status === 'submitting'}
                />
                {errors.message && touched.message && (
                  <span className={styles.errorMessage}>{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    Invio in corso...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} />
                    Messaggio inviato!
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Invia messaggio
                  </>
                )}
              </button>
            </form>
          </div>

          <div className={`${styles.infoCard} animate-on-scroll`}>
            <h3 className={styles.cardTitle}>Contatti diretti</h3>
            <p className={styles.description}>
              Sono sempre aperto a nuove sfide e collaborazioni. Se hai un&apos;idea da realizzare o semplicemente vuoi chiacchierare di tecnologia, non esitare a contattarmi!
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:ciccio.paolo.ragusa@gmail.com" className={`${styles.btn} ${styles.btnPrimary}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                Invia una Email
              </a>
              <a href="/FRANCESCO PAOLO RAGUSA CV.pdf" className={`${styles.btn} ${styles.btnSecondary}`}>
                <FontAwesomeIcon icon={faDownload} />
                Scarica CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
