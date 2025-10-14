'use client';
import dynamic from 'next/dynamic';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: '800',
  color: '#2d2d2d',
  height: '200px',
};

const HomeSales = dynamic(
  () => import('@components/homeComponents/HomeSales'),
  {
    ssr: false,
    loading: () => <div style={styles}>Загрузка акций...</div>,
  }
);

export default HomeSales;
