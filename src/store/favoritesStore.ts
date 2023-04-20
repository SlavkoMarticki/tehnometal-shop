import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './rootStore';
import { transferObjectIntoArray } from '../utils';

export class FavoritesStore {
  rootStore: RootStore;
  favorites: any = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      favorites: observable,
      setFavorites: action,
      removeFromFavoritesById: action
    });
    this.onInitialize();
  }

  setFavorites = (favorites: any): void => {
    this.favorites.push(favorites);
  };

  removeFromFavoritesById = (id: string): void => {
    this.favorites = this.favorites.filter((item: any) => {
      console.log(item);
      return item[id]?.prodId !== id;
    });
  };

  onInitialize(): void {
    const user = localStorage.getItem('loginUser');
    if (user !== null) {
      const { uid } = JSON.parse(user);
      const fetchData = async (): Promise<any> => {
        const data =
          await this.rootStore.productStore.getFavoriteProductsByUser(uid);
        const myArray = Object.keys(data).map((key, index) => {
          return { [key]: data[key] };
        });
        runInAction(() => {
          this.favorites = myArray;
        });
      };
      fetchData();
    }
  }
}
