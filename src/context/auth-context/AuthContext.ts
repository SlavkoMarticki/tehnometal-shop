import { User } from "@firebase/auth";
import { createContext } from "react";

export interface IAuthContextValues {
  user: User | null;
  setUser: (value: User | null) => void
}


export const AuthContext = createContext<IAuthContextValues>({
  user: null,
  setUser: (value: User | null) => { }
});