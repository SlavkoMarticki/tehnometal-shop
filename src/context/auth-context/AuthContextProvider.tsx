import React, { useEffect, useState } from 'react';
import { auth } from '../../common';
import { AuthContext } from '.';
import { User } from '@firebase/auth';

export const AuthContextProvider = ({ children }: any): React.ReactElement => {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser: any) => {
      console.log(firebaseUser);
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
