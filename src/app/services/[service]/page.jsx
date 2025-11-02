// Styles, components, etc
import styles from '@styles/servicesPageStyles/serviceSlug.module.css';
import { SERVICES } from '@config/services.config';

export default async function ServicePage({ params }) {
  const { service } = await params;

  const currentService = Object.values(SERVICES).find(
    s => s.slug.link === service
  );

  return (
    <main className={styles.page}>
      <section className={styles.contentContainer}>
        {currentService ? (
          <>
            <div className={styles.serviceHeader}>
              <h1>{currentService.slug.name}</h1>
              <div>{currentService.icon}</div>
            </div>
            <p>{currentService.slug.details}</p>
          </>
        ) : (
          <h1 className={styles.notFound}>Услуга не найдена</h1>
        )}
      </section>
    </main>
  );
}
