import { makeObservable, observable, action } from 'mobx';
import { searchIndex } from '../../common';
import { RootStore } from '../rootStore';

export class SearchStore {
  searchQuery: string = '';
  searchResults: any = [];
  rootStore: RootStore;
  activeProd: any = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      searchQuery: observable,
      searchResults: observable,
      activeProd: observable,
      setSearchQuery: action,
      setSearchResultsData: action,
      setActiveProd: action,
      unmountSearchQuery: action
    });
    this.onInitialize();
  }

  onInitialize = (): void => {
    const urlParams = window.location.pathname;
    if (urlParams.includes('search')) {
      const lastIndexOfSearch = urlParams.lastIndexOf('/') + 1;
      const searchParam = urlParams.slice(lastIndexOfSearch, urlParams.length);
      this.setSearchQuery(searchParam);
    }
  };

  setActiveProd = (prod: any): void => {
    this.activeProd = prod;
  };

  setSearchQuery = (searchQuery: string): void => {
    this.searchQuery = searchQuery;
  };

  setSearchResultsData = (data: any): void => {
    this.searchResults = data;
  };

  getDataBySearchQuery = async (): Promise<void> => {
    try {
      const response: any = await searchIndex.search(this.searchQuery);
      response.hits.map((item: any, index: number) => {
        this.rootStore.favoritesStore.favorites.forEach(
          (i: any, inx: number) => {
            if (item.prodId === i[item.prodId]?.prodId) {
              response.hits[index].isFavorite = true;
            }
          }
        );
      });
      this.setSearchResultsData(response.hits);
    } catch (error) {
      console.log(error);
    }
  };

  unmountSearchQuery = (): void => {
    this.searchQuery = '';
    this.searchResults = null;
  };
}
