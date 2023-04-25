import { makeAutoObservable } from 'mobx';

export class LoadingStore {
  isLoading: boolean = false;
  debounceLoadingTimer: any;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean): void {
    clearTimeout(this.debounceLoadingTimer);

    this.debounceLoadingTimer = setTimeout(() => {
      this.isLoading = isLoading;
    }, 500);
  }
}
