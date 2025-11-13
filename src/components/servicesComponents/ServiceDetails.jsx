import styles from '@styles/servicesPageStyles/serviceDetails.module.css';

const ServiceDetails = ({ details }) => {
  return (
    <div className={styles.detailsContainer}>
      {details.map((block, i) => {
        switch (block.type) {
          case 'h3':
            return (
              <h3 key={i} className={styles.detailsSubTitle}>
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i} className={styles.detailsListUL}>
                {block.items.map((item, j) => (
                  <li key={j} className={styles.detailsListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className={styles.detailsListOL}>
                {block.items.map((item, j) => (
                  <li key={j} className={styles.detailsListItem}>
                    {item}
                  </li>
                ))}
              </ol>
            );
          default:
            return (
              <p key={i} className={styles.detailsText}>
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
};

export default ServiceDetails;
