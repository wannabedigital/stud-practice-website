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
          <Link href={'/services'} className={styles.serviceLink}>
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
          <Link href={'/services'} className={styles.serviceLink}>
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
          <Link href={'/services'} className={styles.serviceLink}>
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
          <Link href={'/services'} className={styles.serviceLink}>
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

const HomeReasons = () => {
  return (
    <section className={styles.homeReasonsSection}>
      <div
        className={`${styles.contentContainer} ${styles.homeReasonsSectionContent}`}
      >
        <h1 className={styles.sectionTitle}>ПОЧЕМУ СТОИТ НАС ВЫБРАТЬ?</h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#304B73'} />
        </div>

        <div className={styles.mobileDivider}>
          <DividerMobile color={'#304B73'} />
        </div>

        <div className={styles.sectionText}>
          <p>
            С нами вы можете не беспокоится за качество
            <br className={styles.mobileBreak} /> проделанной работы
            <br className={styles.desktopBreak} /> и не переживать,
            <br className={styles.mobileBreak} /> что не успеете к дедлайну
          </p>
        </div>

        <div className={styles.reasonsContainer}>
          <div className={styles.reasonContainer}>
            <Image
              src={'/img/home/reason_master_icon.svg'}
              alt="cartridge icon"
              width={176}
              height={176}
            />
            <h2
              className={`${styles.containerTitle} ${styles.reasonContainerTitle}`}
            >
              КВАЛИФИЦИРОВАННЫЕ
              <br /> СПЕЦИАЛИСТЫ
            </h2>
            <p className={styles.reasonContainerText}>
              Настоящие профессионалы, которые годами работают в сфере ремонта
              техники. Их знания — не только теория, но и практика сотен
              решённых задач. Они знают, как сделатьбыстро, надёжно и
              качественно.
            </p>
          </div>
          <div className={styles.reasonContainer}>
            <Image
              src={'/img/home/reason_time_icon.svg'}
              alt="monitor icon"
              width={176}
              height={176}
            />
            <h2
              className={`${styles.containerTitle} ${styles.reasonContainerTitle}`}
            >
              ЭКСТРЕННАЯ ПОМОЩЬ
              <br /> ОРГТЕХНИКЕ
            </h2>
            <p className={styles.reasonContainerText}>
              Ваш принтер, МФУ или компьютер сломался в неподходящий момент? Мы
              приходим на помощь быстро — потому что знаем, как чинить. Без
              паники, без задержек — только точные действия и результат.
            </p>
          </div>
          <div className={styles.reasonContainer}>
            <Image
              src={'/img/home/reason_agreement_icon.svg'}
              alt="printer icon"
              width={176}
              height={176}
            />
            <h2
              className={`${styles.containerTitle} ${styles.reasonContainerTitle}`}
            >
              ГИБКИЕ РЕШЕНИЯ ДЛЯ
              <br /> ЮРИДИЧЕСКИХ ЛИЦ
            </h2>
            <p className={styles.reasonContainerText}>
              От разового ремонта до полного обслуживания — подберём формат под
              ваш бюджет и график работы. Менеджер поможет выбратьсамый выгодный
              вариант —без лишних услуг,только то, что нужно.
            </p>
          </div>
          <div className={styles.reasonContainer}>
            <Image
              src={'/img/home/reason_guarantee_icon.svg'}
              alt="laptop icon"
              width={176}
              height={176}
            />
            <h2
              className={`${styles.containerTitle} ${styles.reasonContainerTitle}`}
            >
              ГАРАНТИЯ
              <br /> КАЧЕСТВА
            </h2>
            <p className={styles.reasonContainerText}>
              На все работы — официальная гарантия. Проверяйте результат
              спокойно. Если возникнут вопросы — мы устраним всё по гарантии:
              без задержек и доплат.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className={styles.page}>
      <HomeServices />
      <HomeReasons />
    </main>
  );
}
