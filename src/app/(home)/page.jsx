// Styles (home page)
import styles from '@styles/homePageStyles/homePage.module.css';

// Components, Constants, etc
import HomeServices from '@components/homeComponents/HomeServices';
import HomeReasons from '@components/homeComponents/HomeReasons';
import HomeSales from '@components/homeComponents/HomeSalesDynamicWrapper';
import HomeCall from '@components/homeComponents/HomeCallDynamicWrapper';
import sales from '@data/sales.json';

export default async function Home() {
  return (
    <main className={styles.page}>
      <HomeServices />
      <HomeReasons />
      <HomeSales sales={sales} />
      <HomeCall />
    </main>
  );
}
