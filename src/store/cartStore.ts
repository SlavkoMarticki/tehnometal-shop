import { RootStore } from "./rootStore";

export class CartStore {
  rootStore: RootStore;
  // add type of cart
  cart: any;
  constructor(rootStore: RootStore) {
    this.cart = []
    this.rootStore = rootStore;
  }

}