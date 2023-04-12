import { useContext } from 'react';
import { RootStoreContext } from '../context';
import { RootStore } from '../store';

export default function useStore(): RootStore {
  const rootStore = useContext(RootStoreContext);

  const {
    cartStore,
    categoriesStore,
    productStore,
    userStore,
    favoritesStore,
    loadingStore
  } = rootStore;

  return {
    cartStore,
    categoriesStore,
    productStore,
    userStore,
    favoritesStore,
    loadingStore
  };
}
