import { createContext, useContext } from "react";

export type GlobalContentType = {
  userName: string
  setUserName: (s: string) => void
};

export const GlobalContext = createContext<GlobalContentType>({
  userName: '',
  setUserName: () => { },
});

export const useGlobalContext = () => useContext(GlobalContext);