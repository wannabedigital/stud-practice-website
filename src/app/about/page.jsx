// Styles, components, etc
import styles from '@styles/homePageStyles/homePage.module.css';
import InDeveloping from '@/components/InDeveloping';

export default function About() {
  return (
    <main className={styles.page}>
      <InDeveloping />
    </main>
  );
}
