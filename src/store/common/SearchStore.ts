import { makeObservable, observable, action } from 'mobx';
import { searchIndex } from '../../common';
import { RootStore } from '../rootStore';

export class SearchStore {
  searchQuery: string = '';
  searchResults: any = [];
  rootStore: RootStore;
  activeProd: any = null;
  isEmpty: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      searchQuery: observable,
      searchResults: observable,
      activeProd: observable,
      isEmpty: observable,
      setIsEmpty: action,
      setSearchQuery: action,
      setSearchResultsData: action,
      setActiveProd: action,
      unmountSearchQuery: action
    });
    this.onInitialize();
  }

  setIsEmpty = (value: boolean): void => {
    this.isEmpty = value;
  };

  onInitialize = (): void => {
    const urlParams = window.location.pathname;
    if (urlParams.includes('search')) {
      const lastIndexOfSearch = urlParams.lastIndexOf('/') + 1;
      const searchParam = urlParams.slice(lastIndexOfSearch, urlParams.length);

      const newStr = searchParam.replace(/%20/g, ' ');
      this.setSearchQuery(newStr);
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

  getDataBySearchQuery = async (): Promise<any> => {
    try {
      const response: any = await searchIndex.search(this.searchQuery, {
        hitsPerPage: 1000
      });
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
      return response.hits;
    } catch (error) {
      console.log(error);
    }
  };

  unmountSearchQuery = (): void => {
    this.searchQuery = '';
    this.searchResults = null;
  };
}
