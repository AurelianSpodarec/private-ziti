export interface IProperty {
  id: string;
  title: string;
  description: string;
  address: string;
  propertyTypeId: number;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  backyard: boolean;
  pool: boolean;
  jacuzzi: boolean;
  balcony: boolean;
  terrace: boolean;
  elevator: boolean;
  airConditioning: boolean;
  availabilityDate: string;
  constructionYear: string;
  price: number;
  published: boolean;
  disabled: boolean;
  sectorId: number;
  listingOwnerId: string;
  createdAt: string;
  updatedAt: string;
  currencyId: string | null;
  propertyStatusId: number;
  Currency: any;
  PropertyStatus: IPropertyStatus;
  PropertyType: IPropertyType;
  Sector: ISector;
  images: string[];
}

export interface IPropertyStatus {
  id: number;
  statusName: "available" | "new" | "pre-construction";
  deliveryDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IPropertyType {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISector {
  id: number;
  name: string;
  Municipality: IMunicipality;
}

export interface IMunicipality {
  id: number;
  name: string;
  Province: IProvince;
}

export interface IProvince {
  id: number;
  name: string;
  Country: ICountry;
}

export interface ICountry {
  id: number;
  name: string;
}
