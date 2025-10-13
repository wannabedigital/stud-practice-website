'use client';
// Imports
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';

// Styles (home page)
import styles from '@styles/homePageStyles/homeSales.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@/components/Dividers';

const SaleCard = ({ sale }) => {
  return (
    <div className={styles.saleContainer}>
      <Link href={'#'} className={styles.saleLink}>
        <h2 className={`${styles.containerTitle} ${styles.saleContainerTitle}`}>
          Акция {sale.id}
        </h2>
        <div className={styles.salesImageContainer}>{sale.title}</div>
      </Link>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goBack = () => {
    onPageChange(currentPage === 1 ? totalPages : currentPage - 1);
  };

  const goForward = () => {
    onPageChange(currentPage === totalPages ? 1 : currentPage + 1);
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={goBack}
        className={`${styles.paginationButton} ${styles.backButton}`}
      >
        {'\u21D0'}
      </button>
      <button
        onClick={goForward}
        className={`${styles.paginationButton} ${styles.forwardButton}`}
      >
        {'\u21D2'}
      </button>
    </div>
  );
};

const HomeSales = ({ sales = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const { totalPages, currentSales } = useMemo(() => {
    const total = Math.ceil(sales.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const current = sales.slice(start, start + itemsPerPage);
    return { totalPages: total || 1, currentSales: current };
  }, [sales, currentPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (!!(prev % totalPages) ? prev + 1 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

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
        {!!currentSales.length &&
          currentSales.map(sale => <SaleCard key={sale.id} sale={sale} />)}
      </div>
      <div className={styles.paginationLeveler}>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomeSales;
