import Image from 'next/image'

import { getArticleBySlug } from '@/services/apis/requests/blog'
import { readingTime } from '@/lib/readingTime'

import UserAvatarBox from '@/components/molecules/EmptyState/UserAvatarBox'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'

async function BlogView ({ params: { slug } }: { params: { slug: string } }) {
  const res = await getArticleBySlug(slug)
  const data = res.NewsArticle

  return (
    <>
      {/* <title>Test Page Title</title>
      // <script
      //   type="application/ld+json"
      //   dangerouslySetInnerHTML={{
      //     __html: JSON.stringify(data?.SchemaData)
      //   }}
      // />
      <meta
        name="description"
        content="Contenttttt"
      /> */}

      <article className="">

        <section className="bg-primary-50 py-20 mb-20">
          <Container >

            <Button
              asChild
              icon={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.5L2 8.5" stroke="#939BA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.9998 13.5L2 8.5L6.9999 3.5" stroke="#939BA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              }

            >
              Back to blog page
            </Button>

            <h1 className="text-primary text-sm md:text-lg lg:text-5xl font-medium">{data?.title}</h1>
            <UserAvatarBox
              src={data?.Author.imageUrl || 'defaultImageUrl'}
              name={data?.Author.givenName || 'Default Name'}
              fallbackText='Initials'
              subTitle={`${readingTime(data?.wordCount || 0)} min read`}
            />

          </Container>
        </section>

        <Container>
          <div className="prose lg:prose-lg xl:prose-xl mx-auto relative">
            <div className="relative h-[577px] overflow-hidden">
              <Image
                src={data?.imageUrl || 'defaultImageURL'}
                alt={data?.imageCaption || 'default alt text'}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div dangerouslySetInnerHTML={{ __html: data?.body || '' }} />

          </div>
        </Container>
      </article >
    </>
  )
}

export default BlogView
