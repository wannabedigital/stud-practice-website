import Image from 'next/image';

// Styles (home page)
import styles from '@styles/contactsPageStyles/contactsFeedback.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import FeedbackForm from '@components/FeedbackForm';
import ContactsList from '@components/contactsComponents/ContactsList';

const ContactsFeedback = () => {
  return (
    <section className={styles.ContactsFeedbackSection}>
      <div className={styles.ContactsFeedbackBackground}>
        <Image src={'/img/home/office_bg.png'} alt="section bg" fill priority />
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.sectionTitle}>У ВАС ЕСТЬ ВОПРОСЫ?</h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#DEEBEE'} />
        </div>

        <div className={styles.mobileDivider}>
          <DividerMobile color={'#DEEBEE'} />
        </div>

        <div className={styles.sectionText}>
          <p>Вы можете связаться с нами.</p>
        </div>

        <div className={styles.gridboxContainer}>
          <FeedbackForm />
          <ContactsList />
        </div>
      </div>
    </section>
  );
};

export default ContactsFeedback;
