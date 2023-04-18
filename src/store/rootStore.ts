import { CartStore } from './cartStore';
import { CategoriesStore } from './categoriesStore';
import { LoadingStore } from './common/LoadingStore';
import { NotificationStore } from './common/NotificationStore';
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

  constructor() {
    this.loadingStore = new LoadingStore();
    this.notificationStore = new NotificationStore();
    this.userStore = new UserStore(this);
    this.cartStore = new CartStore(this);
    this.categoriesStore = new CategoriesStore(this);
    this.productStore = new ProductStore(this);
    this.favoritesStore = new FavoritesStore(this);
  }
}
