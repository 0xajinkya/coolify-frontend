"use client";

import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { Hamburger, MainButton, MenuDrawer, OutlinedButton } from "../Global";
import { usePathname, useRouter } from "next/navigation";
import { UrlObject } from "url";
import { useState } from "react";

export const LinkComp = ({
  title,
  route,
}: {
  title: string;
  route: string | UrlObject;
}) => {
  const path = usePathname();
  return (
    <Link href={route} className="link">
      <Typography
        sx={{
          color: path === route ? "white" : "grey",
          ":hover": {
            color: "white",
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export const LNavbar = () => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        px: ["20px", "100px"],
        width: ["calc(100% - 40px)", "calc(100% - 200px)"],
        py: "25px",
        backdropFilter: "blur(10px)",
        zIndex: 999,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playwrite NZ",
          fontSize: "30px",
          fontWeight: 700,
          background:
            "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Coolify
      </Typography>
      <Box
        sx={{
          display: ["none", "flex"],
          justifyContent: "center",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <LinkComp title="Home" route={"/"} />
        <LinkComp title="Features" route={"/features"} />
      </Box>
      <Box
        sx={{
          display: ["none", "flex"],
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainButton text="Signup" onClick={() => router.push("/sign-up")} />
        <OutlinedButton text="Login" onClick={() => router.push("/log-in")} />
      </Box>
      <Box
        sx={{
          display: ["flex", "none"],
        }}
      >
        <IconButton onClick={() => setOpen(true)}>
          <Hamburger width="25px" height="25px" />
        </IconButton>
      </Box>
      <MenuDrawer open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};
