import { useCallback, useMemo, useState } from 'react';
import { LoaderContext } from '.';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';

interface IContainerProps {
  children: React.ReactNode;
}

const LoaderProvider = (props: IContainerProps): React.ReactElement => {
  const { loadingStore } = useStore();
  const [isLoadingLocal, setIsLoadingLocal] = useState(loadingStore.isLoading);
  let debounceLoadingTimer: any;

  // Debounce for fast fetching requests
  const setIsLoading = useCallback((isLoading: boolean) => {
    clearTimeout(debounceLoadingTimer);

    /* eslint-disable-next-line */
    debounceLoadingTimer = setTimeout(() => {
      setIsLoadingLocal(isLoading);
    }, 300);
  }, []);

  const contextValue = useMemo(() => {
    return { isLoading: loadingStore.isLoading, setIsLoading };

    /* eslint-disable-next-line */
  }, [isLoadingLocal, setIsLoading, loadingStore.isLoading]);

  return (
    <LoaderContext.Provider value={contextValue}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default observer(LoaderProvider);
