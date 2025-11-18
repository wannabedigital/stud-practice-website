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
        <h2 className={styles.pageTitle}>Такой страницы не существует</h2>
        <div className={styles.animationContainer}>
          <Lottie animationData={animation404} loop={false} />
        </div>
        <Link href={PAGES.HOME.path} className={styles.goHomeLink}>
          {PAGES.HOME.visible}
        </Link>
      </div>
    </main>
  );
}
