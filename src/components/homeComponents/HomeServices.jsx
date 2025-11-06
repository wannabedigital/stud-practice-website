// Imports
import Link from 'next/link';
import Image from 'next/image';

// Styles
import styles from '@styles/homePageStyles/homeServices.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import { SERVICES } from '@config/services.config';

const HomeServices = () => {
  return (
    <section className={styles.homeServicesSection}>
      <div className={styles.homeServicesBackground}>
        <Image src={'/img/home/office_bg.png'} alt="section bg" fill priority />
      </div>
      <div
        className={`${styles.contentContainer} ${styles.homeServicesSectionContent}`}
      >
        <h1 className={styles.sectionTitle}>
          РЕМОНТ И ОБСЛУЖИВАНИЕ
          <br className={styles.DividerMobile} /> ОРГТЕХНИКИ В ОРСКЕ
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
            <br className={styles.mobileBreak} /> «Скорая помощь для вашей
            оргтехники».
            <br />
            Мы осуществляем быструю и качественную заправку
            <br className={styles.mobileBreak} /> картриджей принтеров,
            <br className={styles.desktopBreak} /> а также ремонт оргтехники
            <br className={styles.mobileBreak} /> по городу Орск
          </p>
        </div>

        <div className={styles.serviceLinksContainer}>
          <Link
            href={`/services/${SERVICES.INK_FILL.slug.link}`}
            className={styles.serviceLink}
          >
            <Image
              src={'/img/home/service_cartridge_icon.svg'}
              alt="cartridge icon"
              width={128}
              height={128}
            />
            <h2
              className={`${styles.containerTitle} ${styles.serviceLinkTitle}`}
            >
              ЗАПРАВКА
              <br /> КАРТРИДЖЕЙ
            </h2>
          </Link>
          <Link
            href={`/services/${SERVICES.MONITOR_FIX.slug.link}`}
            className={styles.serviceLink}
          >
            <Image
              src={'/img/home/service_monitor_icon.svg'}
              alt="monitor icon"
              width={128}
              height={128}
            />
            <h2
              className={`${styles.containerTitle} ${styles.serviceLinkTitle}`}
            >
              РЕМОНТ
              <br /> МОНИТОРОВ
            </h2>
          </Link>
          <Link
            href={`/services/${SERVICES.PRINTER_FIX.slug.link}`}
            className={styles.serviceLink}
          >
            <Image
              src={'/img/home/service_printer_icon.svg'}
              alt="printer icon"
              width={128}
              height={128}
            />
            <h2
              className={`${styles.containerTitle} ${styles.serviceLinkTitle}`}
            >
              РЕМОНТ МФУ
              <br /> И ПРИНТЕРОВ
            </h2>
          </Link>
          <Link
            href={`/services/${SERVICES.COMPUTER_FIX.slug.link}`}
            className={styles.serviceLink}
          >
            <Image
              src={'/img/home/service_laptop_icon.svg'}
              alt="laptop icon"
              width={128}
              height={128}
            />
            <h2
              className={`${styles.containerTitle} ${styles.serviceLinkTitle}`}
            >
              РЕМОНТ
              <br /> КОМПЬЮТЕРОВ
            </h2>
          </Link>
        </div>
        <div className={styles.sectionText}>
          <p>
            Наша команда профессионалов обеспечивает
            <br className={styles.mobileBreak} /> качественный сервис:
            <br />
            заправку картриджей, ремонт принтеров, МФУ,
            <br className={styles.mobileBreak} /> мониторов и компьютеров,
            <br />а также поставку расходных материалов
            <br className={styles.mobileBreak} /> с гарантией надежности.
            <br />
            Мы ценим ваше время и предлагаем решения,
            <br className={styles.mobileBreak} /> соответствующие вашим
            потребностям.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
