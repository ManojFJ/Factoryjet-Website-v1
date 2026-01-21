import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BlogPostPage } from '@/pages/Blog/components/BlogPostPage'
import { POSTS } from '@/pages/Blog/posts'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | FactoryJet',
    }
  }

  return {
    title: `${post.title} | FactoryJet Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      'web development',
      'ecommerce',
      'factoryjet blog',
      ...post.title.toLowerCase().split(' '),
    ],
    authors: [{ name: post.author }],
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
      type: 'article',
      siteName: 'FactoryJet',
      title: post.title,
      description: post.excerpt,
      url: `https://factoryjet.com/blog/${resolvedParams.slug}`,
      images: [
        {
          url: post.imageUrl || 'https://factoryjet.com/logo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl || 'https://factoryjet.com/logo.png'],
    },
    alternates: {
      canonical: `https://factoryjet.com/blog/${resolvedParams.slug}`,
    },
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const post = POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header variant="solid" />
      <BlogPostPage post={post} />
      <Footer />
    </>
  )
}
