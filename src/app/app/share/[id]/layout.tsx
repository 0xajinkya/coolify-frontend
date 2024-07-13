import { ShareCollectionLayout } from "@/components";
import { ReactNode } from "react";

const Layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) => {
  const { id } = params;
  return <ShareCollectionLayout id={id}>{children}</ShareCollectionLayout>;
};

export default Layout;
