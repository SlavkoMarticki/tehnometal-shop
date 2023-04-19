/* eslint-disable */
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction
} from 'mobx';
import { RootStore } from './rootStore';
import { productServiceInstance, registerServiceInstance } from '../services';
import { IProduct } from '../types';
import { ApiResponse, transferObjectIntoArray } from '../utils';

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
      addItem: action,
      totalCount: computed,
      savePurchaseOnUser: action,
      setCartData: action
    });
    this.onInitialize();
    this.removeFromCart = this.removeFromCart.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    window.addEventListener('beforeunload', this.onBeforeLoad);
  }

  setCartData = (data: any): void => {
    this.cart = data;
  };

  onBeforeLoad = async (): Promise<void> => {
    if (this.cart.length === 0) {
      return;
    }
    // check if user is logged in
    const user = localStorage.getItem('loginUser');
    if (user !== null) {
      const { uid } = JSON.parse(user);

      // if logged in, put data on user
      fetch(`${process.env.REACT_APP_BASE_DB_URL!}users/${uid}/cart.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.cart)
      }).catch((error) => {
        console.error('Error updating cart:', error);
      });
    }
  };

  onInitialize = (): void => {
    // Check if cart is empty to put data on specific user
    const cartFromSessionStorage = sessionStorage.getItem('cart');
    if (cartFromSessionStorage !== null) {
      this.setCartData(JSON.parse(cartFromSessionStorage));
    }
  };

  setCart = (cartItem: any): void => {
    this.cart = cartItem;
  };

  clearCart = (): void => {
    // check if cart is in session storage
    const cart = sessionStorage.getItem('cart');
    if (cart != null) {
      sessionStorage.removeItem('cart');
    }
    runInAction(() => {
      this.cart = [];
    });
  };

  addItem = (item: any, id?: string): void => {
    const existingItemIndex = this.cart.findIndex((i: any) => i.id === item.id);
    if (existingItemIndex === -1) {
      item.quantity = 1;
      item.prodTotalPrice = item.price;
      item.prodId = id;
      this.cart.push(item);
    } else {
      this.cart[existingItemIndex].quantity += 1;
      this.cart[existingItemIndex].prodTotalPrice =
        this.cart[existingItemIndex].quantity *
        this.cart[existingItemIndex].price;
    }
    this.saveCart();
  };

  private saveCart() {
    const updatedItems: any = {};
    this.cart.forEach((item: any): any => {
      updatedItems[item.id] = { ...item, quantity: item.quantity };
    });
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

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
        this.addItem(response, prodId);
      } else {
        // TODO: add error message for not having in stock
        console.log('No more in stock');
      }
    } catch (error) {
      console.log(error);
      /* TODO: throw new Error(); */
    }
  };

  async removeFromCart(id: string): Promise<void> {
    const itemIndex = this.cart.findIndex((item: any) => item.id === id);
    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
    }
    const user = localStorage.getItem('loginUser');
    if (user !== null) {
      const { uid } = JSON.parse(user);
      id = uid;
    }
    this.saveCart();
    fetch(
      `${process.env.REACT_APP_BASE_DB_URL!}users/${id}/cart/${itemIndex}.json`,
      {
        method: 'DELETE'
      }
    );
  }

  decreaseQuantity(id: string): void {
    const index = this.cart.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      const currentItem = this.cart[index];
      if (currentItem.quantity === 1) {
        this.cart.splice(index, 1);
        // remove from db if user exists
        if (this.rootStore.userStore.user !== null) {
        }
        fetch(
          `${process.env.REACT_APP_BASE_DB_URL!}users/${
            this.rootStore.userStore.user.uid
          }/cart/${index}.json`,
          {
            method: 'DELETE'
          }
        );
      } else {
        currentItem.quantity -= 1;
      }
      this.saveCart();
    }
  }

  savePurchaseOnUser = async (
    data: any,
    transactionId: string,
    additionalData?: any
  ): Promise<any> => {
    const userFromLS = localStorage.getItem('loginUser');
    if (userFromLS === null) {
      return;
    }
    const { uid } = JSON.parse(userFromLS);
    try {
      /* eslint-disable-next-line */
      const response = await registerServiceInstance.saveSuccessfulPurchaseInDb(
        data,
        uid,
        transactionId,
        additionalData
      );
      const responseData = transferObjectIntoArray(response);
      return responseData;
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  findIfOrderAlreadyExists = async (transactionId: string): Promise<any> => {
    const userFromLS = localStorage.getItem('loginUser');
    if (userFromLS === null) {
      return;
    }

    const { uid } = JSON.parse(userFromLS);

    try {
      /* eslint-disable-next-line */
      const response = await registerServiceInstance.findIfOrderAlreadyExists(
        uid,
        transactionId
      );
      if (response != null) {
        return new ApiResponse(response.data);
      } else {
        return { success: false };
      }
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

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
