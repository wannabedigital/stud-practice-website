import {
  InkFillIcon,
  MonitorFixIcon,
  PrinterFixIcon,
  ComputerFixIcon,
} from '@components/servicesComponents/ServicesIcons';

export const SERVICES = {
  INK_FILL: {
    name: 'Заправка картриджей для различных принтеров',
    icon: <InkFillIcon />,
    details:
      'У нас заправка картриджей — это не просто услуга,а решение «здесь и сейчас».Ремонт и заправка выполняются качественно,а в присутствии клиента — всего за 10–15 минут.',
    slug: {
      link: 'ink-fill',
      name: 'Заправка картриджей',
      details: 'Детали',
    },
  },
  MONITOR_FIX: {
    name: 'Качественный ремонт мониторов',
    icon: <MonitorFixIcon />,
    details:
      'Повреждение экрана монитора —одна из самых частых и неприятных поломок.Но решается она быстрее, чем кажется, и мы вам в этом поможем.',
    slug: {
      link: 'monitor-fix',
      name: 'Ремонт мониторов',
      details: 'Детали',
    },
  },
  PRINTER_FIX: {
    name: 'Надежный ремонт принтеров и МФУ',
    icon: <PrinterFixIcon />,
    details:
      'Поломка принтера — не повод терять время. Мы оперативно и профессионально восстановим работу вашей оргтехники: принтеров, МФУ, сканеров и факсов — любого типа.',
    slug: {
      link: 'printer-fix',
      name: 'Ремонт Принтеров',
      details: 'Детали',
    },
  },
  COMPUTER_FIX: {
    name: 'Услуги по ремонту компьютеров',
    icon: <ComputerFixIcon />,
    details:
      'Компьютер не работает, тормозит, выключается? Мы оперативно найдём причину и устраним её — профессионально, быстро и с гарантией качества.',
    slug: {
      link: 'computer-fix',
      name: 'Ремонт компьютеров',
      details: 'Детали',
    },
  },
};
