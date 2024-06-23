import { Description, ImageComp, SignupLayout, Star, VerifyEmailModal } from "@/components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SignupLayout>
      <Box
        sx={{
          backgroundColor: "#271F30",
          maxWidth: "100vw",
          minWidth: "100vw",
          minHeight: "100vh",
          color: "black",
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: ["space-between", "flex-end"],
          overflow: "hidden",
        }}
      >
        <Description />
        <ImageComp />
        {children}
      </Box>
      {/* <VerifyEmailModal /> */}
    </SignupLayout>
  );
}
