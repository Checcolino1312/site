'use client';

import { useState, useEffect } from 'react';
import styles from './ChatBubble.module.css';

interface ChatBubbleProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatBubble({ onClick, isOpen }: ChatBubbleProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAutoTooltip, setShowAutoTooltip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowAutoTooltip(true);
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowAutoTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const showTooltip = !isOpen && (isHovered || showAutoTooltip);

  return (
    <button
      className={`${styles.bubble} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Apri chat con Checcolino"
    >
      {isOpen ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )}

      {showTooltip && (
        <div className={styles.tooltip}>
          Chatta con Checcolino.ai
        </div>
      )}
    </button>
  );
}
