"use client";

import { SignupProvider } from "@/context";
import { ReactNode } from "react";

export const SignupLayout = ({ children }: { children: ReactNode }) => {
  return <SignupProvider>{children}</SignupProvider>;
};
