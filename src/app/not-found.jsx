import Link from 'next/link';
import styles from '@styles/notFound.module.css';
import { PAGES } from '@config/pages.config';
import LottieAnimation from '@components/LottieAnimation';
import animation404 from '@assets/lottie/printer-404.json';

export const metadata = {
  title: 'Страница не найдена',
  description:
    'К сожалению, запрашиваемая страница не найдена. Возможно, она была удалена или вы ошиблись в адресе. Перейдите на главную страницу или воспользуйтесь меню.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Страница не найдена',
    description:
      'Запрашиваемая страница не найдена. Возможно, она была удалена или адрес введён неправильно.',
    url: '/404',
    type: 'website',
  },
  alternates: {
    canonical: '/404',
  },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.notFoundContentContainer}>
        <div className={styles.animationContainer}>
          <LottieAnimation animation={animation404} />
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
