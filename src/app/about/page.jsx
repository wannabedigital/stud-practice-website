// Styles, components, etc
import styles from '@styles/aboutPageStyles/aboutPage.module.css';
import AboutSection from '@components/aboutComponents/AboutSection';

export default function About() {
  return (
    <main className={styles.page}>
      <AboutSection />
    </main>
  );
}
