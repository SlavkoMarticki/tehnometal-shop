import { RootStore } from './rootStore';
import { productServiceInstance } from '../services';
import { transferObjectIntoArray } from '../utils';
import { makeAutoObservable } from 'mobx';
import { IProduct, IProductData } from '../types';

export class ProductStore {
  products: any = [];
  rootStore: RootStore;
  product: IProduct[] = [];
  activeProdId: string = '';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    this.setProducts = this.setProducts.bind(this);
  }

  setProducts(products: IProductData[]): void {
    this.products = products;
  }

  setProduct = (product: IProduct[]): void => {
    this.product = product;
  };

  setActiveProdId = (id: string): void => {
    this.activeProdId = id;
  };

  getAllProducts = async (subCatId: string): Promise<void> => {
    try {
      // this.rootStore.loadingStore.setIsLoading(true);
      const productData =
        await productServiceInstance.getAllProductsBySubCategory(subCatId);
      const data = transferObjectIntoArray(productData);
      this.setProducts(data);
      // this.rootStore.loadingStore.setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  getProductById = async (subCatId: string, catId: string): Promise<void> => {
    try {
      const productData = await productServiceInstance.getProductById(
        catId,
        subCatId
      );
      const data = new Array(productData);
      console.log(data);
      this.setProduct(data);
    } catch (error) {
      throw new Error();
    }
  };
}
