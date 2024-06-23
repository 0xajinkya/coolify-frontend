"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const ImageComp = () => {
  const path = usePathname();
  console.log(path);
  return (
    <Box
      sx={{
        display: ["none", "flex"],
        position: "absolute",
        bottom: 0,
        left: "10%",
      }}
    >
      <Box
        sx={{
        display: ["none", "flex"],
          position: "relative",
          width: 450,
          height: 450,
        }}
      >
        <Image
          src={
            path === "/sign-up"
              ? "/images/sign-up/signup.svg"
              : "/images/sign-in/signin.svg"
          }
          fill
          alt={path === "/sign-up" ? "Signup" : "Login"}
        />
      </Box>
    </Box>
  );
};
