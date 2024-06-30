import { AppLayout, Sidebar } from "@/components";
import { ExitToApp } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { ReactNode } from "react";
import * as React from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppLayout>
      <Box
        sx={{
          backgroundColor: "#271F30",
          maxWidth: "100vw",
          minWidth: "100vw",
          minHeight: "100vh",
          color: "black",
          display: "flex",
          flexDirection: ["column", "row"],
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            p: ["10px", "20px"],
          }}
        >
          <Sidebar />

          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "20px",
              overflowY: "scroll",
              scrollbarWidth: "none" /* Hide the scrollbar in Firefox */,
              "-ms-overflow-style":
                "none" /* Hide the scrollbar in Internet Explorer 10+ */,
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                p: "20px",
                width: "100%",
                height: ["95vh", "50vh"],
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Layout;
