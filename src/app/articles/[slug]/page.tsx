// src/app/articles/[slug]/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { getArticles, getArticleBySlug } from '@/services/apis/requests/blog'
import { readingTime } from '@/lib/readingTime'

import UserAvatarBox from '@/components/molecules/EmptyState/UserAvatarBox'
import Container from '@/components/Container'

// Define generateStaticParams to statically generate pages for each article slug
export async function generateStaticParams () {
  const response = await getArticles()
  const articles = response.NewsArticles || []

  // Map each article to a parameter object containing the slug
  return articles.map((article) => ({
    params: {
      slug: article.slug
    }
  }))
}

export async function generateMetadata (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getArticleBySlug(params.slug)
  const data = res.NewsArticle
  const dataOpenGraph = res.OpenGraph

  return {
    title: data?.title ? `${data.title} - Ziti` : 'Welcome to Ziti',
    description: data?.excerpt || 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
    openGraph: dataOpenGraph?.OpenGraphData,
    twitter: dataOpenGraph?.OpenGraphTwitter
  }
}

async function BlogView ({ params: { slug } }: { params: { slug: string } }) {
  const res = await getArticleBySlug(slug)

  const data = res.NewsArticle
  if (!data) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(res.SchemaData)
        }}
      />

      <article>

        <section className="bg-primary-50 py-8 md:py-16 xl:py-20 mb-8 md:mb-16">
          <Container size="6xl">

            <Link href="/" className="flex items-center space-x-1 mb-8">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.5L2 8.5" stroke="#939BA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.9998 13.5L2 8.5L6.9999 3.5" stroke="#939BA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                Explore more articles
              </span>
            </Link>

            <h1 className="text-primary text-2xl md:text-3lg lg:text-5xl font-medium mb-4">{data?.title}</h1>
            <UserAvatarBox
              src={data?.Author.imageUrl || 'defaultImageUrl'}
              name={data?.Author.givenName || 'Default Name'}
              fallbackText='Initials'
              subTitle={`${readingTime(data?.wordCount || 0)} min read`}
            />

          </Container>
        </section>

        <Container size="6xl">
          <div className="prose lg:prose-lg xl:prose-xl mx-auto relative max-w-full">
            <div className="relative h-[577px] overflow-hidden">
              <Image
                src={data?.imageUrl || 'defaultImageURL'}
                alt={data?.imageCaption || 'default alt text'}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="max-w-[700px] mx-auto font-serif " dangerouslySetInnerHTML={{ __html: data?.body || '' }} />

          </div>
        </Container>
      </article >
    </>
  )
}

export default BlogView
