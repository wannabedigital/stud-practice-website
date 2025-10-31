// Styles, components, configs, etc
import styles from '@styles/servicesPageStyles/servicesList.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import ServiceCard from '@components/servicesComponents/ServiceCard';
import { SERVICES } from '@config/services.config';

const ServicesList = () => {
  return (
    <section className={styles.servicesList}>
      <div
        className={`${styles.contentContainer} ${styles.homeReasonsSectionContent}`}
      >
        <h1 className={styles.sectionTitle}>ПОЧЕМУ СТОИТ НАС ВЫБРАТЬ?</h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#304B73'} />
        </div>

        <div className={styles.mobileDivider}>
          <DividerMobile color={'#304B73'} />
        </div>
        <div className={styles.servicesContainer}>
          {Object.values(SERVICES).map(service => (
            <ServiceCard
              key={service.slug}
              serviceIcon={service.icon}
              serviceName={service.name}
              serviceDetails={service.details}
              serviceSlug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
