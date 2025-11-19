'use client';
import dynamic from 'next/dynamic';
import LoadingLazy from '@components/LoadingLazyComponents';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <LoadingLazy />,
});

const LottieAnimation = ({ animation }) => {
  return <Lottie animationData={animation} loop />;
};

export default LottieAnimation;
