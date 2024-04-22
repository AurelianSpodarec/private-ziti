'use client'

import Image from 'next/image'
import { Markup } from 'react-render-markup'
import { useParams } from 'next/navigation'

import DOMPurify from 'dompurify'

import { useQuery } from '@tanstack/react-query'
import { getArticleBySlug } from '@/services/apis/requests/blog'

import { readingTime } from '@/lib/readingTime'
import UserAvatarBox from '@/components/molecules/EmptyState/UserAvatarBox'
import Container from '@/components/Container'

function BlogView () {
  const { slug } = useParams()

  const dataQuery = useQuery({
    queryKey: [`blog/${String(slug)}`],
    queryFn: async () => await getArticleBySlug(String(slug))
  })

  const data = dataQuery?.data?.NewsArticle

  if (dataQuery.isLoading) return <div>Loading Skeleton</div>
  return (
    <>
      <title></title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dataQuery?.data?.SchemaData)
        }}
      />
      <meta
        name="description"
        content="Contenttttt"
      />
      <Container>

        <article className="">

          <div className="max-w-screen-md mx-auto">
            <h1 className="text-primary text-sm md:text-lg lg:text-5xl font-medium">{dataQuery?.data?.NewsArticle?.title}</h1>
            <UserAvatarBox
              src={data?.Author.imageUrl || 'defaultImageUrl'} // Provide a default URL
              name={data?.Author.givenName || 'Default Name'} // Provide a default name
              fallbackText='Initials'
              subTitle={`${readingTime(data?.wordCount || 0)} min read`} // Ensure number is provided
            />

          </div>

          <div className="prose lg:prose-lg xl:prose-xl mx-auto relative">
            {/* TODO: Fix responsvines */}
            <Image
              src={dataQuery?.data?.NewsArticle?.imageUrl || 'defaultImageURL'}
              alt={dataQuery?.data?.NewsArticle?.imageCaption || 'default alt text'}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full my-5"
              priority
            />
            <Markup markup={DOMPurify.sanitize(dataQuery?.data?.NewsArticle?.body || '')} />
          </div>
        </article>
      </Container>
    </>
  )
}

export default BlogView
