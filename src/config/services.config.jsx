import {
  InkFillIcon,
  MonitorFixIcon,
  PrinterFixIcon,
  ComputerFixIcon,
} from '@components/servicesComponents/ServicesIcons';

import {
  INK_FILL_DETAILS,
  MONITOR_FIX_DETAILS,
  PRINTER_FIX_DETAILS,
  COMPUTER_FIX_DETAILS,
} from '@config/service/details.config';

import {
  INK_FILL_PRICES,
  MONITOR_FIX_PRICES,
  PRINTER_FIX_PRICES,
  COMPUTER_FIX_PRICES,
} from '@config/service/price.config';

export const SERVICES = {
  INK_FILL: {
    name: 'Заправка картриджей для различных принтеров',
    icon: <InkFillIcon />,
    details:
      'У нас заправка картриджей — это не просто услуга,а решение «здесь и сейчас». Ремонт и заправка выполняются качественно, а в присутствии клиента — всего за 10–15 минут.',
    slug: {
      link: 'ink-fill',
      name: 'Заправка картриджей',
      details: INK_FILL_DETAILS,
      price: INK_FILL_PRICES,
    },
    seoDescription:
      'Профессиональная заправка картриджей для лазерных и струйных принтеров. Быстро, качественно и с гарантией стабильной печати.',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/services' },
      { name: 'Заправка картриджей', item: '/services/ink-fill/' },
    ],
  },
  MONITOR_FIX: {
    name: 'Качественный ремонт мониторов',
    icon: <MonitorFixIcon />,
    details:
      'Повреждение экрана монитора — одна из самых частых и неприятных поломок. Но решается она быстрее, чем кажется, и мы вам в этом поможем.',
    slug: {
      link: 'monitor-fix',
      name: 'Ремонт мониторов',
      details: MONITOR_FIX_DETAILS,
      price: MONITOR_FIX_PRICES,
    },
    seoDescription:
      'Ремонт мониторов любой сложности: от замены матрицы до устранения проблем с подсветкой и питанием. Быстро, надёжно и с гарантией.',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/services' },
      { name: 'Ремонт мониторов', item: '/services/monitor-fix/' },
    ],
  },
  PRINTER_FIX: {
    name: 'Надежный ремонт принтеров и МФУ',
    icon: <PrinterFixIcon />,
    details:
      'Поломка принтера — не повод терять время. Мы оперативно и профессионально восстановим работу вашей оргтехники: принтеров, МФУ, сканеров и факсов — любого типа.',
    slug: {
      link: 'printer-fix',
      name: 'Ремонт принтеров',
      details: PRINTER_FIX_DETAILS,
      price: PRINTER_FIX_PRICES,
    },
    seoDescription:
      'Профессиональный ремонт принтеров и МФУ любых моделей. Быстро устраняем ошибки, замятия, проблемы с печатью и механикой.',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/services' },
      { name: 'Ремонт принтеров', item: '/services/printer-fix/' },
    ],
  },
  COMPUTER_FIX: {
    name: 'Услуги по ремонту компьютеров',
    icon: <ComputerFixIcon />,
    details:
      'Компьютер не работает, тормозит, выключается? Мы оперативно найдём причину и устраним её — профессионально, быстро и с гарантией качества.',
    slug: {
      link: 'computer-fix',
      name: 'Ремонт компьютеров',
      details: COMPUTER_FIX_DETAILS,
      price: COMPUTER_FIX_PRICES,
    },
    seoDescription:
      'Диагностика и ремонт компьютеров: сбои системы, тормоза, перегрев, поломки компонентов. Решаем любые проблемы быстро и качественно.',
    breadcrumbs: [
      { name: 'Главная', item: '/' },
      { name: 'Услуги', item: '/services' },
      { name: 'Ремонт компьютеров', item: '/services/computer-fix/' },
    ],
  },
};
