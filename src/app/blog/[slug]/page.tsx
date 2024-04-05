'use client'

import { getArticleBySlug } from "@/services/apis/requests/blog"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

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

    </div>
  )
}

export default BlogView
