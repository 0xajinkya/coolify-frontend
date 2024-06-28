"use client";

import { ReactNode, createContext } from "react";


export const AppContext = createContext<null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {

  return (
    <AppContext.Provider
      value={null}
    >
      {children}
    </AppContext.Provider>
  );
};
