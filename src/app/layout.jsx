// Vercel analytics
import { Analytics } from '@vercel/analytics/next';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';
import PageTransition from '@components/PageTransition';
import { SITE_META } from '@config/meta.config';

// Fonts
import { Roboto } from 'next/font/google';

// Styles
import '@styles/reset.css';
import '@styles/base.css';

const geistRoboto = Roboto({
  variable: '--font-roboto',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL(SITE_META.url),
  title: {
    default: SITE_META.title.default,
    template: SITE_META.title.template,
  },
  keywords: SITE_META.keywords,
  description: SITE_META.description,
  verification: {
    google: 'kC9XgkY1a-sdXZETgNc7xlYmYVRYK3s_Byl0EWbb44E',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistRoboto.variable}`}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
