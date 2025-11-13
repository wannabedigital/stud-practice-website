// Styles, components, etc
import styles from '@styles/homePageStyles/homePage.module.css';
import ContactsFeedback from '@components/contactsComponents/ContactsFeedback';

export default function Contacts() {
  return (
    <main className={styles.page}>
      <ContactsFeedback />
    </main>
  );
}
