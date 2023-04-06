import { User } from "@firebase/auth";
import { useContext } from "react"
import { AuthContext, IAuthContextValues } from "../context"

export default function useAuthUser(): IAuthContextValues {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
}