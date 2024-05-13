import { getServerSideSitemap, type ISitemapField } from 'next-sitemap'
import { getArticles } from '@/services/apis/requests/blog'

export async function GET () {
  const response = await getArticles()
  const articles = response.NewsArticles || []

  const fields: ISitemapField[] = articles.map(article => ({
    loc: `https://ziti.io/articles/${article.slug}`,
    lastmod: new Date(article.updatedAt).toISOString(),
    changefreq: 'daily',
    priority: 0.8
  }))

  return await getServerSideSitemap(fields)
}
