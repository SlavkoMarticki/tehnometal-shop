import { makeObservable, observable, action } from 'mobx';
import { searchIndex } from '../../common';
import { RootStore } from '../rootStore';

export class SearchStore {
  searchQuery: string = '';
  searchResults: any = [];
  rootStore: RootStore;
  activeProd: any = null;
  isEmpty: boolean = false;
  page: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;
  paginatedList: any[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      searchQuery: observable,
      searchResults: observable,
      activeProd: observable,
      isEmpty: observable,
      page: observable,
      pageSize: observable,
      totalCount: observable,
      paginatedList: observable,
      setIsEmpty: action,
      setPaginatedList: action,
      setPage: action,
      setSearchQuery: action,
      setSearchResultsData: action,
      setActiveProd: action,
      unmountSearchQuery: action
    });
    this.onInitialize();
  }

  setPaginatedList = (value: any): void => {
    this.paginatedList = value;
  };

  setIsEmpty = (value: boolean): void => {
    this.isEmpty = value;
  };

  setPage = (page: number): void => {
    const startIndex = (page - 1) * 10;
    let endIndex = startIndex + 10;
    if (endIndex > this.searchResults.length) {
      endIndex = this.searchResults.length;
    }
    this.page = page;
    const paginatedList = this.searchResults.slice(startIndex, endIndex);
    this.setPaginatedList(paginatedList);
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
      this.setPage(1);
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
