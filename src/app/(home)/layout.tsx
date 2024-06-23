import { LFooter, LNavbar } from "@/components";
import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        overflowX: "hidden",
        minHeight: "100vh",
        backgroundColor: "#271F30",
        color: "white",
      }}
    >
      <LNavbar />
      {children}
      <LFooter />
    </Box>
  );
}
