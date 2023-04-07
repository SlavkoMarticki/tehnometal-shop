import { RootStore } from "./rootStore";

export class ProductStore {
  product: any
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.product = [];
  }
}

