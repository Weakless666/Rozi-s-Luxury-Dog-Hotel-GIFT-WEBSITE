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

const SeoManager = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getPageSeo(pathname)
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`

    document.title = seo.title
    setMetaTag('description', seo.description)
    setMetaTag('keywords', seo.keywords ?? '')
    setMetaTag('og:title', seo.title, true)
    setMetaTag('og:description', seo.description, true)
    setMetaTag('og:url', canonicalUrl, true)
    setMetaTag('twitter:title', seo.title, true)
    setMetaTag('twitter:description', seo.description, true)
    setCanonical(canonicalUrl)
    setHreflang('bg', canonicalUrl)
    setHreflang('x-default', canonicalUrl)
  }, [pathname])

  return null
}

export default SeoManager
