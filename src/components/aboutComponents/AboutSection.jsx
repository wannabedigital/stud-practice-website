import Image from 'next/image';

import styles from '@styles/aboutPageStyles/aboutSection.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={`${styles.contentContainer}`}>
        <h1 className={styles.sectionTitle}>
          МЫ «СКОРАЯ ПОМОЩЬ ДЛЯ ВАШЕЙ ОРГТЕХНИКИ»
        </h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#304B73'} />
        </div>

        <div className={styles.mobileDivider}>
          <DividerMobile color={'#304B73'} />
        </div>

        <article className={styles.aboutArticle}>
          <div className={styles.photoTextFlexbox}>
            <div className={styles.photosContainer}>
              <div className={`${styles.photoContainer} ${styles.mobileGrid1}`}>
                <Image
                  src={'/img/about/photo1.png'}
                  alt="photo 1"
                  width={385}
                  height={247}
                />
              </div>
              <div className={`${styles.photoContainer} ${styles.mobileGrid2}`}>
                <Image
                  src={'/img/about/photo2.png'}
                  alt="photo 2"
                  width={385}
                  height={275}
                />
              </div>
              <div className={`${styles.photoContainer} ${styles.mobileGrid3}`}>
                <Image
                  src={'/img/about/photo3.png'}
                  alt="photo 2"
                  width={385}
                  height={257}
                />
              </div>
            </div>
            <div className={styles.textsContainer}>
              <div className={`${styles.text} ${styles.mobileGrid4}`}>
                <h4 className={styles.textTitle}>
                  Наша фирма &laquo;Скорая помощь для вашей оргтехники&raquo;
                  была основана в 2009 г.
                </h4>
                <p>
                  Все эти годы мы развивались и продолжаем развиваться, получаем
                  опыт и знания. Наша молодая команда стала более
                  профессиональной и уже добилась хороших результатов. В своей
                  работе мы используем только качественные расходные материалы,
                  комплектующие и инструмент, что гарантирует отличный
                  результат.
                </p>
              </div>

              <div className={`${styles.text} ${styles.mobileGrid5}`}>
                <h4 className={styles.textTitle}>Наша фирма осуществляет:</h4>
                <ul className={styles.textList}>
                  <li className={styles.textListItem}>
                    Оптовые и розничные продажами компьютеров, комплектующих,
                    офисного оборудования, любых расходных материалов,
                    лицензионного программного обеспечения;
                  </li>
                  <li className={styles.textListItem}>
                    Диагностику и выявление неисправностей оргтехники.
                  </li>
                  <li className={styles.textListItem}>
                    Ремонт персональных компьютеров, ноутбуков, неттопов,
                    нетбуков, мониторов, источников бесперебойного питания,
                    копировально-множительной техники, многофункциональных
                    устройств, принтеров, плоттеров, факсов, сканеров.
                  </li>
                  <li className={styles.textListItem}>
                    Настройку, восстановление программного обеспечения и
                    операционной системы, антивирусных программ;
                  </li>
                  <li className={styles.textListItem}>
                    Заправку и восстановлением лазерных и струйных картриджей;
                  </li>
                  <li className={styles.textListItem}>
                    Восстановление информации с поврежденных и неисправных
                    жестких дисков, Flash-носителей информации;
                  </li>
                </ul>
              </div>

              <div className={`${styles.text} ${styles.mobileGrid6}`}>
                <h4 className={styles.textTitle}>Принципы нашей работы:</h4>
                <ul className={styles.textList}>
                  <li className={styles.textListItem}>
                    <span className={styles.highlight}>Гарантия качества</span>
                    :  Мы заинтересованы в том, чтобы ваша техника работали
                    исправно. Мы выполняем свою работу качественно и на все
                    услуги предоставляем гарантию.
                  </li>
                  <li className={styles.textListItem}>
                    <span className={styles.highlight}>Ответственность</span>
                    : Мы работаем на результат, а не на процесс. Показателем
                    нашей деятельности является достижение поставленных
                    заказчиком задач.
                  </li>
                  <li className={styles.textListItem}>
                    <span className={styles.highlight}>Компетентность</span>
                    : Повышение компетентности наших сотрудников, оказывающих
                    услуги конечному заказчику, является одним из основных
                    элементов нашей стратегии в области менеджмента персонала
                  </li>
                </ul>
              </div>
              <div className={`${styles.textItalic} ${styles.mobileGrid7}`}>
                Мы предлагаем Вам высокий уровень сервисного обслуживания,
                надежность и демократичные цены!
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
