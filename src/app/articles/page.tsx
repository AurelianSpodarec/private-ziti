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
  description: 'Discover professional advice, current market trends, and engaging stories from the Dominican Republic\'s vibrant real estate scene.',
  openGraph: {
    title: 'Global Real Estate Insights: Explore Trends',
    description: 'Explore the latest developments in Dominican Republic real estate, featuring expert insights and comprehensive market analysis.',
    url: 'https://ziti.io/articles',
    siteName: 'Ziti',
    locale: 'en-US',
    images: [
      {
        url: 'https://media.ziti.io/assets/articles/banner-hero.png',
        alt: 'Overview of Dominican Republic real estate',
        width: 922,
        height: 827
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
        <div className="prose lg:prose-lg xl:prose-xl mx-auto relative max-w-full py-16">

          <p>Welcome to your go-to place for everything about real estate and more in the Dominican Republic! Here, you&apos;ll find helpful tips, the latest market trends, and exciting stories about real estate. But that&apos;s not all – we also share interesting articles about the country&apos;s delicious food, vibrant culture, exciting tourism spots, fun activities, and important news.</p>

          <h2>Real Estate Made Easy</h2>
          <p>Are you thinking about buying a home or investing in property? <strong>We have you covered with easy-to-understand articles that give you the best advice.</strong> Learn about the top places to buy property, how property values are changing, and what you need to know about buying real estate here. Our expert tips will help you make smart decisions and feel confident about your choices.</p>

          <h2>Explore the Culture and Taste the Food</h2>
          <p>The Dominican Republic is full of rich culture and amazing food. <strong>We bring you stories that highlight the country&apos;s unique traditions, festivals, and everyday life.</strong> Plus, you can discover mouth-watering local dishes that you have to try. Our articles will make you feel like you&apos;re right here with us, experiencing the vibrant life of the Dominican Republic.</p>

          <h2>Fun Activities and Tourist Spots</h2>
          <p>Planning a visit or looking for something fun to do? <strong>We share the best spots to visit, from beautiful beaches to exciting adventure parks.</strong> Find out about fun activities that the whole family can enjoy, and get insider tips on the best places to explore. Our guides will help you make the most of your time in the Dominican Republic.</p>

          <h2>Stay Updated with News and Events</h2>
          <p>Stay in the know with the latest social and economic news from the Dominican Republic. <strong>We cover important events and trends that affect the local community and economy.</strong> Whether it&apos;s a big festival, a new development project, or changes in the market, our articles keep you informed and connected.</p>

          <p>Join us on this exciting journey through the Dominican Republic. There&apos;s so much to learn, explore, and enjoy!</p>

        </div>
      </Container>
    </>
  )
}

export default BlogIndex
