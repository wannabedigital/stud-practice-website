'use client';
// Imports
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Styles (home page)
import styles from '@styles/homePageStyles/homeSales.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@components/Dividers';

const SaleCard = ({ sale }) => {
  return (
    <div className={styles.saleContainer}>
      <h2 className={`${styles.containerTitle} ${styles.saleContainerTitle}`}>
        {sale.title}
      </h2>
      <div className={styles.salesImageContainer}>
        {!!sale.img && (
          <Image src={sale.img} alt={sale.title} fill loading="lazy" />
        )}
      </div>
    </div>
  );
};

const HomeSalesCarousel = ({ sales = [] }) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: false },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {sales.map(sale => (
          <div className={styles.emblaSlide} key={sale.id}>
            <div className={styles.slideContainer}>
              <SaleCard sale={sale} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeSales = ({ sales = [] }) => {
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.sectionTitle}>НАШИ АКЦИИ</h1>

      <div className={styles.desktopDivider}>
        <DividerDesktop color={'#304B73'} />
      </div>

      <div className={styles.mobileDivider}>
        <DividerMobile color={'#304B73'} />
      </div>
      <div className={styles.salesContainer}>
        <HomeSalesCarousel sales={sales} />
      </div>
    </div>
  );
};

export default HomeSales;
