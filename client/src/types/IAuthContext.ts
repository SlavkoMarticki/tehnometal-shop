import { User } from "@firebase/auth";

export interface IAuthContextValues {
  user: User | null;
  setUser: (value: User | null) => void
}