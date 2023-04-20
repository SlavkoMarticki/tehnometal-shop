/* eslint-disable */
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

      // #region testing
      console.log(data);

      if (this.rootStore.favoritesStore.favorites != null) {
        data.forEach((item: any, index: number) => {
          this.rootStore.favoritesStore.favorites.forEach(
            (f: any, i: number) => {
              if (f[item.id]?.prodId === item.id) {
                data[index].data.isFavorite = true;
              }
            }
          );
        });
        console.log(data);
      }
      // #endregion

      this.setProducts(data);
      // this.rootStore.loadingStore.setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  /* TODO: add types */
  toggleFavoriteState = async (
    subCatId: string,
    prodId: string,
    favoriteState: boolean
  ): Promise<any> => {
    try {
      /*       await productServiceInstance.updateFavoriteStatus(
        subCatId,
        prodId,
        favoriteState
      );
 */
      // modify product state with new favorite
      const modifiedProducts = this.products.map((prod: any) => {
        if (prod.id === prodId) {
          return {
            id: prod.id,
            data: { ...prod.data, isFavorite: favoriteState }
          };
        } else {
          return prod;
        }
      });

      await this.rootStore.userStore.updateUserFavoriteList(
        this.rootStore.userStore.user.uid,
        subCatId,
        prodId,
        favoriteState
      );
      this.setProducts(modifiedProducts);
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  getProductById = async (subCatId: string, catId: string): Promise<void> => {
    try {
      const productData = await productServiceInstance.getProductById(
        catId,
        subCatId
      );
      const data = new Array(productData);
      this.setProduct(data);
    } catch (error) {
      throw new Error();
    }
  };

  // TODO: add data to user
  getFavoriteProductsByIds = async (ids: any): Promise<any> => {
    try {
      const response = await productServiceInstance.getFavoriteProductsByIds(
        ids
      );

      return response;
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    }
  };

  getFavoriteProductsByUser = async (uid: any): Promise<any> => {
    try {
      const response = await productServiceInstance.getFavoriteProductsByUser(
        uid
      );
      return response;
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    }
  };
}
