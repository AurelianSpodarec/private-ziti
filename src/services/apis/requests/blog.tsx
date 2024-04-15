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

// Blog: Articles 
// ============================================================
export async function getArticles(): Promise<[IArticle[], SchemaData]> {
  return await FetchZiti(`articles`, "GET")
}

export async function getArticleBySlug(slug: string): Promise<Res> {
  return await FetchZiti(`articles/${slug}`, "GET")
}

// TODO: Create Article

// TODO: Create ARticle XSS

export async function getAuthors(): Promise<IAuthor[]> {
  return FetchZiti(`authors`, "GET")
}

export async function getAuthor(slug: string): Promise<IAuthor> {
  return FetchZiti(`authors/${slug}`, "GET")
}
