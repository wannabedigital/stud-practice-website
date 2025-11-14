// Styles, components, etc
import styles from '@styles/homePageStyles/homePage.module.css';
import InDeveloping from '@components/InDeveloping';
import LoadingLazy from '@components/LoadingLazyComponents';

export default function Reviews() {
  return (
    <main className={styles.page}>
      <InDeveloping />
      <LoadingLazy />
    </main>
  );
}
