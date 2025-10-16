import styles from '@styles/loading.module.css';

const LoadingLazy = ({ name = '' }) => {
  return <div className={styles.loading}>Загрузка {name}...</div>;
};

export default LoadingLazy;
