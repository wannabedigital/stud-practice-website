'use client';

// Next imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Styles
import styles from '@/styles/header.module.css';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href={'/'} className={styles.headerLogoContainer}>
          <Image src={'/img/logo.png'} alt={'logo'} width={380} height={49} />
        </Link>

        <nav className={styles.headerNav}>
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
                pathname === '/services' ? styles.activeNavLink : styles.navLink
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
                pathname === '/contacts' ? styles.activeNavLink : styles.navLink
              }
            >
              Контакты
            </Link>
          </div>
          <div className={styles.navLinkContainer}>
            <Link
              href={'/reviews'}
              className={
                pathname === '/reviews' ? styles.activeNavLink : styles.navLink
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
    </header>
  );
};

export default Header;
