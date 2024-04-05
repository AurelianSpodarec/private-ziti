'use client'

import CardArticle from "@/components/CardArticle"
import { getArticles } from "@/services/apis/requests/blog"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

function BlogIndex() {

  const dataQuery = useQuery({
    queryKey: ["properites"],
    queryFn: () => getArticles()
  })

  useEffect(() => {
    console.log(dataQuery.data?.NewsArticles)
  }, [dataQuery.data])

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {dataQuery?.data?.NewsArticles.map((item) => {
          return <CardArticle key={item.id} data={item} />
        })}
      </div>
    </div>
  )
}

export default BlogIndex
