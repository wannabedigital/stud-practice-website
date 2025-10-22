// Styles (home page)
import styles from '@styles/homePageStyles/homePage.module.css';

// Components, Constants, etc.
import HomeServices from '@components/homeComponents/HomeServices';
import HomeReasons from '@components/homeComponents/HomeReasons';
import HomeSales from '@components/homeComponents/HomeSalesDynamicWrapper';
import HomeCall from '@components/homeComponents/HomeCallDynamicWrapper';

const SALES_API_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`;
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;

export default async function Home() {
  try {
    const response = await fetch(SALES_API_URL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
      next: { revalidate: 600 },
    });

    const data = await response.json();
    const sales = data.records.map(record => ({
      id: record.id,
      title: record.fields.title || '',
      src: record.fields.img?.[0]?.url || '',
    }));
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
