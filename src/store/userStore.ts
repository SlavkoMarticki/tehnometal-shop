import { RootStore } from "./rootStore";

export class UserStore {
  user: any;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.user = "";
  }
}