import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './rootStore';
import { registerServiceInstance, signInServiceInstance } from '../services';
import { ApiResponse } from '../utils';

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
      this.setUser(user);
    } else {
      const user = await registerServiceInstance.getUser(id);
      this.setUser(user);
      return user;
    }
  };

  doSignOut = async (): Promise<void> => {
    // first save all changes to user object in db
    const { uid } = this.rootStore.userStore.user;
    await fetch(`${process.env.REACT_APP_BASE_DB_URL!}users/${uid}/cart.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.rootStore.cartStore.cart)
    });

    // then sign out user
    signInServiceInstance.signOut();
    this.setUser(null);
    this.rootStore.cartStore.clearCart();
  };

  // TODO: add types
  login = async (data: any): Promise<any> => {
    const response = await signInServiceInstance.login(data);
    /* eslint-disable-next-line */
    const user = await this.getUserById(response.user.uid);

    if (this.rootStore.cartStore.cart.length === 0 && user.cart != null) {
      this.rootStore.cartStore.setCart(user.cart);
      sessionStorage.setItem('cart', JSON.stringify(user.cart));
    } else {
      // update cart if user assings again
      await fetch(
        `${process.env.REACT_APP_BASE_DB_URL!}users/${user.uid}/cart.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.rootStore.cartStore.cart)
        }
      );
    }

    localStorage.setItem('loginUser', JSON.stringify(user));
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
}
