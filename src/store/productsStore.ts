import { RootStore } from './rootStore';
import { productServiceInstance } from '../services';
import { transferObjectIntoArray } from '../utils';
import { makeAutoObservable } from 'mobx';
import { IProductData } from '../types';

export class ProductStore {
  products: any;
  rootStore: RootStore;
  product: IProductData[];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.products = [];
    this.product = [];
    makeAutoObservable(this);
    this.setProducts = this.setProducts.bind(this);
  }

  setProducts(products: IProductData[]): void {
    this.products = products;
  }

  setProduct(product: IProductData[]): void {
    this.product = product;
  }

  async getProducts(): Promise<void> {
    try {
      this.rootStore.loadingStore.setIsLoading(true);
      const productData = await productServiceInstance.getAllProducts();
      const data = transferObjectIntoArray(productData);
      this.setProducts(data);
      this.rootStore.loadingStore.setIsLoading(false);
    } catch (error) {
      throw new Error();
    }
  }

  async getProductById(id: string): Promise<void> {
    try {
      const productData = await productServiceInstance.getProductById(id);
      const data = transferObjectIntoArray(productData);
      this.setProduct(data);
    } catch (error) {
      throw new Error();
    }
  }
}
