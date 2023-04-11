import { RootStore } from './rootStore';
import { makeAutoObservable } from 'mobx';
import { categoriesServiceInstance } from '../services';
import { transferObjectIntoArray } from '../utils';
import { ISubCategory, ICategory } from '../types';

export class CategoriesStore {
  categories: ICategory[];
  subCategories: ISubCategory[];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.categories = [];
    this.subCategories = [];
    makeAutoObservable(this);
    this.getCategories();
  }

  setCategories(categories: ICategory[]): void {
    this.categories = categories;
  }

  setSubCategories(subCategories: ISubCategory[]): void {
    this.subCategories = subCategories;
  }

  async getCategories(): Promise<void> {
    try {
      const categoriesData = await categoriesServiceInstance.getAllCategories();
      const data = transferObjectIntoArray(categoriesData);
      this.setCategories(data);
    } catch (error) {
      throw new Error();
    }
  }

  async getSubCategories(id: string): Promise<void> {
    try {
      const subCategoriesData =
        await categoriesServiceInstance.getAllSubCategories(id);
      const data = transferObjectIntoArray(subCategoriesData);
      this.setSubCategories(data);
    } catch (error) {
      throw new Error();
    }
  }
}
