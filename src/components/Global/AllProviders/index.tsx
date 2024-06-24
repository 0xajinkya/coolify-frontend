"use client";

import { GlobalProvider } from "@/context";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import { GlobalComp } from "../GlobalComp";

export const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalProvider>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <GlobalComp>{children}</GlobalComp>
        </ThemeProvider>
      </SnackbarProvider>
    </GlobalProvider>
  );
};
