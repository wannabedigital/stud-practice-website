// Styles, components, etc
import styles from '@styles/servicesPageStyles/serviceSlug.module.css';
import { SERVICES } from '@config/services.config';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import ServicePriceList from '@components/servicesComponents/PriceList';
import AskCall from '@components/AskCall';
import ServiceDetails from '@components/servicesComponents/ServiceDetails';

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
            <section className={styles.serviceSection}>
              <div className={styles.contentContainer}>
                <h1 className={styles.sectionTitle}>
                  {currentService.slug.name}
                </h1>
                <div className={styles.desktopDivider}>
                  <DividerDesktop color={'#304B73'} />
                </div>

                <div className={styles.mobileDivider}>
                  <DividerMobile color={'#304B73'} />
                </div>
                <div>
                  <ServiceDetails details={currentService.slug.details} />
                </div>
              </div>
            </section>
            <section className={styles.serviceSection}>
              <div className={styles.contentContainer}>
                <h1 className={styles.sectionTitle}>ПРАЙС ЛИСТ</h1>
                <div className={styles.desktopDivider}>
                  <DividerDesktop color={'#304B73'} />
                </div>
                <div className={styles.mobileDivider}>
                  <DividerMobile color={'#304B73'} />
                </div>
                <ServicePriceList servicePrice={currentService.slug.price} />
              </div>
            </section>
          </>
        ) : (
          <h1 className={styles.notFound}>Услуга не найдена</h1>
        )}
      </section>
      <AskCall
        title={'МЫ ПОМОЖЕМ!'}
        subTitle={'Если вы не нашли услугу которая вам нужна, обратитесь к нам'}
      />
    </main>
  );
}
