/* eslint-disable */
import { RootStore } from './rootStore';
import { productServiceInstance } from '../services';
import { transferObjectIntoArray } from '../utils';
import { makeAutoObservable, runInAction } from 'mobx';
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

  // TODO: add type for params
  getAllProducts = async (subCatId: string): Promise<any> => {
    let params;
    if (this.rootStore.paginationStore.paginationParams?.startsAt != null) {
      params = {
        orderBy: '"$key"',
        limitToFirst: 10,
        startAt: `"${this.rootStore.paginationStore.paginationParams.startsAt}"`,
        endAt: `"${this.rootStore.paginationStore.paginationParams.endsAt}"`
      };
    } else {
      params = {
        orderBy: '"$key"',
        limitToFirst: 10
      };
    }
    try {
      const productData =
        await productServiceInstance.getAllProductsBySubCategory(
          subCatId,
          params
        );

      const data = transferObjectIntoArray(productData);
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
      }

      this.setProducts(data);
    } catch (error) {
      this.rootStore.loadingStore.setIsLoading(false);
      console.log(error);
      throw new Error();
    }
  };

  getAllShallowProducts = async (subCatId: string): Promise<void> => {
    try {
      const shallowProductsData =
        await productServiceInstance.getShallowAllProductsBySubCategory(
          subCatId
        );

      this.rootStore.paginationStore.setPaginateKeysList(
        Object.keys(shallowProductsData).sort()
      );
    } catch (error) {
      console.log(error);
    }
  };

  /* TODO: add types */
  toggleFavoriteState = async (
    subCatId: string,
    prodId: string,
    favoriteState: boolean
  ): Promise<any> => {
    try {
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

      if (this.rootStore.searchStore.paginatedList != null) {
        const data: any = this.rootStore.searchStore.paginatedList.map(
          (item: any, index: number) => {
            if (item.prodId === prodId) {
              return {
                ...item,
                isFavorite: favoriteState
              };
            } else {
              return item;
            }
          }
        );
        this.rootStore.searchStore.setPaginatedList(data);
      }

      await this.rootStore.userStore.updateUserFavoriteList(
        this.rootStore.userStore.user.uid,
        subCatId,
        prodId,
        favoriteState
      );
      if (this.product.length !== 0) {
        runInAction(() => {
          this.product[0].isFavorite = favoriteState;
          this.setProduct(this.product);
        });
      }
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
      if (this.rootStore.favoritesStore.favorites != null) {
        data.forEach((item: any, index: number) => {
          this.rootStore.favoritesStore.favorites.forEach(
            (f: any, i: number) => {
              console.log(item);
              if (f[subCatId!]?.prodId === subCatId) {
                item.isFavorite = true;
              }
            }
          );
        });
      }
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
