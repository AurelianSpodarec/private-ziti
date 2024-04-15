'use client'

import { useQuery } from "@tanstack/react-query"
import { getArticles } from "@/services/apis/requests/blog"

import CardArticle from "@/components/organisms/CardArticle"

function BlogIndex() {

  const dataQuery = useQuery({
    queryKey: ["blog"],
    queryFn: () => getArticles(),
    staleTime: 1
  })

  // console.log(dataQuery?.data?.NewsArticles)

  if(dataQuery.isLoading) return <div>Loading</div>
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
