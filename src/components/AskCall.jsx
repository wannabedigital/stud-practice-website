import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/askCall.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import { CONTACTS } from '@config/contacts.config';
import { PAGES } from '@config/pages.config';

const AskCall = ({ title, subTitle }) => {
  return (
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
          <Link href={PAGES.CONTACTS.path} className={styles.askForCall}>
            или закажите звонок
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AskCall;
