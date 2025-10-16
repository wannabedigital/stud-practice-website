// Styles (home page)
import styles from '@styles/homePageStyles/homePage.module.css';

// Components, Constants, etc.
import HomeServices from '@components/homeComponents/HomeServices';
import HomeReasons from '@components/homeComponents/HomeReasons';
import HomeSales from '@components/homeComponents/HomeSalesDynamicWrapper';
import HomeCall from '@components/homeComponents/HomeCallDynamicWrapper';
import { SALES_API_URL } from '@/constants/salesData';

export default async function Home() {
  try {
    const response = await fetch(SALES_API_URL, {
      next: { revalidate: 600 },
    });

    const sales = await response.json();

    return (
      <main className={styles.page}>
        <HomeServices />
        <HomeReasons />
        <HomeSales sales={sales} />
        <HomeCall />
      </main>
    );
  } catch {
    return (
      <main className={styles.page}>
        <HomeServices />
        <HomeReasons />
        <HomeCall />
      </main>
    );
  }
}
