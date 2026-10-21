import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const templatePath = path.join(dist, 'index.html')
const template = fs.readFileSync(templatePath, 'utf8')

const pages = [
  {
    route: '/',
    file: 'index.html',
    title: "Хотел за кучета Сапарева баня | Rozi's",
    description:
      'Хотел за кучета в Сапарева баня от 55€/нощ. Дневна ясла 25€ и транспорт от София 30€. 24/7 грижа. Обадете се: 0882 739 396.',
    h1: 'Хотел за кучета в Сапарева баня',
    intro:
      'Луксозен хотел за кучета в Сапарева баня – настаняване от 55€/нощ, дневна ясла 25€ и транспорт от София 30€. ул. Германея 60.'
  },
  {
    route: '/about',
    file: 'about.html',
    title: 'За нас | Хотел за кучета Сапарева баня',
    description:
      "Кои сме ние: Rozi's Luxury Dog Hotel – хотел за кучета в Сапарева баня с индивидуална грижа, двор и 24/7 присъствие.",
    h1: 'За хотела за кучета в Сапарева баня',
    intro: "Rozi's Luxury Dog Hotel е хотел за кучета на ул. Германея 60, Сапарева баня. Грижим се лично за всеки гост."
  },
  {
    route: '/services',
    file: 'services.html',
    title: "Цени | Хотел за кучета от 55€ | Rozi's",
    description:
      'Цени на хотел за кучета: нощувка 55€, дневна ясла 25€, транспорт София 30€ в една посока. Сапарева баня.',
    h1: 'Цени на хотел за кучета',
    intro: 'Настаняване 55€ на нощ, дневна ясла 25€ и транспорт от София и София област 30€ в една посока.'
  },
  {
    route: '/gallery',
    file: 'gallery.html',
    title: 'Галерия | Хотел за кучета Сапарева баня',
    description: "Снимки от хотела за кучета в Сапарева баня – двор, стаи, разходки и гости на Rozi's Luxury Dog Hotel.",
    h1: 'Галерия на хотела за кучета',
    intro: 'Снимки от хотела за кучета в Сапарева баня – двор, стаи и ежедневието на нашите гости.'
  },
  {
    route: '/contact',
    file: 'contact.html',
    title: 'Контакти | Хотел за кучета Сапарева баня',
    description: 'Резервация за хотел за кучета: 0882 739 396, ул. Германея 60, Сапарева баня. Пишете ни или се обадете.',
    h1: 'Контакти – хотел за кучета Сапарева баня',
    intro: 'Обадете се на 0882 739 396 или ни пишете. Адрес: ул. Германея 60, 2650 Сапарева баня.'
  },
  {
    route: '/adopt',
    file: 'adopt.html',
    title: "Осиновяване на кучета | Rozi's Dog Hotel",
    description: "Осиновяване на кучета чрез Rozi's Luxury Dog Hotel в Сапарева баня. В момента няма свободни кучета.",
    h1: 'Осиновете любов',
    intro: 'Когато имаме кучета за осиновяване, ще ги публикуваме тук. Хотел за кучета в Сапарева баня.'
  },
  {
    route: '/privacy-policy',
    file: 'privacy-policy.html',
    title: "Политика за поверителност | Rozi's",
    description: "Политика за поверителност на Rozi's Luxury Dog Hotel – хотел за кучета в Сапарева баня.",
    h1: 'Политика за поверителност',
    intro: "Как Rozi's Luxury Dog Hotel събира и защитава лични данни."
  },
  {
    route: '/terms-of-service',
    file: 'terms-of-service.html',
    title: "Общи условия | Rozi's Dog Hotel",
    description: "Общи условия за ползване на услугите на хотела за кучета Rozi's Luxury Dog Hotel.",
    h1: 'Общи условия',
    intro: 'Условия за настаняване и ползване на сайта на хотела за кучета.'
  },
  {
    route: '/cookie-policy',
    file: 'cookie-policy.html',
    title: "Политика за бисквитки | Rozi's",
    description: "Политика за бисквитки на сайта на Rozi's Luxury Dog Hotel – хотел за кучета.",
    h1: 'Политика за бисквитки',
    intro: 'Какви бисквитки използва сайтът на хотела за кучета и как да ги откажете.'
  }
]

function esc(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function render(page) {
  const url = `https://www.rozi-dog-hotel.eu${page.route === '/' ? '/' : page.route}`
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<link rel="alternate" hreflang="bg" href=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(page.title)}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
  html = html.replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(page.title)}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
  html = html.replace(/<h1 id="seo-h1">[\s\S]*?<\/h1>/, `<h1 id="seo-h1">${page.h1}</h1>`)
  html = html.replace(/<p id="seo-intro">[\s\S]*?<\/p>/, `<p id="seo-intro">${page.intro}</p>`)

  if (page.route !== '/') {
    html = html.replace(/\s*<script type="application\/ld\+json" id="faq-schema">[\s\S]*?<\/script>/, '')
  }

  fs.writeFileSync(path.join(dist, page.file), html)
}

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html missing. Run vite build first.')
  process.exit(1)
}

for (const page of pages) render(page)
console.log(`Prerendered ${pages.length} SEO pages.`)
