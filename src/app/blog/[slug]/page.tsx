'use client'

import { Markup } from 'react-render-markup';
import sanitizeHtml from 'sanitize-html';

import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { getArticleBySlug } from "@/services/apis/requests/blog"
import Avatar from '@/components/atoms/Avatar';

function BlogView() {
  const { slug } = useParams()

  const dataQuery = useQuery({
    queryKey: [`blog/${slug}`, slug],
    queryFn: () => getArticleBySlug(String(slug))
  })

  if (dataQuery.isLoading) return <div>Loading</div>
  const data = dataQuery?.data?.NewsArticle
  // console.log(dataQuery?.data?.NewsArticle)
  return (
    <article className="">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-primary text-sm md:text-lg lg:text-5xl font-medium">{dataQuery?.data?.NewsArticle?.title}</h1>
        <div>

          <Avatar src={data?.Author.imageUrl} name={data?.Author.givenName} />
          <div>
            {data?.wordCount} min read
            {data?.createdAt}
          </div>
        </div>
      </div>

      <img className="rounded-lg my-10 mx-auto max-w-screen-lg" src="https://news.airbnb.com/wp-content/uploads/sites/4/2024/04/02-Airbnb-Gassho-Village-Credit-Satoshi-Nagare.jpg?w=2048" />
      {/* <img src={`${dataQuery?.data?.NewsArticle?.imageUrl}`} /> */}
      <div className="prose lg:prose-lg mx-auto">
        <Markup markup={dataQuery?.data?.NewsArticle?.body} />
      </div>
      {/* <div className="prose mx-autoprose mx-auto" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.body, { sanitize: true }) }} />` */}
    </article>
  )
}

export default BlogView
