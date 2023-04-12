import { createContext } from "react";
import { ILoaderContextType } from "../../types";

export const LoaderContext = createContext<ILoaderContextType>({
  isLoading: false,
  setIsLoading: () => { }
});