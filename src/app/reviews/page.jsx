// Styles, components, etc
import styles from '@styles/rewievsPageStyles/reviewsPage.module.css';
import RewievsSection from '@components/rewievsComponents/RewievsSection';
import { buildMeta, STATIC_PAGE_META } from '@config/meta.config';
import { PAGES } from '@config/pages.config';
import BreadcrumbJsonLD from '@components/BreadcrumbJsonLD';

export const metadata = buildMeta(STATIC_PAGE_META[PAGES.REVIEWS.path]);

export default function Reviews() {
  return (
    <>
      <main className={styles.page}>
        <RewievsSection />
      </main>

      <BreadcrumbJsonLD breadcrumbs={PAGES.REVIEWS.breadcrumbs} />
    </>
  );
}
