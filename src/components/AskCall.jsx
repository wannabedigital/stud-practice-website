import Image from 'next/image';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '@styles/askCall.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import { CONTACTS } from '@config/contacts.config';
import FeedbackModal from './FeedbackModal';

const AskCall = ({ title, subTitle }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className={styles.homeCallSection}>
        <div className={styles.homeCallBackground}>
          <Image src={'/img/home/call_bg.svg'} alt="section bg" fill priority />
        </div>
        <div
          className={`${styles.contentContainer} ${styles.homeCallSectionContent}`}
        >
          <h1 className={styles.sectionTitle}>{title}</h1>

          <div className={styles.desktopDivider}>
            <DividerDesktop color={'#304B73'} />
          </div>
          <div className={styles.mobileDivider}>
            <DividerMobile color={'#304B73'} />
          </div>

          <div className={styles.sectionText}>
            <p>{subTitle}</p>
          </div>
          <div className={styles.callConteiner}>
            <a href={CONTACTS.PHONE.link} className={styles.callButton}>
              <span>{CONTACTS.PHONE.visible}</span>
              <span className={styles.callButtonFlare} />
            </a>
            <button
              onClick={() => setShowModal(true)}
              className={styles.askForCall}
            >
              или закажите звонок
            </button>
          </div>
        </div>
      </section>
      {showModal &&
        createPortal(
          <FeedbackModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default AskCall;
