import React, { useContext } from 'react';
import { RootStoreContext } from './RootStoreCtx';

interface IRootStoreProps {
  children: React.ReactNode;
}

export const RootStoreCtxProvider = (
  props: IRootStoreProps
): React.ReactElement => {
  const rootStore = useContext(RootStoreContext);
  return (
    <RootStoreContext.Provider value={rootStore}>
      {props.children}
    </RootStoreContext.Provider>
  );
};
