'use client'

import * as DOMPurify from 'dompurify'
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { getArticleBySlug } from "@/services/apis/requests/blog"

function BlogView() {
  const { slug } = useParams()

  const dataQuery = useQuery({
    queryKey: [`blog/${slug}`, slug],
    queryFn: () => getArticleBySlug(String(slug))
  })

  const data = dataQuery?.data?.NewsArticle
  console.log(data)
  return (
    <article className="mx-auto">
        <h1 className="text-primary text-sm md:text-lg lg:text-5xl font-medium">{data?.title}</h1>
        <img className="rounded-md" src="https://news.airbnb.com/wp-content/uploads/sites/4/2024/04/02-Airbnb-Gassho-Village-Credit-Satoshi-Nagare.jpg?w=2048" />
        {/* <img src={`${data?.imageUrl}`} /> */}

        <div className="prose mx-autoprose mx-auto" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.body, { sanitize: true }) }} />`
    </article>
  )
}

export default BlogView
