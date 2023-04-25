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
  rating: number;
  inStock: boolean;
  stockQuantity: number;
  quantity?: number;
  totalCount?: number;
}
export interface IProductData {
  id: string;
  data: ICategoriesData;
}
