// Styles, components, etc
import styles from '@styles/contactsPageStyles/contactsPage.module.css';
import ContactsFeedback from '@components/contactsComponents/ContactsFeedback';
import ContactsGoogleMap from '@/components/contactsComponents/ContactsGoogleMap';

export default function Contacts() {
  return (
    <main className={styles.page}>
      <ContactsFeedback />
      <ContactsGoogleMap />
    </main>
  );
}
