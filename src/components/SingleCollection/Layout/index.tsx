import { SingleCollectionProvider } from "@/context";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export const SingleCollectionLayout = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <SingleCollectionProvider id={id}>{children}</SingleCollectionProvider>
  );
};
