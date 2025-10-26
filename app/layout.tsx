import type { Metadata } from 'next'
import { Inter, Dancing_Script, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Rozi's Luxury Dog Hotel - Луксозен хотел за кучета",
  description: "Rozi's Luxury Dog Hotel - премиум хотел за кучета с луксозни услуги, професионална грижа и много любов към нашите четирикраки приятели.",
  keywords: "хотел за кучета, настаняване кучета, груминг, тренировки кучета, Сапарева баня, България",
  authors: [{ name: "Rozi's Luxury Dog Hotel" }],
  openGraph: {
    type: "website",
    url: "https://www.rozi-dog-hotel.eu/",
    title: "Rozi's Luxury Dog Hotel - Луксозен хотел за кучета",
    description: "Премиум хотел за кучета с луксозни услуги, професионална грижа и много любов. Настаняване, груминг, тренировки и игри за вашите любимци.",
    images: ["/images/logo.png"],
    siteName: "Rozi's Luxury Dog Hotel",
    locale: "bg_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozi's Luxury Dog Hotel - Луксозен хотел за кучета",
    description: "Премиум хотел за кучета с луксозни услуги, професионална грижа и много любов. Настаняване, груминг, тренировки и игри за вашите любимци.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rozi's Luxury Dog Hotel",
            "description": "Премиум хотел за кучета с луксозни услуги, професионална грижа и много любов към нашите четирикраки приятели.",
            "url": "https://www.rozi-dog-hotel.eu/",
            "logo": "/images/logo.png",
            "image": "/images/logo.png",
            "telephone": "+359 882 739 396",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. 'Германея' 60",
              "addressLocality": "Сапарева баня",
              "postalCode": "2650",
              "addressCountry": "BG"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 42.2833,
                "longitude": 23.2667
              },
              "geoRadius": "50000"
            }
          })
        }} />
      </head>
      <body className={`${inter.variable} ${dancingScript.variable} ${playfairDisplay.variable} min-h-screen bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

