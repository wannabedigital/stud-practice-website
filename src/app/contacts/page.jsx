// Image
import Image from "next/image";

// Styles (home page)
import styles from "@styles/homePage.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </main> 
  );
}
