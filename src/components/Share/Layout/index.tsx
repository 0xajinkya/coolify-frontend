import { ShareCollectionProvider } from "@/context";
import { ReactNode } from "react";

export const ShareCollectionLayout = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return <ShareCollectionProvider id={id}>{children}</ShareCollectionProvider>;
};
