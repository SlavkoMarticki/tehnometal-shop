import { ICategoriesData } from './ICategories';

export interface IProduct {
  id: string;
  productName: string;
  category: string;
  categoryId: string;
  subCategory: string;
  subCategoryId: string;
  price: number;
  currency: string;
  availability: string;
  shippment: string;
  isOnSale: boolean;
  actionProcent: string;
  brand: string;
  images: string[];
  description: string;
  isFavorite: boolean;
}
export interface IProductData {
  id: string;
  data: ICategoriesData;
}
