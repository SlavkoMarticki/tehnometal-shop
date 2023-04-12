import { useContext } from "react";
import { LoaderContext } from "../context/loader-ctx";
import { ILoaderContextType } from "../types";

export const useLoader = (): ILoaderContextType => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  return { isLoading, setIsLoading };
};