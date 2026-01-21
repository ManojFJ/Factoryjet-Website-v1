import type { Metadata } from 'next'
import UAEPage from './App'

export const metadata: Metadata = {
  title: 'Top Web Design & Development Company in Dubai, UAE | FactoryJet',
  description: 'Leading web design and development agency in Dubai with 25+ years expertise. Trusted website design company serving Dubai, Abu Dhabi, and UAE. Specialized in WordPress, Webflow, e-commerce, and custom web development. Get responsive, SEO-optimized websites that drive growth.',
  keywords: [
    'web design company dubai',
    'website development company dubai',
    'web design agency dubai',
    'website developer near me',
    'web development agency uae',
    'web design firm dubai',
    'website design dubai',
    'web development dubai',
    'dubai web design',
    'wordpress development dubai',
    'webflow agency dubai',
    'ecommerce website dubai',
    'responsive web design uae',
    'seo optimized websites dubai',
    'real estate website design dubai',
    'industrial website design uae',
    'custom web development dubai',
    'abu dhabi web design',
    'uae website development',
    'dubai digital agency'
  ],
  authors: [{ name: 'FactoryJet Dubai' }],
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
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Top Web Design & Development Company in Dubai, UAE | FactoryJet',
    description: 'Premier web design and development agency in Dubai with 25+ years expertise. Trusted by 500+ UAE businesses. Specialized in WordPress, Webflow, e-commerce, and custom solutions. Get responsive, SEO-optimized websites that drive real growth.',
    url: 'https://factoryjet.com/uae',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Top Web Design Company in Dubai, UAE',
      },
    ],
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Web Design & Development Company in Dubai, UAE | FactoryJet',
    description: 'Leading web design agency in Dubai with 25+ years expertise. Trusted by 500+ UAE businesses for responsive, SEO-optimized websites.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/uae',
  },
}

export default function Page() {
  return <UAEPage />
}
