// Styles, components, etc
import styles from '@styles/contactsPageStyles/contactsPage.module.css';
import ContactsFeedback from '@components/contactsComponents/ContactsFeedback';
import {
  ContactsYandexMap,
  // ContactsGoogleMap,
} from '@/components/contactsComponents/ContactsMaps';
import { buildMeta, STATIC_PAGE_META } from '@config/meta.config';
import { PAGES } from '@config/pages.config';
import BreadcrumbJsonLD from '@components/BreadcrumbJsonLD';

export const metadata = buildMeta(STATIC_PAGE_META[PAGES.CONTACTS.path]);

export default function Contacts() {
  return (
    <>
      <main className={styles.page}>
        <ContactsFeedback />
        {/* <ContactsGoogleMap /> */}
        <ContactsYandexMap />
      </main>

      <BreadcrumbJsonLD breadcrumbs={PAGES.CONTACTS.breadcrumbs} />
    </>
  );
}
