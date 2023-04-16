import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction
} from 'mobx';
import { RootStore } from './rootStore';
import { productServiceInstance } from '../services';
import { IProduct } from '../types';

export class CartStore {
  rootStore: RootStore;
  // TODO: add type of cart
  cart: any = [];
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      cart: observable,
      setCart: action,
      checkItemAvailability: action,
      removeFromCart: action,
      decreaseQuantity: action,
      totalPrice: computed,
      totalCount: computed
    });
    this.onInitialize();
    this.removeFromCart = this.removeFromCart.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    window.addEventListener('beforeunload', this.onBeforeLoad);
  }

  onBeforeLoad = (): void => {
    if (this.cart.length === 0) {
      return;
    }
    // TODO: save cart on user if user is logged in
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  };

  onInitialize = (): void => {
    const cartFromSessionStorage = sessionStorage.getItem('cart');
    if (cartFromSessionStorage === null) {
      return;
    }

    this.cart = JSON.parse(cartFromSessionStorage);
  };

  setCart = (cartItem: any): void => {
    if (this.cart.length === 0) {
      this.cart.push(cartItem);
    } else {
      this.cart = cartItem;
    }
  };

  checkItemAvailability = async (
    subCatId: string,
    prodId: string
  ): Promise<void> => {
    try {
      // get product by id
      const response = await productServiceInstance.getProductById(
        subCatId,
        prodId
      );
      if (response !== null && response.stockQuantity > 1) {
        const index = this.cart.findIndex(
          (cartItem: any) => cartItem.id === response.id
        );
        if (index === -1) {
          runInAction(() => {
            const modifiedResponse = {
              ...response,
              quantity: 1,
              prodTotalPrice: response.price,
              prodId
            };
            this.cart.push(modifiedResponse);
          });
        } else {
          runInAction(() => {
            this.cart[index].quantity++;
            this.cart[index].prodTotalPrice =
              this.cart[index].quantity * this.cart[index].price;
          });
        }
      } else {
        // TODO: add error message for not having in stock
        console.log('No more in stock');
      }
    } catch (error) {
      console.log(error);
      /* TODO: throw new Error(); */
    }
  };

  removeFromCart(id: string): void {
    const index = this.cart.findIndex((cartItem: any) => cartItem.id === id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  decreaseQuantity(id: string): void {
    const index = this.cart.findIndex((cartItem: any) => cartItem.id === id);

    if (index !== -1 && this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else {
      // if quantity is 1 -> item should be removed from state
      this.cart.splice(index, 1);
    }
  }

  get totalPrice(): number {
    return this.cart.reduce(
      (total: number, item: IProduct) => total + item.price * item.quantity!,
      0
    );
  }

  get totalCount(): number {
    return this.cart.reduce(
      /* eslint-disable */
      (total: number, item: IProduct) => total + item.quantity!,
      0
    );
  }
}
