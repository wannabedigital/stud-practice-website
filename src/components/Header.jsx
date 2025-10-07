'use client';

// Next imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// React imports
import { useState } from 'react';

// Styles
import styles from '@/styles/header.module.css';

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
          <Link href={'/'} className={styles.headerLogoContainer}>
            <Image
              src={'/img/new_logo.svg'}
              alt={'logo'}
              width={2435}
              height={314}
              priority
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
                href={'/'}
                className={
                  pathname === '/' ? styles.activeNavLink : styles.navLink
                }
              >
                Главная
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={'/services'}
                className={
                  pathname === '/services'
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                Услуги
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={'/about'}
                className={
                  pathname === '/about' ? styles.activeNavLink : styles.navLink
                }
              >
                О нас
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={'/contacts'}
                className={
                  pathname === '/contacts'
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                Контакты
              </Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link
                href={'/reviews'}
                className={
                  pathname === '/reviews'
                    ? styles.activeNavLink
                    : styles.navLink
                }
              >
                Отзывы
              </Link>
            </div>
          </nav>

          <Link href={'tel:+79999999999'} className={styles.headerCall}>
            <div>
              <Image
                src={'/img/phone_icon.svg'}
                alt="phone icon"
                width={30}
                height={30}
              />
            </div>
            <div>+7 (999) 999-99-99</div>
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
          <Link href={'/reviews'} className={styles.navLink}>
            Отзывы
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
