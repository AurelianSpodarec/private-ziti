export interface ISocialMedia {
  instagram: string
}

export interface IKeyword {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  Articles_Keywords: {
    createdAt: string
    updatedAt: string
    KeywordId: number
    ArticleId: string
  }
}

export interface ITag {
  id: number
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  Articles_Tags: {
    createdAt: string
    updatedAt: string
    TagId: number
    ArticleId: string
  }
}

export interface ILanguage {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface IAuthor {
  id: string
  name: string
  slug: string
  givenName: string
  familyName: string
  email: string
  phone: string
  imageUrl: string
  imageWidth: string
  imageHeight: string
  socialMedia: ISocialMedia
  knowsLanguage: null
  disabled: boolean
  createdAt: string
  updatedAt: string
}

export interface IArticle {
  id: string
  title: string
  slug: string
  description: string
  excerpt: string
  body: string
  imageUrl: string
  imageWidth: number
  imageHeight: number
  imageCaption: string
  imageLanguage: string
  articleSection: string
  wordCount: number
  isPublished: boolean
  datePublished: string | null
  createdAt: string
  updatedAt: string
  Author: IAuthor
  Language: ILanguage
  Keywords: IKeyword[]
  Tags: ITag[]
}
