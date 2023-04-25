import { CartStore } from './cartStore';
import { CategoriesStore } from './categoriesStore';
import { LoadingStore } from './common/LoadingStore';
import { NotificationStore } from './common/NotificationStore';
import { PaginationStore } from './common/PaginationStore';
import { SearchStore } from './common/SearchStore';
import { FavoritesStore } from './favoritesStore';
import { ProductStore } from './productsStore';
import { UserStore } from './userStore';

export class RootStore {
  productStore: ProductStore;
  cartStore: CartStore;
  categoriesStore: CategoriesStore;
  favoritesStore: FavoritesStore;
  userStore: UserStore;
  loadingStore: LoadingStore;
  notificationStore: NotificationStore;
  searchStore: SearchStore;
  paginationStore: PaginationStore;

  constructor() {
    this.loadingStore = new LoadingStore();
    this.userStore = new UserStore(this);
    this.notificationStore = new NotificationStore();
    this.categoriesStore = new CategoriesStore(this);
    this.productStore = new ProductStore(this);
    this.cartStore = new CartStore(this);
    this.paginationStore = new PaginationStore(this);
    this.searchStore = new SearchStore(this);
    this.favoritesStore = new FavoritesStore(this);
  }
}
