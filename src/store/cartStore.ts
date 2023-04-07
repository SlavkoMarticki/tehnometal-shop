import { RootStore } from "./rootStore";

export class CartStore {

  // add type of cart
  cart: any;
  constructor(rootStore: RootStore) {
    this.cart = []
  }

}