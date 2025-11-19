import { PAGES } from '@config/pages.config';

export const SITE_META = {
  title: {
    default: 'Скорая помощь для вашей оргтехники',
    template: 'Скорая помощь для вашей оргтехники - %s',
  },
  description:
    'Профессиональный ремонт, обслуживание офисной техники и заправка картриджей. Быстро, надежно, с гарантией.',
  url: 'https://stud-practice-website.vercel.app',

  keywords: [
    'ремонт оргтехники',
    'ремонт принтеров',
    'заправка картриджей',
    'ремонт компьютеров',
    'обслуживание офисной техники',
  ],
};

export const STATIC_PAGE_META = {
  [PAGES.HOME.path]: {
    title: 'Главная',
    description:
      'Ремонт оргтехники, обслуживание компьютеров и заправка картриджей в вашем городе. Быстро, качественно, с гарантией.',
  },

  [PAGES.SERVICES.path]: {
    title: 'Услуги',
    description:
      'Полный список услуг по ремонту и обслуживанию принтеров, мониторов, компьютеров и заправке картриджей.',
  },

  [PAGES.ABOUT.path]: {
    title: 'О компании',
    description:
      'Информация о компании "Скорая помощь для вашей оргтехники". Профессиональный сервис и опытная команда.',
  },

  [PAGES.CONTACTS.path]: {
    title: 'Контакты',
    description:
      'Контактная информация: телефон, email, адрес, режим работы. Свяжитесь с нами удобным способом.',
  },

  [PAGES.REVIEWS.path]: {
    title: 'Отзывы клиентов',
    description: 'Отзывы клиентов о работе сервиса по ремонту оргтехники.',
  },

  [PAGES.PRIVACY_POLICY.path]: {
    title: 'Политика конфиденциальности',
    description:
      'Как мы собираем, обрабатываем и защищаем ваши персональные данные.',
  },

  [PAGES.USER_AGREEMENT.path]: {
    title: 'Пользовательское соглашение',
    description: 'Условия использования сайта и предоставляемых услуг.',
  },
};

export function buildMeta({ title, description }) {
  return {
    title,
    description: description || SITE_META.description,
    keywords: SITE_META.keywords,
    openGraph: {
      title,
      description,
      url: SITE_META.url,
      siteName: SITE_META.name,
      type: 'website',
    },
    alternates: {
      canonical: SITE_META.url,
    },
  };
}
