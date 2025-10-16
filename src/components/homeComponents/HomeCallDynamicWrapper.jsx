'use client';
import dynamic from 'next/dynamic';
import LoadingLazy from '@components/LoadingLazyComponents';

const HomeCall = dynamic(() => import('@components/homeComponents/HomeCall'), {
  loading: () => <LoadingLazy />,
});

export default HomeCall;
