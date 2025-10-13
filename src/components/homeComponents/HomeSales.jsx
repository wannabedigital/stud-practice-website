'use client';

// Imports
import Link from 'next/link';
import { useState, useMemo } from 'react';

// Styles (home page)
import styles from '@styles/homePageStyles/homeSales.module.css';

// Components
import { DividerDesktop, DividerMobile } from '@/components/Dividers';

const SaleCard = ({ sale }) => {
  return (
    <div className={styles.salesContainer}>
      <Link href={'#'} className={styles.salesLink}>
        <h2
          className={`${styles.containerTitle} ${styles.reasonContainerTitle}`}
        >
          Акция {sale.id}
        </h2>
        <p>{sale.title}</p>
      </Link>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className={`${styles.paginationButton} ${styles.backButton}`}
        disabled={currentPage === 1}
      >
        {'\u21D0'}
      </button>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className={`${styles.paginationButton} ${styles.forwardButton}`}
        disabled={currentPage === totalPages}
      >
        {'\u21D2'}
      </button>
    </div>
  );
};

const HomeSales = ({ sales = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const { totalPages, currentSales } = useMemo(() => {
    const total = Math.ceil(sales.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const current = sales.slice(start, start + itemsPerPage);
    return { totalPages: total || 1, currentSales: current };
  }, [sales, currentPage]);

  return (
    <div
      className={`${styles.contentContainer} ${styles.homeReasonsSectionContent}`}
    >
      <h1 className={styles.sectionTitle}>НАШИ АКЦИИ</h1>

      <div className={styles.desktopDivider}>
        <DividerDesktop color={'#304B73'} />
      </div>

      <div className={styles.mobileDivider}>
        <DividerMobile color={'#304B73'} />
      </div>

      {!!currentSales.length &&
        currentSales.map(sale => <SaleCard key={sale.id} sale={sale} />)}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default HomeSales;
