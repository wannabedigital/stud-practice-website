// Image
import Image from 'next/image';

// Styles
import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogoContainer}>
        <Image src={'/img/logo.png'} alt="logo icon" width={380} height={49} />
      </div>
    </footer>
  );
};

export default Footer;
