// Imports
import Image from 'next/image';
import Link from 'next/link';

// Styles (home page)
import styles from '@styles/homePageStyles/homeCall.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@components/Dividers';

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
          <a href="tel:+79999999999" className={styles.callButton}>
            <span>+7 (999) 999-99-99</span>
            <span className={styles.callButtonFlare} />
          </a>
          <Link href="/contacts" className={styles.askForCall}>
            или закажите звонок
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCall;
