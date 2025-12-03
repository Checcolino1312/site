'use client';

import { useEffect, useRef } from 'react';
import styles from './scam.module.css';

export default function Checcolinato() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hue = 0;

    const animateColor = () => {
      if (textRef.current) {
        hue = (hue + 2) % 360;
        textRef.current.style.color = `hsl(${hue}, 100%, 50%)`;
      }
      requestAnimationFrame(animateColor);
    };

    animateColor();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text} ref={textRef}>
        SEI STATO CHECCOLINATO
      </div>
    </div>
  );
}
