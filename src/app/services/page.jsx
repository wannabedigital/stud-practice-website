// Styles, components, etc
import styles from '@styles/servicesPageStyles/servicesPage.module.css';
import ServicesList from '@components/servicesComponents/ServicesList';

export default function Services() {
  return (
    <main className={styles.page}>
      <ServicesList />
    </main>
  );
}
