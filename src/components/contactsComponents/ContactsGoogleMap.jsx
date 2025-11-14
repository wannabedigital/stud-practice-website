// Styles, components, etc
import styles from '@styles/contactsPageStyles/contactsMaps.module.css';

const ContactsGoogleMap = () => {
  const address =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.4198597809022!2d58.47602317717584!3d51.22976197175163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417ffa38802d3d4b%3A0x659f6cd71fcd635e!2z0KHQutC-0YDQsNGPINC_0L7QvNC-0YnRjCDQtNC70Y8g0LLQsNGI0LXQuSDQvtGA0LPRgtC10YXQvdC40LrQuA!5e0!3m2!1sru!2sru!4v1763117862496!5m2!1sru!2sru';

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

export default ContactsGoogleMap;
