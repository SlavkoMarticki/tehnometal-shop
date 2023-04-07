import React from 'react';
import { RootStore } from '../../store';
import { RootStoreContext } from './RootStoreCtx';

interface IRootStoreProps {
  children: React.ReactNode;
}

export const RootStoreCtxProvider = (
  props: IRootStoreProps
): React.ReactElement => {
  const rootStore = new RootStore();

  return (
    <RootStoreContext.Provider value={rootStore}>
      {props.children}
    </RootStoreContext.Provider>
  );
};
