// Next imports
import Image from 'next/image';

// Styles (home page)
import styles from '@styles/homePage.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@/components/Dividers';

const HomeServices = () => {
  return (
    <section className={styles.homeServicesSection}>
      <div className={styles.homeServicesBackground}>
        <Image src={'/img/home/office_bg.png'} alt="section bg" fill />
      </div>
      <div className={styles.homeServicesSectionContent}>
        <h1 className={styles.homeServicesTitle}>
          РЕМОНТ И ОБСЛУЖИВАНИЕ ОРГТЕХНИКИ В ОРСКЕ
        </h1>
        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#DEEBEE'} />
        </div>
        <div className={styles.mobileDivider}>
          <DividerMobile color={'#DEEBEE'} />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className={styles.page}>
      <HomeServices />
    </main>
  );
}
