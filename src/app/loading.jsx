import styles from '@styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadDots}>
        <div className={styles.loadDot}></div>
        <div className={styles.loadDot}></div>
        <div className={styles.loadDot}></div>
        <div className={styles.loadDot}></div>
        <div className={styles.loadDot}></div>
      </div>
    </div>
  );
}
