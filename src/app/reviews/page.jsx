// Styles, components, etc
import styles from '@styles/rewievsPageStyles/reviewsPage.module.css';
import RewievsSection from '@components/rewievsComponents/RewievsSection';

export default function Reviews() {
  return (
    <main className={styles.page}>
      <RewievsSection />
    </main>
  );
}
