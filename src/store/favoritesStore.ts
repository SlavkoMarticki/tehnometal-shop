import { RootStore } from "./rootStore";

export class FavoritesStore {
  rootStore: RootStore;
  favorites: any;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.favorites = ""
  }
}