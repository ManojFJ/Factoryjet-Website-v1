import type { Metadata } from 'next'
import Script from 'next/script'
import NewYorkServiceAndPricingPage from '@/pages/NewYorkServiceAndPricingPage/App'

export const metadata: Metadata = {
  title: 'Web Development Services & Pricing NYC | WordPress, Webflow, Custom | FactoryJet',
  description: 'Professional web development services in New York City. WordPress, Webflow, Framer, custom development, and e-commerce solutions. Transparent pricing starting from $2,500. Get your free quote today.',
  keywords: [
    'Web Development Services NYC',
    'WordPress Development New York',
    'Webflow Development NYC',
    'Framer Development New York',
    'Custom Web Development NYC',
    'E-Commerce Development New York',
    'Website Pricing NYC',
    'Web Design Packages New York',
    'Professional Web Development Manhattan',
    'NYC Web Agency Pricing'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Development Services & Pricing NYC | FactoryJet',
    description: 'Professional web development services in NYC. WordPress, Webflow, custom development. Transparent pricing from $2,500.',
    url: 'https://factoryjet.com/new-york/services',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Development Services NYC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services & Pricing NYC | FactoryJet',
    description: 'Professional web development services in NYC. Transparent pricing from $2,500.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/new-york/services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Services NYC',
    description: 'Professional web development services including WordPress, Webflow, Framer, custom development, and e-commerce solutions for New York City businesses.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'FactoryJet - Web Design Company NYC',
      url: 'https://factoryjet.com/new-york',
      telephone: '+1-919-699-977-699',
      email: 'connect@factoryjet.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New York',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'New York City',
    },
    serviceType: [
      'WordPress Development',
      'Webflow Development',
      'Framer Development',
      'Custom Web Development',
      'E-Commerce Development',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '2500',
      highPrice: '150000',
      offerCount: '5',
    },
  }

  return (
    <>
      <Script
        id="json-ld-new-york-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewYorkServiceAndPricingPage />
    </>
  )
}
