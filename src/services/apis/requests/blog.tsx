// ============================================================
// API Blog
// ============================================================

import { IArticle, IAuthor } from "@/interfaces/IBlog"
import FetchZiti from "../fetch/FetchZiti"

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
export function getArticles(): Promise<Res2> {
  return FetchZiti(`articles`, "GET")
}

export function getArticleBySlug(slug: string): Promise<Res> {
  return FetchZiti(`articles/${slug}`, "GET")
}

// TODO: Create Article

// TODO: Create ARticle XSS

export function getAuthors(): Promise<IAuthor[]> {
  return FetchZiti(`authors`, "GET")
}

export function getAuthor(slug: string): Promise<IAuthor> {
  return FetchZiti(`authors/${slug}`, "GET")
}
