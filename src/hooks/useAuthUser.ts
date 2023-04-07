import { useContext } from "react"
import { AuthContext } from "../context"
import { IAuthContextValues } from "../types";

export default function useAuthUser(): IAuthContextValues {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
}