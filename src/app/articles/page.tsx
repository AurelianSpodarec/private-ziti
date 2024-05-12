// 'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/services/apis/requests/blog'

import CardArticle from '@/components/organisms/CardArticle'
import Container from '@/components/Container'
import CardFeaturedArticle from '@/components/organisms/CardFeaturedArticle'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Real Estate Insights: Explore Trends - Ziti',
  description: 'Discover expert tips, market trends, and stories from the Dominican Republic real estate scene.',
  openGraph: {
    title: 'Global Real Estate Insights: Explore Trends - Ziti',
    description: 'Explore the latest in Dominican Republic real estate with expert insights and market analysis.',
    images: [
      {
        url: 'https://media.ziti.io/assets/articles/banner-hero.png',
        width: 922,
        height: 827,
        alt: 'Overview of Dominican Republic real estate'
      }
    ],
    type: 'website'
  }
}

async function BlogIndex () {
  const res = await getArticles()
  const articles = res.NewsArticles || []

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(res.SchemaData)
        }}
      />

      <section className="bg-oceanicForest-800 py-16 mb-16">
        <Container size="6xl">
          <div className="lg:flex items-center">

            <div>
              <h1 className="text-white text-5xl mb-3">Your Source for Real Estate Insights and Inspiration</h1>
              <p className="text-gulfStream-400">Discover Expert Tips, Market Trends, and Stories From the Dominican Republic Real Estate Scene</p>
            </div>

            <div className="relative w-[55%] h-full hidden lg:block">
              <Image
                src="https://media.ziti.io/assets/articles/banner-hero.png"
                alt="Real Estate Homes"
                width="922"
                height="827"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>

          </div>
        </Container>
      </section>

      <Container size="6xl">
        {articles.length !== 0 &&
          <>
            <div className="mb-16">
              <CardFeaturedArticle data={articles[0]} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {articles.slice(1).map((item) => (
                <CardArticle key={item.id} data={item} />
              ))}
            </div>
          </>
        }
      </Container>
    </>
  )
}

export default BlogIndex
