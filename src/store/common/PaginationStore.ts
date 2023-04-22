import { makeAutoObservable } from 'mobx';
import { RootStore } from '../rootStore';

interface IPaginationParams {
  page: number;
  startsAt: string;
  endsAt: string;
}

export class PaginationStore {
  rootStore: RootStore;
  page = 1;
  pageSize = 10;
  totalCount = 0;
  totalPages = 1;
  paginateKeysList = [];
  paginationParams: IPaginationParams | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setPaginationParams = (params: any): void => {
    this.paginationParams = params;
  };

  setPage = (page: number): void => {
    this.page = page;
    const startIndex = (page - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    if (endIndex > this.paginateKeysList.length) {
      endIndex = this.paginateKeysList.length;
    }
    const paginatedList = this.paginateKeysList.slice(startIndex, endIndex);
    const paginateParams = {
      page: this.page,
      startsAt: paginatedList[0],
      endsAt: this.paginateKeysList[endIndex - 1]
    };
    this.setPaginationParams(paginateParams);
  };

  setTotalCount = (totalCount: number): void => {
    this.totalCount = totalCount;
  };

  unmountPaginationOnUnload = (): void => {
    this.setPaginateKeysList([]);
    this.setPage(1);
    this.setTotalCount(0);
  };

  setPaginateKeysList = (paginateListOfKeys: any): void => {
    this.setTotalCount(paginateListOfKeys.length);
    this.paginateKeysList = paginateListOfKeys;
    this.setPage(1);
    this.totalPages = Math.ceil(paginateListOfKeys.length / this.pageSize);
  };
}
