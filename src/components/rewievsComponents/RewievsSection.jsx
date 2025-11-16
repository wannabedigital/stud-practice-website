// Styles, components, etc
import styles from '@styles/rewievsPageStyles/rewievsSection.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import RewievsWidget from '@components/rewievsComponents/RewievsWidget';

const ReviewsSection = () => {
  return (
    <section className={styles.servicesList}>
      <div className={styles.contentContainer}>
        <h1 className={styles.sectionTitle}>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>

        <div className={styles.desktopDivider}>
          <DividerDesktop color={'#304B73'} />
        </div>

        <div className={styles.mobileDivider}>
          <DividerMobile color={'#304B73'} />
        </div>
        <div className={styles.reviewsWrapper}>
          <RewievsWidget />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
