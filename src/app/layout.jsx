// Vercel analytics
import { Analytics } from '@vercel/analytics/next';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';
import PageTransition from '@components/PageTransition';

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
  title: 'Скорая помощь для вашей оргтехники',
  description: 'Компания по ремонту оргтехники',
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
