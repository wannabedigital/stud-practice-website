'use client';
import dynamic from 'next/dynamic';
import LoadingLazy from '@components/LoadingLazyComponents';

const ContactsGoogleMap = dynamic(
  () => import('@components/homeComponents/ContactsGoogleMap'),
  {
    loading: () => <LoadingLazy />,
  }
);

export default ContactsGoogleMap;
