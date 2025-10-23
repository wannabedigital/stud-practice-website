// Imports
import Image from 'next/image';
import Link from 'next/link';

// Styles, components, configs, etc
import styles from '@styles/homePageStyles/homeCall.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import { CONTACTS } from '@config/contacts.config';
import { PAGES } from '@config/pages.config';

const HomeCall = () => {
  return (
    <section className={styles.homeCallSection}>
      <div className={styles.homeCallBackground}>
        <Image src={'/img/home/call_bg.svg'} alt="section bg" fill priority />
      </div>
      <div
        className={`${styles.contentContainer} ${styles.homeCallSectionContent}`}
      >
        <h1 className={styles.sectionTitle}>
          РЕМОНТ И ОБСЛУЖИВАНИЕ
          <br className={styles.DividerMobile} /> ОРГТЕХНИКИ В ОРСКЕ
        </h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#304B73'} />
        </div>
        <div className={styles.mobileDivider}>
          <DividerMobile color={'#304B73'} />
        </div>

        <div className={styles.sectionText}>
          <p>Наши специалисты сэкономят Ваше время и деньги.</p>
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

export default HomeCall;
