import React, { useEffect, useState } from 'react';
import { auth } from '../../common';
import { AuthContext } from '.';
import { User } from '@firebase/auth';

export const AuthContextProvider = ({ children }: any): React.ReactElement => {
  const userFromLS = localStorage.getItem('loginUser');
  let lsUser = null;
  if (typeof userFromLS === 'string') {
    lsUser = JSON.parse(userFromLS);
  }
  const [user, setUser] = useState<any | null>(lsUser);

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser: any) => {
      setUser(firebaseUser);
    });
  }, []);

  const ctxValue = {
    user,
    setUser: (value: User | null) => {
      setUser(value);
    }
  };

  return (
    <AuthContext.Provider value={ctxValue}> {children} </AuthContext.Provider>
  );
};
