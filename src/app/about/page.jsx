// Styles, components, etc
import styles from '@styles/aboutPageStyles/aboutPage.module.css';
import AboutSection from '@components/aboutComponents/AboutSection';
import { buildMeta, STATIC_PAGE_META } from '@config/meta.config';
import { PAGES } from '@config/pages.config';
import BreadcrumbJsonLD from '@components/BreadcrumbJsonLD';

export const metadata = buildMeta(STATIC_PAGE_META[PAGES.ABOUT.path]);

export default function About() {
  return (
    <>
      <main className={styles.page}>
        <AboutSection />
      </main>
      <BreadcrumbJsonLD breadcrumbs={PAGES.ABOUT.breadcrumbs} />
    </>
  );
}
