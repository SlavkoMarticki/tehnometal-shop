import { RootStore } from "./rootStore";

export class CategoriesStore {
  categories: any;
  subCategories: any;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.categories = [];
    this.subCategories = [];
  }
}