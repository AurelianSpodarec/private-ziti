// 'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/services/apis/requests/blog'

import CardArticle from '@/components/organisms/CardArticle'
import Container from '@/components/Container'
import CardFeaturedArticle from '@/components/organisms/CardFeaturedArticle'
import Image from 'next/image'

async function BlogIndex () {
  const res = await getArticles()
  const articles = res.NewsArticles || []

  return (
    <>
      <title>Blog - Ziti</title>

      <section className="bg-oceanicForest-800">
        <Container>
          <div className="grid grid-cols-2">

            <div>
              <h1>Your Source for Real Estate Insights and Inspiration</h1>
              <p>Discover Expert Tips, Market Trends, and Stories From the Dominican Republic Real Estate Scene</p>
            </div>
            <div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/blog-image-banner.png"
                  alt="Real Estate Homes"
                  width="0"
                  height="0"
                  // className="object-contain h-full w-full"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
