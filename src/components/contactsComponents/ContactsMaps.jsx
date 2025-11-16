// Styles, components, etc
import styles from '@styles/contactsPageStyles/contactsMaps.module.css';
import { CONTACTS } from '@config/contacts.config';

export const ContactsYandexMap = () => {
  const address = CONTACTS.ADDRESS.map.yandex;
  return (
    <div className={styles.mapContainer}>
      <iframe
        className={styles.mapIframe}
        src={address}
        allowFullScreen={true}
      />
    </div>
  );
};

export const ContactsGoogleMap = () => {
  const address = CONTACTS.ADDRESS.map.google;

  return (
    <div className={styles.mapContainer}>
      <iframe
        className={styles.mapIframe}
        src={address}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
