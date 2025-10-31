// Imports
import Link from 'next/link';

// Styles, components, configs, etc
import styles from '@styles/servicesPageStyles/serviceCard.module.css';

const ServiceCard = ({
  serviceIcon,
  serviceName,
  serviceDetails,
  serviceSlug,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCardHeader}>
        <div className={styles.serviceIconContainer}>{serviceIcon}</div>
        <h3 className={styles.serviceName}>{serviceName}</h3>
      </div>
      <p className={styles.serviceDetails}>{serviceDetails}</p>
      <Link
        href={`/services/${serviceSlug}`}
        className={styles.serviceCardButton}
      >
        <span>Подробнее</span>
        <span className={styles.serviceCardButtonFlare} />
      </Link>
    </div>
  );
};

export default ServiceCard;
