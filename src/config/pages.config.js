export const PAGES = {
  HOME: {
    path: '/',
    visible: 'Главная',
    breadcrumbs: [{ name: 'Главная', item: '/' }],
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  },
  SERVICES: {
    path: '/services',
    visible: 'Услуги',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/services' },
    ],
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  },
  ABOUT: {
    path: '/about',
    visible: 'О нас',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/about' },
    ],
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  },
  CONTACTS: {
    path: '/contacts',
    visible: 'Контакты',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/contacts' },
    ],
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  },
  REVIEWS: {
    path: '/reviews',
    visible: 'Отзывы',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/reviews' },
    ],
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  },
  PRIVACY_POLICY: {
    path: '/legals/privacy-policy',
    visible: 'Политика конфиденциальности',
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  },
  USER_AGREEMENT: {
    path: '/legals/user-agreement',
    visible: 'Пользовательское соглашение',
    sitemap: {
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  },
};
