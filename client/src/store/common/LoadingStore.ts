import { makeAutoObservable } from 'mobx';

export class LoadingStore {
  isLoading: boolean = false;
  debounceLoadingTimer: any;
  loadingTimer: any;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean): void {
    clearTimeout(this.debounceLoadingTimer);
    clearTimeout(this.loadingTimer);
    this.debounceLoadingTimer = setTimeout(() => {
      this.isLoading = isLoading;
    }, 500);

    if (this.isLoading) {
      this.loadingTimer = setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    }
  }
}
