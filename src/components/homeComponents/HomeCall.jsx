// Styles, components, configs, etc
import styles from '@styles/homePageStyles/homeCall.module.css';
import AskCall from '@components/AskCall';

const title = (
  <>
    РЕМОНТ И ОБСЛУЖИВАНИЕ
    <br className={styles.DividerMobile} /> ОРГТЕХНИКИ В ОРСКЕ
  </>
);

const subTitle = 'Наши специалисты сэкономят Ваше время и деньги.';

const HomeCall = () => {
  return <AskCall title={title} subTitle={subTitle} />;
};

export default HomeCall;
