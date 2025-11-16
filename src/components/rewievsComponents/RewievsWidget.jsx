import styles from '@styles/rewievsPageStyles/rewievsWidget.module.css';
import { CONTACTS } from '@config/contacts.config';

const RewievsWidget = () => {
  const address = CONTACTS.ADDRESS.reviews.yandex;

  return (
    <div className={styles.reviewsContainer}>
      <iframe className={styles.reviewsIframe} src={address} loading="lazy" />
    </div>
  );
};

export default RewievsWidget;
