import { makeAutoObservable } from "mobx";


export class LoadingStore {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }
}