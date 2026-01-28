import type { Metadata } from 'next'
import Script from 'next/script'
import NewYorkFAQPage from '@/pages/NewYorkFAQ/App'

export const metadata: Metadata = {
  title: 'Web Design FAQ NYC | Common Questions Answered | FactoryJet',
  description: 'Answers to frequently asked questions about web design and development services for New York City businesses. Learn about pricing, timelines, process, and more.',
  keywords: [
    'Web Design FAQ NYC',
    'Web Development Questions New York',
    'Website Design Cost NYC',
    'Web Agency FAQ',
    'NYC Website Timeline',
    'Professional Web Design Questions',
    'FactoryJet FAQ',
    'Website Development Process NYC',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design FAQ NYC | FactoryJet',
    description: 'Answers to common questions about web design services for NYC businesses. Pricing, timelines, process explained.',
    url: 'https://factoryjet.com/new-york/faq',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design FAQ NYC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design FAQ NYC | FactoryJet',
    description: 'Answers to common questions about web design services for NYC businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/new-york/faq',
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
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose FactoryJet over a local NYC web design agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Local NYC agencies typically charge $15,000-$75,000 for projects we complete for $3,500-$25,000. We operate from Ontario, Canada with a distributed team, eliminating overhead costs while maintaining enterprise-quality work. You get the same (often better) results, faster, for 60-70% less investment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you really deliver a professional website in 7 days?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for straightforward projects like landing pages or basic websites (5-10 pages). More complex projects take longer: Professional business sites (10-25 pages): 14-21 days; E-commerce stores: 21-45 days; Custom web applications: 8-24 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I don\'t like the design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our design process includes 2 rounds of revisions in all packages. 94% of clients approve the design after round 1 or 2. We spend time upfront understanding your vision to ensure satisfaction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website work on mobile phones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every website we build is mobile-first responsive. We test on 100+ device/browser combinations. Since 80% of NYC traffic is mobile, we ensure the best experience on all devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I own the website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you own everything. Complete ownership transfer happens at final payment - all design files, source code, content, domain, and hosting. We believe you should own what you pay for.',
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="json-ld-new-york-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewYorkFAQPage />
    </>
  )
}
