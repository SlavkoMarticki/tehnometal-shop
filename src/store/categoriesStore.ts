import { RootStore } from './rootStore';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { categoriesServiceInstance } from '../services';
import { transferObjectIntoArray } from '../utils';
import { ISubCategory, ICategory } from '../types';

export class CategoriesStore {
  categories: ICategory[] = [];
  subCategories: ISubCategory[] = [];
  rootStore: RootStore;
  activeCategory: ICategory[] = [];
  activeSubCategory: ICategory[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      categories: observable,
      subCategories: observable,
      activeCategory: observable,
      activeSubCategory: observable,
      setCategories: action,
      setSubCategories: action,
      getCategories: action,
      getSubCategories: action
    });
    this.getCategories();
    this.onInitialize();
    this.setSubCategories = this.setSubCategories.bind(this);
    this.setCategories = this.setCategories.bind(this);
  }

  onInitialize = (): void => {
    const { pathname } = window.location;
    if (pathname.includes('categories')) {
      const currentId = pathname.slice(
        pathname.lastIndexOf('/') + 1,
        pathname.length
      );
      runInAction(() => {
        const activeCategory = this.categories.filter((cat) => {
          // set active category
          return cat.id === currentId;
        });
        this.setActiveCategory(activeCategory);
      });
    }
  };

  setCategories(categories: ICategory[]): void {
    this.categories = categories;
  }

  setSubCategories(subCategories: ICategory[]): void {
    this.subCategories = subCategories;
  }

  setActiveCategory = (activeCategory: ICategory[] | []): void => {
    this.activeCategory = activeCategory;
  };

  getCategories = async (): Promise<void> => {
    try {
      this.rootStore.loadingStore.setIsLoading(true);
      const categoriesData = await categoriesServiceInstance.getAllCategories();
      const data = transferObjectIntoArray(categoriesData);
      this.setCategories(data);
      this.rootStore.loadingStore.setIsLoading(false);
    } catch (error) {
      throw new Error();
    }
  };

  getSubCategories = async (id: string): Promise<void> => {
    try {
      const subCategoriesData =
        await categoriesServiceInstance.getAllSubCategories(id);
      const data = transferObjectIntoArray(subCategoriesData);
      this.setSubCategories(data);

      runInAction(() => {
        const activeCategory = this.categories.filter((cat) => {
          // set active category
          return cat.id === id;
        });
        this.setActiveCategory(activeCategory);
      });
    } catch (error: any) {
      console.log(error.message);
      throw new Error();
    }
  };
}
