import { useCallback, useMemo, useState } from 'react';
import { LoaderContext } from '.';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';
import { useNotification } from '../../hooks';

interface IContainerProps {
  children: React.ReactNode;
}

const LoaderProvider = (props: IContainerProps): React.ReactElement => {
  const { loadingStore } = useStore();
  const [isLoadingLocal, setIsLoadingLocal] = useState(loadingStore.isLoading);
  let debounceLoadingTimer: any;
  let loadingTimer: any;

  const { showErrorPopup } = useNotification();

  // Debounce for fast fetching requests
  const setIsLoading = useCallback((isLoading: boolean) => {
    clearTimeout(debounceLoadingTimer);
    clearTimeout(loadingTimer);
    /* eslint-disable-next-line */
    debounceLoadingTimer = setTimeout(() => {
      setIsLoadingLocal(isLoading);
    }, 400);

    /* eslint-disable-next-line */
    loadingTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoadingLocal(false);
        showErrorPopup('Something went wrong...');
      }
    }, 5000);
  }, []);

  const contextValue = useMemo(() => {
    return {
      isLoading: !isLoadingLocal ? loadingStore.isLoading : isLoadingLocal,
      setIsLoading
    };

    /* eslint-disable-next-line */
  }, [isLoadingLocal, setIsLoading, loadingStore.isLoading]);

  return (
    <LoaderContext.Provider value={contextValue}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default observer(LoaderProvider);
