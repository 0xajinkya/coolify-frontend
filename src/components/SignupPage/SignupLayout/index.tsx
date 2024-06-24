"use client";

import { GlobalContext, SignupProvider } from "@/context";
import { ReactNode, useContext } from "react";

export const SignupLayout = ({ children }: { children: ReactNode }) => {
  const { user, setUser, setMode } = useContext(GlobalContext);

  return (
    <SignupProvider user={user} setUser={setUser} setMode={setMode}>
      {children}
    </SignupProvider>
  );
};
