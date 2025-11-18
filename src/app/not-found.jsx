'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import LoadingLazy from '@components/LoadingLazyComponents';
import styles from '@styles/notFound.module.css';
import { PAGES } from '@config/pages.config';
import animation404 from '@assets/lottie/printer-404.json';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <LoadingLazy />,
});

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.notFoundContentContainer}>
        <div className={styles.animationContainer}>
          <Lottie animationData={animation404} loop />
        </div>
        <div className={styles.rightFlexbox}>
          <h1 className={styles.pageError}>Ошибка 404</h1>
          <h2 className={styles.pageTitle}>Страница не найдена</h2>
          <Link href={PAGES.HOME.path} className={styles.goHomeLink}>
            Перейти на главную
            <span className={styles.flare} />
          </Link>
        </div>
      </div>
    </main>
  );
}
