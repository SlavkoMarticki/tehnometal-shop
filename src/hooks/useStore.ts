import { useContext } from "react"
import { RootStoreContext } from "../context"
import { RootStore } from "../store";

export default function useAuthUser(): RootStore | null {
  const rootStore = useContext(RootStoreContext);
  if (rootStore == null) return null;

  const {
    cartStore,
    categoriesStore,
    productStore,
    userStore,
    favoritesStore
  } = rootStore;

  return {
    cartStore,
    categoriesStore,
    productStore,
    userStore,
    favoritesStore
  };

}