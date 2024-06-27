import { AppLayout, Sidebar } from "@/components";
import { Box } from "@mui/material";
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
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            p: "20px",
          }}
        >
          <Sidebar />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflowX: "hidden",
              overflowY: "hidden",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                p: "20px",
                overflow: "hidden",
                width: "100%",
                height: "100%",
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
