'use client';
// Imports
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';

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
  return (
    <Swiper
      id="carousel-slider"
      className={styles.carouselSlider}
      spaceBetween={0}
      slidesPerView={'auto'}
      touchRatio={1}
      touchAngle={45}
      threshold={10}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Mousewheel]}
      speed={200}
      loop={true}
      mousewheel={{
        sensitivity: 0.1,
        releaseOnEdges: true,
      }}
    >
      {sales.map(sale => (
        <SwiperSlide key={sale.id}>
          <div className={styles.slideContainer}>
            <SaleCard sale={sale} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
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
