'use client'

import Head from 'next/head';
import { useParams } from "next/navigation"

import { Markup } from 'react-render-markup';
import DOMPurify from 'dompurify';

import { useQuery } from "@tanstack/react-query"
import { getArticleBySlug } from "@/services/apis/requests/blog"

import Avatar from '@/components/atoms/Avatar';
import FloatingShareButtons from '../_components/FloatingShareButtons'

function readingTime(words: number) {
  const wpm = 225;
  const time = Math.ceil(words / wpm)
  return time;
}

function BlogView() {
  const { slug } = useParams()

  const dataQuery = useQuery({
    queryFn: () => getArticleBySlug((slug)) || null,
    queryKey: [`blog/${slug}`, `${slug}`],
  })


  // if (dataQuery.isLoading) return <div>Skeleton</div>

  // function addBlogJsonLd() {
  //   return {
  //     __html: dataQuery?.data?.SchemaData
  //   }
  // }

  // return <pre>{JSON.stringify(dataQuery,null,2)}</pre>

  const shareUrl = "https://www.google.com"

  if (dataQuery.isError) {
    return <div>Error</div>
  }

  if (dataQuery.isLoading) {
    return <div>Loading</div>
  }

  const data = dataQuery?.data?.NewsArticle
  return (
    <>
      {/* <Head>
        <title>Woo {data?.title}</title>
        <meta
          name="description"
          // content="Super product with free shipping."
          key="desc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBlogJsonLd()}
        />
      </Head> */}
      <Head>
        <title>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</title>
        <meta
          name="description"
          content="Contenttttt"
        />
      </Head>
      <article className="">

        <div className="max-w-screen-sm mx-auto">
          <h1 className="text-primary text-sm md:text-lg lg:text-5xl font-medium">{dataQuery?.data?.NewsArticle?.title}</h1>
          <div>

            <Avatar src={data?.Author.imageUrl} name={data?.Author.givenName} fallbackText='Initials' />
            <div>
              {readingTime(data?.wordCount)} min read
              {data?.createdAt}
            </div>

            <FloatingShareButtons shareUrl={shareUrl} className="flex-row space-x-4" />
          </div>
        </div>

        <img className="rounded-lg my-10 mx-auto max-w-screen-lg" src="https://news.airbnb.com/wp-content/uploads/sites/4/2024/04/02-Airbnb-Gassho-Village-Credit-Satoshi-Nagare.jpg?w=2048" />
        {/* <img src={`${dataQuery?.data?.NewsArticle?.imageUrl}`} /> */}

        <div className="prose lg:prose-lg mx-auto relative">
          <Markup markup={DOMPurify.sanitize(dataQuery?.data?.NewsArticle?.body)} />
        </div>
      </article>
    </>
  )
}

export default BlogView
