// ============================================================
// API Blog
// ============================================================

import { type IArticle, type IAuthor } from '@/interfaces/IBlog'
import FetchZiti from '../fetch/FetchZiti'

interface SchemaData {
  SchemaData: {}
}

interface Res {
  NewsArticle?: IArticle
  SchemaData?: {}
}

interface Res2 {
  NewsArticles?: IArticle[]
  SchemaData?: {}
}

// Blog: Articles
// ============================================================
export async function getArticles (): Promise<Res2> {
  return await FetchZiti('articles', 'GET')
}

export async function getArticleBySlug (slug: string): Promise<Res> {
  return await FetchZiti(`articles/${slug}`, 'GET')
}

// TODO: Create Article

// TODO: Create ARticle XSS

export async function getAuthors (): Promise<IAuthor[]> {
  return await FetchZiti('authors', 'GET')
}

export async function getAuthor (slug: string): Promise<IAuthor> {
  return await FetchZiti(`authors/${slug}`, 'GET')
}
