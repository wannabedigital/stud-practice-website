// Image
import Image from "next/image";

// Styles
import styles from "@/styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <Image src="/img/logo.png" alt="logo" width={380} height={49} />
      </div>
    </header>
  );
};

export default Header;
