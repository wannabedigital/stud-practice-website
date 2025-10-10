// Next imports
import Image from 'next/image';
import Link from 'next/link';

// Styles
import styles from '@/styles/footer.module.css';

const FooterLeft = () => {
  return (
    <div className={styles.footerLeftContainer}>
      <div className={styles.footerLogoContainer}>
        <Image
          src={'/img/new_logo.svg'}
          alt="logo icon"
          width={2435}
          height={314}
        />
      </div>
      <div className={styles.footerLegal}>
        <Link href={'/'} className={styles.footerLegalLink}>
          Политика конфиденциальности
        </Link>
        <Link href={'/'} className={styles.footerLegalLink}>
          Пользовательское соглашение
        </Link>
      </div>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className={styles.footerRightContainer}>
      <div className={styles.footerListContainer}>
        <ul className={styles.footerList}>
          <h3 className={styles.footerListTitle}>Контактная информация</h3>
          <li>
            <a href={'/'} className={styles.footerListLink}>
              <div>
                <Image
                  src={'/img/footer/address_icon.svg'}
                  alt="address icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>просп. Мира, 19, Орск</div>
            </a>
          </li>
          <li>
            <a href={'tel:+79999999999'} className={styles.footerListLink}>
              <div>
                <Image
                  src={'/img/footer/phone_icon.svg'}
                  alt="phone icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>+7 (999) 999-99-99</div>
            </a>
          </li>
          <li>
            <a
              href={'mailto:example@gmail.com'}
              className={styles.footerListLink}
            >
              <div>
                <Image
                  src={'/img/footer/email_icon.svg'}
                  alt="address icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>example@gmail.com</div>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footerListContainer}>
        <ul className={styles.footerList}>
          <h3 className={styles.footerListTitle}>Социальные сети</h3>
          <li>
            <a
              href={'https://vk.com/club75304764'}
              className={styles.footerListLink}
            >
              <div>
                <Image
                  src={'/img/footer/vk_icon.svg'}
                  alt="address icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>ВКонтакте</div>
            </a>
          </li>
          <li>
            <a href={'#'} className={styles.footerListLink}>
              <div>
                <Image
                  src={'/img/footer/telegram_icon.svg'}
                  alt="phone icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>Telegram</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentContainer}>
        <section className={styles.footerTop}>
          <FooterLeft />
          <FooterRight />
        </section>
      </div>

      <div className={styles.footerDivider}></div>
      <div className={styles.footerContentContainer}>
        <section className={styles.footerBot}>
          <p className={styles.Copyrights}>
            © 2025 Скорая помощь для вашей оргтехники
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
