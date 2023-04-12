import { useCallback, useMemo, useState } from 'react';
import { LoaderContext } from '.';

interface IContainerProps {
  children: React.ReactNode;
}

export const LoaderProvider = (props: IContainerProps): React.ReactElement => {
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);

  const setIsLoading = useCallback((isLoading: boolean) => {
    setIsLoadingLocal(isLoading);
  }, []);

  const contextValue = useMemo(() => {
    return { isLoading: isLoadingLocal, setIsLoading };
  }, [isLoadingLocal, setIsLoading]);

  return (
    <LoaderContext.Provider value={contextValue}>
      {props.children}
    </LoaderContext.Provider>
  );
};
