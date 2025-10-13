// Image
import Image from 'next/image';

// Styles (home page)
import styles from '@styles/homePageStyles/homePage.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.logo}
        src={'/img/logo.png'}
        alt="logo"
        width={760}
        height={98}
        priority
      />
    </main>
  );
}
