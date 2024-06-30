"use client";

import { Star, VerifyEmailModal } from "@/components/Global";
import { SignupContext } from "@/context";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export const Description = () => {
  const path = usePathname();


  return (
    <Box
      sx={{
        width: ["100%", "24%"],
      }}
    >
      {/* <VerifyEmailModal 
        open={open}
        submitOtp={submitOtp}
        resendOtp={resendOtp}
      /> */}
      <Box
        sx={{
          px: "30px",
          py: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
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
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
          }}
        >
          {path === "/sign-up"
            ? "Sign up and make collections for your LinkedIn posts now!"
            : "Log back in and access your collections!"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "30px",
          }}
        >
          {[
            "Create infinite collections",
            "Easily find what you want",
            "Save posts directly from LinkedIn",
          ].map((d, i) => (
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
              key={i}
            >
              <Star width={"20px"} height={"20px"} />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#D2D2D2",
                }}
              >
                {d}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
