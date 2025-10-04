// Next imports
import Image from 'next/image';
import Link from 'next/link';

// Styles (home page)
import styles from '@styles/homePage.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@/components/Dividers';

const HomeServices = () => {
  return (
    <section className={styles.homeServicesSection}>
      <div className={styles.homeServicesBackground}>
        <Image src={'/img/home/office_bg.png'} alt="section bg" fill priority />
      </div>
      <div className={styles.homeServicesSectionContent}>
        <h1 className={styles.sectionTitle}>
          РЕМОНТ И ОБСЛУЖИВАНИЕ ОРГТЕХНИКИ В ОРСКЕ
        </h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#DEEBEE'} />
        </div>
        <div className={styles.mobileDivider}>
          <DividerMobile color={'#DEEBEE'} />
        </div>

        <div className={styles.sectionText}>
          <p>
            Добро пожаловать на сайт компании
            <br className={styles.mobileBrake} /> «Скорая помощь для вашей
            оргтехники».
            <br />
            Мы осуществляем быструю и качественную заправку
            <br className={styles.mobileBrake} /> картриджей принтеров,
            <br className={styles.desktopBreak} /> а также ремонт оргтехники
            <br className={styles.mobileBrake} /> по городу Орск
          </p>
        </div>

        <div className={styles.serviceLinksContainer}>
          <Link href={'/services'} className={styles.serviceLink}>
            <Image
              src={'/img/home/service_cartridge_icon.svg'}
              alt="cartridge icon"
              width={128}
              height={128}
            />
            <h2 className={styles.serviceLinkTitle}>ЗАПРАВКА КАРТРИДЖЕЙ</h2>
          </Link>
          <Link href={'/services'} className={styles.serviceLink}>
            <Image
              src={'/img/home/service_monitor_icon.svg'}
              alt="monitor icon"
              width={128}
              height={128}
            />
            <h2 className={styles.serviceLinkTitle}>РЕМОНТ МОНИТОРОВ</h2>
          </Link>
          <Link href={'/services'} className={styles.serviceLink}>
            <Image
              src={'/img/home/service_printer_icon.svg'}
              alt="printer icon"
              width={128}
              height={128}
            />
            <h2 className={styles.serviceLinkTitle}>РЕМОНТ МФУ И ПРИНТЕРОВ</h2>
          </Link>
          <Link href={'/services'} className={styles.serviceLink}>
            <Image
              src={'/img/home/service_laptop_icon.svg'}
              alt="laptop icon"
              width={128}
              height={128}
            />
            <h2 className={styles.serviceLinkTitle}>РЕМОНТ КОМПЬЮТЕРОВ</h2>
          </Link>
        </div>
        <div className={styles.sectionText}>
          <p>
            Наша команда профессионалов обеспечивает
            <br className={styles.mobileBrake} /> качественный сервис:
            <br />
            заправку картриджей, ремонт принтеров, МФУ,
            <br className={styles.mobileBrake} /> мониторов и компьютеров,
            <br />а также поставку расходных материалов с гарантией{' '}
            <br className={styles.mobileBrake} />
            надежности.
            <br />
            Мы ценим ваше время и предлагаем решения,
            <br className={styles.mobileBrake} /> соответствующие вашим
            потребностям.
          </p>
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
