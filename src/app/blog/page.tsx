'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/services/apis/requests/blog'

import CardArticle from '@/components/organisms/CardArticle'
import Container from '@/components/Container'

function BlogIndex () {
  const dataQuery = useQuery({
    queryKey: ['blog'],
    queryFn: async () => await getArticles()
  })

  if (dataQuery.isLoading) return <div>Loading</div>
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {dataQuery?.data?.NewsArticles.map((item) => {
          return <CardArticle key={item.id} data={item} />
        })}
      </div>
    </Container>
  )
}

export default BlogIndex
