import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo, SITE_URL } from '../config/seo'

function setMetaTag(name: string, content: string, isProperty = false) {
  const attribute = isProperty ? 'property' : 'name'
  let element = document.querySelector(`meta[${attribute}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

function setHreflang(lang: string, href: string) {
  let element = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'alternate')
    element.setAttribute('hreflang', lang)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const labels: Record<string, string> = {
  '/': 'Начало',
  '/about': 'За нас',
  '/services': 'Цени',
  '/gallery': 'Галерия',
  '/contact': 'Контакти',
  '/adopt': 'Осиновяване',
  '/privacy-policy': 'Поверителност',
  '/terms-of-service': 'Условия',
  '/cookie-policy': 'Бисквитки'
}

const SeoManager = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getPageSeo(pathname)
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

    document.title = seo.title
    setMetaTag('description', seo.description)
    setMetaTag('keywords', seo.keywords ?? '')
    setMetaTag('og:title', seo.title, true)
    setMetaTag('og:description', seo.description, true)
    setMetaTag('og:url', canonicalUrl, true)
    setMetaTag('twitter:title', seo.title, true)
    setMetaTag('twitter:description', seo.description, true)
    setMetaTag('twitter:url', canonicalUrl, true)
    setCanonical(canonicalUrl)
    setHreflang('bg', canonicalUrl)
    setHreflang('x-default', canonicalUrl)

    const crumbs = [
      { '@type': 'ListItem', position: 1, name: 'Начало', item: `${SITE_URL}/` }
    ]
    if (pathname !== '/') {
      crumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: labels[pathname] ?? seo.h1,
        item: canonicalUrl
      })
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs
    }

    let script = document.getElementById('breadcrumb-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'breadcrumb-schema'
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)

    if (pathname !== '/') {
      document.getElementById('faq-schema')?.remove()
    }
  }, [pathname])

  return null
}

export default SeoManager
