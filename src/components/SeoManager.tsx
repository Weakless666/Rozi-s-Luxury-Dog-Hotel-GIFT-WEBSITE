import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_ROBOTS, getPageSeo, normalizePath, routeSeo, SITE_URL } from '../config/seo'

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

function setLink(selector: string, attributes: Record<string, string>, href: string | null) {
  let element = document.querySelector(selector)

  if (!href) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('link')
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
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
    // Статичният блок е само за ботове без JavaScript – React вече рендира истинското съдържание и H1
    document.getElementById('static-seo')?.remove()
  }, [])

  useEffect(() => {
    const path = normalizePath(pathname)
    const seo = getPageSeo(path)
    const isKnownRoute = path in routeSeo
    const canonicalUrl = isKnownRoute ? `${SITE_URL}${path === '/' ? '/' : path}` : null

    document.title = seo.title
    setMetaTag('description', seo.description)
    setMetaTag('keywords', seo.keywords ?? '')
    setMetaTag('robots', seo.robots ?? DEFAULT_ROBOTS)
    setMetaTag('og:title', seo.title, true)
    setMetaTag('og:description', seo.description, true)
    setMetaTag('twitter:title', seo.title)
    setMetaTag('twitter:description', seo.description)
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, true)
      setMetaTag('twitter:url', canonicalUrl)
    }
    setLink('link[rel="canonical"]', { rel: 'canonical' }, canonicalUrl)
    setLink('link[rel="alternate"][hreflang="bg"]', { rel: 'alternate', hreflang: 'bg' }, canonicalUrl)
    setLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default' }, canonicalUrl)

    let script = document.getElementById('breadcrumb-schema')
    if (!canonicalUrl) {
      script?.remove()
    } else {
      const crumbs = [
        { '@type': 'ListItem', position: 1, name: 'Начало', item: `${SITE_URL}/` }
      ]
      if (path !== '/') {
        crumbs.push({
          '@type': 'ListItem',
          position: 2,
          name: labels[path] ?? seo.h1,
          item: canonicalUrl
        })
      }

      if (!script) {
        script = document.createElement('script')
        script.id = 'breadcrumb-schema'
        script.setAttribute('type', 'application/ld+json')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs
      })
    }

    if (path !== '/') {
      document.getElementById('faq-schema')?.remove()
    }
  }, [pathname])

  return null
}

export default SeoManager
