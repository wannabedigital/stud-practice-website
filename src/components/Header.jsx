'use client';

// Next imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// React imports
import { useState } from 'react';

// Styles, configs, etc
import styles from '@styles/header.module.css';
import { PAGES } from '@config/pages.config.js';
import { CONTACTS } from '@config/contacts.config';

const PhoneIcon = () => {
  return (
    <div>
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.82802 0.564878C5.35123 0.688063 4.86267 0.957897 4.36234 1.38611C3.80903 1.86126 1.82537 3.87328 1.50162 4.28976C0.188986 5.96156 0.165441 8.56018 1.43687 11.9155C2.98496 16.0158 5.88688 20.1689 9.55991 23.5418C14.6221 28.1935 21.4031 31.2028 24.8936 30.3581C25.4116 30.2349 26.271 29.836 26.6654 29.5369C27.0656 29.2377 29.7262 26.5159 29.9734 26.1581C30.4326 25.4952 30.6092 24.6094 30.4326 23.8586C30.2324 23.0198 30.1677 22.9435 27.6072 20.386C25.0231 17.8108 24.9407 17.7463 24.0872 17.5703C23.4103 17.4295 22.7216 17.5527 22.0564 17.934C21.9034 18.0278 21.1735 18.6907 20.4377 19.4181L19.1015 20.732L18.6718 20.5091C17.6182 19.9636 16.8412 19.4415 15.6816 18.4913C14.4926 17.5175 12.8327 15.8105 11.9144 14.6139C11.2493 13.7457 10.2721 12.1443 10.2663 11.9272C10.2663 11.8862 10.7254 11.4052 11.2846 10.8596C12.4618 9.71578 12.9268 9.18197 13.1917 8.6775C13.5214 8.03811 13.5861 7.22861 13.3565 6.55989C13.127 5.87944 12.9033 5.62134 10.6547 3.37467C8.42975 1.15734 8.08834 0.864042 7.45263 0.647001C7.01116 0.488621 6.28126 0.453424 5.82802 0.564878ZM7.19363 2.21321C7.35845 2.30707 8.30025 3.19283 9.56579 4.45988C11.8555 6.7476 11.9438 6.85319 11.938 7.45738C11.938 7.99118 11.7967 8.17889 10.2604 9.70991C9.48339 10.4783 8.80647 11.1881 8.75938 11.2879C8.68874 11.411 8.67108 11.5812 8.68874 11.8686C8.7064 12.2205 8.75349 12.3555 9.11255 13.0652C9.92485 14.6725 10.9962 16.0862 12.7679 17.8929C14.5279 19.6879 16.282 21.0253 18.0891 21.9522C18.7307 22.2807 18.8543 22.3276 19.1486 22.3217C19.3488 22.3217 19.5607 22.2807 19.6843 22.2161C19.7961 22.1575 20.526 21.477 21.303 20.7086C22.3037 19.7172 22.7922 19.2773 22.9806 19.1952C23.3337 19.0368 23.7929 19.0368 24.1166 19.1952C24.4698 19.3711 28.6314 23.5125 28.8138 23.8762C28.9139 24.0698 28.9551 24.2458 28.9551 24.498C28.9551 25.1022 28.8315 25.2664 27.1598 26.9382C25.5058 28.5924 25.3527 28.7039 24.4698 28.9033C23.6163 29.091 22.1859 28.9385 20.7379 28.5103C18.5306 27.8592 15.5639 26.2988 13.1211 24.5039C8.41797 21.0547 4.38 15.7812 2.70242 10.9066C1.90189 8.58951 1.81359 6.92945 2.42576 5.69759C2.61412 5.30457 2.79071 5.10513 4.01505 3.86741C4.76849 3.10484 5.4925 2.41265 5.61611 2.32467C6.14588 1.96098 6.68741 1.91991 7.19363 2.21321Z"
          fill="#75BCDD"
          stroke="#75BCDD"
        />
      </svg>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.headerContent}>
          <Link href={PAGES.HOME.path} className={styles.headerLogoContainer}>
            <Image
              src={'/img/new_logo.svg'}
              alt={'logo'}
              width={2435}
              height={314}
            />
          </Link>

          <button className={styles.burgerButton} onClick={toggleMenu}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </button>

          <nav
            className={`${styles.headerNavDesktop} ${isMenuOpen ? styles.navOpen : ''}`}
          >
            <div className={styles.navLinkContainer}>
              <Link
                href={PAGES.HOME.path}
                className={
                  pathname === PAGES.HOME.path
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                {PAGES.HOME.visible}
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={PAGES.SERVICES.path}
                className={
                  pathname === PAGES.SERVICES.path
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                {PAGES.SERVICES.visible}
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={PAGES.ABOUT.path}
                className={
                  pathname === PAGES.ABOUT.path
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                {PAGES.ABOUT.visible}
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={PAGES.CONTACTS.path}
                className={
                  pathname === PAGES.CONTACTS.path
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                {PAGES.CONTACTS.visible}
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={PAGES.REVIEWS.path}
                className={
                  pathname === PAGES.REVIEWS.path
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                {PAGES.REVIEWS.visible}
              </Link>
            </div>
          </nav>

          <Link href={CONTACTS.PHONE.link} className={styles.headerCall}>
            <PhoneIcon />
            <div>{CONTACTS.PHONE.visible}</div>
          </Link>
        </div>
        <div></div>
      </div>

      <nav
        className={`${styles.headerNavMobile} ${isMenuOpen ? styles.navOpen : ''}`}
      >
        <div className={styles.navLinkContainer}>
          <Link href={'/'} className={styles.navLink}>
            Главная
          </Link>
        </div>
        <div className={styles.navLinkContainer}>
          <Link href={'/services'} className={styles.navLink}>
            Услуги
          </Link>
        </div>
        <div className={styles.navLinkContainer}>
          <Link href={'/about'} className={styles.navLink}>
            О нас
          </Link>
        </div>
        <div className={styles.navLinkContainer}>
          <Link href={'/contacts'} className={styles.navLink}>
            Контакты
          </Link>
        </div>
        <div className={styles.navLinkContainer}>
          <Link href={PAGES.REVIEWS.path} className={styles.navLink}>
            Отзывы
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
