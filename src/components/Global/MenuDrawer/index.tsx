"use client";

import { Box, Drawer, Grow, IconButton, Typography } from "@mui/material";
import { Close } from "../Icon";
import { useRouter } from "next/navigation";
import { MainButton, OutlinedButton } from "../Buttons";
import { LinkComp } from "@/components/LandingPage";

export const MenuDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
}) => {
  const router = useRouter();

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      anchor="top"
      PaperProps={{ sx: { backgroundColor: "#1c1d22" } }}
    >
      <Grow in={open}>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column"],
            gap: "32px",
            py: "25px",
            px: ["20px"],
            backgroundColor: "#1c1d22",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
            <IconButton onClick={() => handleClose()}>
              <Close color="white" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <LinkComp title="Home" route={"/"} />
            <LinkComp title="Features" route={"/features"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <MainButton text="Signup" onClick={() => router.push("/sign-up")} />
            <OutlinedButton
              text="Login"
              onClick={() => router.push("/log-in")}
            />
          </Box>
        </Box>
      </Grow>
    </Drawer>
  );
};
