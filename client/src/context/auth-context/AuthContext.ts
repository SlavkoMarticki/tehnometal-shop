import { User } from '@firebase/auth';
import { createContext } from 'react';
import { IAuthContextValues } from '../../types';

export const AuthContext = createContext<IAuthContextValues>({
  user: null,
  setUser: (value: User | null) => {}
});
