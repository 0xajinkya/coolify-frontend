import { LFooter, LNavbar } from "@/components";
import { Box } from "@mui/material";
import Link from "next/link";

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
        display: "flex",
        flexDirection: ["column"],
        justifyContent: ["space-between"],
      }}
    >
      <Box>
        <LNavbar />
        {children}
      </Box>
      <LFooter />
      <Link
        href="https://www.producthunt.com/posts/coolify-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-coolify&#0045;2"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=469141&theme=light"
          alt="Coolify - Save&#0032;any&#0032;posts&#0032;from&#0032;LinkedIn&#0032;into&#0032;you&#0032;favorite&#0032;collections&#0046; | Product Hunt"
          style={{
            width: "250px",
            height: "54px",
          }}
          width="250"
          height="54"
        />
      </Link>
    </Box>
  );
}
