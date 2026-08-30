export const SITE_URL = 'https://www.rozi-dog-hotel.eu'
export const SITE_NAME = "Rozi's Luxury Dog Hotel"

export const DEFAULT_KEYWORDS = [
  'хотел за кучета',
  'хотел за кучета Сапарева баня',
  'настаняване на кучета',
  'дневна ясла за кучета',
  'грижа за кучета',
  'луксозен хотел за кучета',
  'кучешки хотел',
  'dog hotel Bulgaria',
  'Сапарева баня',
  'Кюстендил'
].join(', ')

export interface PageSeo {
  title: string
  description: string
  keywords?: string
}

const defaultDescription =
  'Луксозен хотел за кучета в Сапарева баня – настаняване, дневна ясла, транспорт и 24/7 грижа. Вашият хотел за кучета с любов и внимание към всеки гост.'

export const routeSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Луксозен хотел за кучета Сапарева баня | Rozi\'s',
    description: defaultDescription,
    keywords: DEFAULT_KEYWORDS
  },
  '/about': {
    title: 'За нас – хотел за кучета | Rozi\'s Luxury Dog Hotel',
    description:
      'Запознайте се с Rozi\'s Luxury Dog Hotel – луксозен хотел за кучета в Сапарева баня с професионална грижа, любов и индивидуално внимание за всеки гост.',
    keywords: 'хотел за кучета, за нас, Сапарева баня, грижа за кучета, Rozi'
  },
  '/services': {
    title: 'Услуги и цени – хотел за кучета | Rozi\'s Luxury Dog Hotel',
    description:
      'Услуги на хотела за кучета: луксозно настаняване от 55€/нощ, дневна ясла, транспорт София и специализирано хранене. Сапарева баня.',
    keywords: 'хотел за кучета цени, настаняване кучета, дневна ясла, такси кучета София'
  },
  '/gallery': {
    title: 'Галерия – хотел за кучета | Rozi\'s Luxury Dog Hotel',
    description:
      'Снимки от хотела за кучета в Сапарева баня – двор, вътрешни помещения, храна и щастливи гости.',
    keywords: 'хотел за кучета снимки, галерия кучета, Сапарева баня'
  },
  '/contact': {
    title: 'Контакти – хотел за кучета Сапарева баня | Rozi\'s Luxury Dog Hotel',
    description:
      'Свържете се с хотела за кучета Rozi\'s Luxury Dog Hotel – телефон +359 882 739 396, Сапарева баня, ул. Германея 60.',
    keywords: 'хотел за кучета контакти, Сапарева баня хотел кучета, резервация куче'
  },
  '/privacy-policy': {
    title: 'Политика за поверителност | Rozi\'s Luxury Dog Hotel',
    description: 'Политика за поверителност на Rozi\'s Luxury Dog Hotel – хотел за кучета в Сапарева баня.'
  },
  '/terms-of-service': {
    title: 'Общи условия | Rozi\'s Luxury Dog Hotel',
    description: 'Общи условия за ползване на услугите на хотела за кучета Rozi\'s Luxury Dog Hotel.'
  },
  '/cookie-policy': {
    title: 'Политика за бисквитки | Rozi\'s Luxury Dog Hotel',
    description: 'Политика за бисквитки на сайта на Rozi\'s Luxury Dog Hotel – хотел за кучета.'
  }
}

export function getPageSeo(pathname: string): PageSeo {
  return routeSeo[pathname] ?? {
    title: `Хотел за кучета | ${SITE_NAME}`,
    description: defaultDescription,
    keywords: DEFAULT_KEYWORDS
  }
}
