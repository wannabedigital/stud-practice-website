'use client';
import { useEffect, useRef } from 'react';

import FeedbackForm from '@components/FeedbackForm';
import styles from '@styles/feedbackModal.module.css';

const CloseIcon = () => {
  return (
    <div className={styles.closeIconWrapper}>
      <svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_384_8)">
          <path
            d="M277.653 277.653L523.346 523.346"
            stroke="#f9f9f9"
            strokeWidth="66.6667"
            strokeLinecap="round"
          />
          <path
            d="M523.346 277.653L277.653 523.346"
            stroke="#f9f9f9"
            strokeWidth="66.6667"
            strokeLinecap="round"
          />
          <circle cx="400" cy="400" r="380" stroke="#f9f9f9" strokeWidth="40" />
        </g>
        <defs>
          <clipPath id="clip0_384_8">
            <rect width="800" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const FeedbackModal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleOverlayClick = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={styles.feedbackPortal} onMouseDown={handleOverlayClick}>
      <div className={styles.portalContentContainer} ref={modalRef}>
        <div className={styles.modalHeader}>
          <div className={styles.rightMarginSameAsButton}></div>
          <h2 className={styles.modalTitle}>Оставьте заявку</h2>
          <div className={styles.closeButtonWrapper}>
            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.modalBody}>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
