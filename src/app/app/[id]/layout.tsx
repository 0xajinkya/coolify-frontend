import { SingleCollectionLayout } from "@/components";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const Layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) => {
  const { id } = params;
  return <SingleCollectionLayout id={id}>{children}</SingleCollectionLayout>;
};

export default Layout;
