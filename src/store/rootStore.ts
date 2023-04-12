import { CartStore } from "./cartStore";
import { CategoriesStore } from "./categoriesStore";
import { LoadingStore } from "./common/LoadingStore";
import { FavoritesStore } from "./favoritesStore";
import { ProductStore } from "./productsStore";
import { UserStore } from "./userStore";


export class RootStore {
  productStore: ProductStore;
  cartStore: CartStore;
  categoriesStore: CategoriesStore;
  favoritesStore: FavoritesStore;
  userStore: UserStore;
  loadingStore: LoadingStore;

  constructor() {
    this.loadingStore = new LoadingStore();
    this.productStore = new ProductStore(this);
    this.cartStore = new CartStore(this);
    this.categoriesStore = new CategoriesStore(this);
    this.favoritesStore = new FavoritesStore(this);
    this.userStore = new UserStore(this);
  }
}
