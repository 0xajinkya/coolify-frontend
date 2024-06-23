"use client";

import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

export const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SnackbarProvider>
  );
};
