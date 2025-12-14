import styles from '@styles/servicesPageStyles/servicePriceList.module.css';

const ServicePriceList = ({ servicePrice = [{}] }) => {
  return (
    <div className={styles.tableRoundedContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableRow}>
            <th
              className={`${styles.tableHeaderCell} ${styles.tableColumnTitle}`}
            >
              Наименование
            </th>
            <th
              className={`${styles.tableHeaderCell} ${styles.tableColumnPrice}`}
            >
              Цена
            </th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {servicePrice.map((row, i) => (
            <tr key={i} className={styles.tableRow}>
              <td className={`${styles.tableCell} ${styles.tableColumnTitle}`}>
                {row.title}
              </td>
              <td className={`${styles.tableCell} ${styles.tableColumnPrice}`}>
                {row.price}₽
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicePriceList;
