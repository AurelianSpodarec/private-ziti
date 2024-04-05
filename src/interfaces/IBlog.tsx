export interface IArticle {
  id: string;
  name: string;
  slug: string;
  givenName: string;
  familyName: string;
  email: string;
  phone: string;
  imageUrl: string;
  imageWidth: string;
  imageHeight: string;
  socialMedia: {
    instagram: string;
  };
  knowsLanguage: null | string;
  disabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthor {
  id: string;
  name: string;
  slug: string;
  givenName: string;
  familyName: string;
  email: string;
  phone: string;
  imageUrl: string;
  imageWidth: string;
  imageHeight: string;
  socialMedia: {
    instagram: string;
  };
  knowsLanguage: null;
  disabled: boolean;
  createdAt: string;
  updatedAt: string;
}
