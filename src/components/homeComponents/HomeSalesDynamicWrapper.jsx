'use client';
import dynamic from 'next/dynamic';
import LoadingLazy from '../LoadingLazyComponents';

const HomeSales = dynamic(
  () => import('@components/homeComponents/HomeSales'),
  {
    loading: () => <LoadingLazy name={'акций'} />,
  }
);

export default HomeSales;
