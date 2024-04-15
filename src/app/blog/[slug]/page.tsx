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
    <div>
      <h1>{data?.title}</h1>
      {/* <img src={`${data.image}`} /> */}

      <div>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.body, { sanitize: true }) }} />`
      </div>
    </div>
  )
}

export default BlogView
