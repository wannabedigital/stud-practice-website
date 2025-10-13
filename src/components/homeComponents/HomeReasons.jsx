// Imports
import Image from 'next/image';

// Styles (home page)
import styles from '@styles/homePageStyles/homeReasons.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@components/Dividers';

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

export default HomeReasons;
