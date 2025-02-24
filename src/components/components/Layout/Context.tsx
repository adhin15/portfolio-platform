import { createContext, useContext } from "react";

export const AppContext = createContext<any>(undefined);

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  return ctx;
};
