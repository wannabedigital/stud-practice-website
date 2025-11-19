// Styles, components, etc
import styles from '@styles/servicesPageStyles/servicesPage.module.css';
import ServicesList from '@components/servicesComponents/ServicesList';
import { buildMeta, STATIC_PAGE_META } from '@config/meta.config';
import { PAGES } from '@config/pages.config';
import BreadcrumbJsonLD from '@components/BreadcrumbJsonLD';

export const metadata = buildMeta(STATIC_PAGE_META[PAGES.SERVICES.path]);

export default function Services() {
  return (
    <>
      <main className={styles.page}>
        <ServicesList />
      </main>

      <BreadcrumbJsonLD breadcrumbs={PAGES.SERVICES.breadcrumbs} />
    </>
  );
}
