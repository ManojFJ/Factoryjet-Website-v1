import type { Metadata } from 'next'
import BlogPage from '@/pages/Blog'

export const metadata: Metadata = {
  title: 'Web Development & E-Commerce Blog | Expert Tips & Insights | FactoryJet',
  description: 'Discover expert insights on web development, e-commerce, digital marketing, and tech trends. Get actionable tips, tutorials, and industry best practices from FactoryJet.',
  keywords: [
    'web development blog',
    'ecommerce blog',
    'digital marketing tips',
    'web design articles',
    'tech insights',
    'development tutorials',
    'online business tips',
    'website optimization',
    'seo best practices',
    'web development trends',
    'ecommerce strategies',
    'shopify tips',
    'wordpress tutorials',
    'coding best practices',
    'digital transformation'
  ],
  authors: [{ name: 'FactoryJet' }],
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
    title: 'FactoryJet Blog - Web Development & E-Commerce Insights',
    description: 'Expert insights on web development, e-commerce, and digital marketing. Learn from industry experts and grow your online business.',
    url: 'https://factoryjet.com/blog',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Blog - Web Development & E-Commerce Insights',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Blog - Web Development & E-Commerce Insights',
    description: 'Expert insights on web development, e-commerce, and digital marketing.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/blog',
  },
}

export default function Page() {
  return <BlogPage />
}
