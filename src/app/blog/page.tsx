'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/services/apis/requests/blog'

import CardArticle from '@/components/organisms/CardArticle'
import Container from '@/components/Container'
import { useEffect, useState } from 'react'
import CardFeaturedArticle from '@/components/organisms/CardFeaturedArticle'

function BlogIndex () {
  const dataQuery = useQuery({
    queryKey: ['blog'],
    queryFn: async () => await getArticles()
  })

  const [articles, setArticles] = useState([])

  useEffect(() => {
    if (dataQuery.isSuccess) {
      console.log('woo', dataQuery)
      setArticles(dataQuery.data.NewsArticles)
    }
  }, [dataQuery.data, dataQuery.isSuccess])

  if (dataQuery.isLoading) return <div>Loading</div>
  return (
    <Container>

      {articles.length !== 0 &&
        <>
          <div className="mb-6">
            <CardFeaturedArticle data={articles[0]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {articles.slice(1).map((item) => (
              <CardArticle key={item.id} data={item} />
            ))}
          </div>
        </>
      }

    </Container>
  )
}

export default BlogIndex
