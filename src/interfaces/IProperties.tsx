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
  PropertyStatus: {
      id: number;
      statusName: string;
      deliveryDate: string | null;
      createdAt: string;
      updatedAt: string;
  };
  PropertyType: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
  };
  Sector: {
      id: number;
      name: string;
      Municipality: {
          id: number;
          name: string;
          Province: {
              id: number;
              name: string;
              Country: {
                  id: number;
                  name: string;
              };
          };
      };
  };
  images: string[];
}
