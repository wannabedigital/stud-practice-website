// Vercel analytics
import { Analytics } from '@vercel/analytics/next';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

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
  description: 'Сайт для компании по ремонту оргтехники',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistRoboto.variable}`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
