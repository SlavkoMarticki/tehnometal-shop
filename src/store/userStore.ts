import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './rootStore';
import {
  productServiceInstance,
  registerServiceInstance,
  signInServiceInstance
} from '../services';
import { ApiResponse, formatPriceNum, transferObjectIntoArray } from '../utils';

export class UserStore {
  user: any = null;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      setUser: action,
      user: observable,
      getUserById: action,
      login: action,
      doSignOut: action
    });

    // on initialize
    this.getUserById();
  }

  setUser = (user: any): void => {
    this.user = user;
  };

  getUserById = async (id?: string): Promise<any> => {
    if (typeof id !== 'string') {
      const userFromLS = localStorage.getItem('loginUser');
      if (userFromLS === null) {
        this.setUser(null);
        return;
      }
      const { uid } = JSON.parse(userFromLS);
      const user = await registerServiceInstance.getUser(uid);
      if (user.orders != null) {
        user.orders = transferObjectIntoArray(user.orders);
        const totalPrice = user.orders.reduce(
          /* eslint-disable-next-line */
          (acc: number, bill: any) => acc + bill.data.amount,
          0
        );
        user.averageBillPrice = formatPriceNum(totalPrice / user.orders.length);

        user.moneySpent = formatPriceNum(totalPrice);
      }
      this.setUser(user);
      return new ApiResponse(user);
    } else {
      const user = await registerServiceInstance.getUser(id);
      this.setUser(user);
      return new ApiResponse(user);
    }
  };

  doSignOut = async (): Promise<void> => {
    // first save all changes to user object in db

    const { uid } = this.user;
    await fetch(`${process.env.REACT_APP_BASE_DB_URL!}users/${uid}/cart.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.rootStore.cartStore.cart)
    });

    // then sign out user
    await signInServiceInstance.signOut();
    this.setUser(null);
    this.rootStore.favoritesStore.setFavorites([]);
    this.rootStore.cartStore.clearCart();
  };

  // TODO: add types
  login = async (data: any): Promise<any> => {
    const response = await signInServiceInstance.login(data);
    /* eslint-disable-next-line */
    const user = await this.getUserById(response.user.uid);
    console.log(user);
    if (this.rootStore.cartStore.cart.length === 0 && user.data.cart != null) {
      this.rootStore.cartStore.setCart(user.data.cart);
      sessionStorage.setItem('cart', JSON.stringify(user.data.cart));
    } else {
      // update cart if user assings again
      await fetch(
        `${process.env.REACT_APP_BASE_DB_URL!}users/${user.data.uid}/cart.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.rootStore.cartStore.cart)
        }
      );
    }

    if (user.data.favorites != null) {
      this.rootStore.favoritesStore.setFavorites(
        transferObjectIntoArray(user.data.favorites)
      );
    }

    localStorage.setItem('loginUser', JSON.stringify(user.data));
    this.setUser(user);
    return new ApiResponse(response);
  };

  // TODO: add types
  register = async (data: any): Promise<any> => {
    try {
      const response = await registerServiceInstance.registerUser(data);
      if (this.rootStore.cartStore.cart.length !== 0) {
        await fetch(
          `${process.env.REACT_APP_BASE_DB_URL!}users/${
            response.data.uid
          }/cart.json`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.rootStore.cartStore.cart)
          }
        );
      }
      return new ApiResponse(response);
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  /* TODO: add types  */
  getOrderById = async (uid: string, id: string): Promise<any> => {
    try {
      const response = await registerServiceInstance.getOrderById(uid, id);
      return response;
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  // TODO: add types
  getCartByUser = async (): Promise<void> => {
    try {
      const user = localStorage.getItem('loginUser');
      if (user != null) {
        const { uid } = JSON.parse(user);
        const response = await productServiceInstance.getCartByUser(uid);
        const data = await response;
        return data;
      }
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  // TODO: add type
  updateUserFavoriteList = async (
    uid: string,
    subCatId: string,
    prodId: string,
    favoriteState: boolean
  ): Promise<void> => {
    try {
      // favorite state is true, save keys in db
      if (favoriteState) {
        const response = await fetch(
          `${process.env
            .REACT_APP_BASE_DB_URL!}users/${uid}/favorites/${prodId}.json`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ subCatId, prodId })
          }
        );
        const data = await response.json();
        this.rootStore.favoritesStore.setFavorites({ [prodId]: { ...data } });
        this.rootStore.notificationStore.showSuccessPopup(
          'Item added to favorites!'
        );
        // favorite state is false so data should be removed
      } else {
        await fetch(
          `${process.env
            .REACT_APP_BASE_DB_URL!}users/${uid}/favorites/${prodId}.json`,
          {
            method: 'DELETE'
          }
        );
        this.rootStore.favoritesStore.removeFromFavoritesById(prodId);
        this.rootStore.notificationStore.showInfoPopup(
          'Item removed from favorites'
        );
      }
    } catch (error) {
      // TODO: add error handling
      console.error('Error updating favorites:', error);
    }
  };
}
