// Styles, components, etc
import styles from '@styles/contactsPageStyles/contactsPage.module.css';
import ContactsFeedback from '@components/contactsComponents/ContactsFeedback';
import {
  ContactsYandexMap,
  // ContactsGoogleMap,
} from '@/components/contactsComponents/ContactsMaps';

export default function Contacts() {
  return (
    <main className={styles.page}>
      <ContactsFeedback />
      {/* <ContactsGoogleMap /> */}
      <ContactsYandexMap />
    </main>
  );
}
