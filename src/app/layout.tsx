import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import { AllProviders } from "@/components";


export const metadata: Metadata = {
  metadataBase: new URL("https://coolify.top"),
  title: "Coolify",
  description:
    "Discover the ultimate LinkedIn tool! Save your favorite LinkedIn posts into collections effortlessly with Coolify. Check it out!",
  applicationName: "OnlyMess",
  authors: [{
    url: "https://linkedin.com/in/0xajinkya",
    name: "Ajinkya"
  }],
  creator: "Coolify",
  robots: {
    googleBot: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: true,
      nocache: false,
      notranslate: true,
      indexifembedded: false,
      nositelinkssearchbox: true,
      unavailable_after: '2025-01-01',
      'max-video-preview': 120,
      'max-image-preview': 'standard',
      'max-snippet': 150

    }
  },
  icons: ["/logo/192x192.png", "/logo/384x384.png", "/logo/500x500.png"],
  openGraph: {
    type: "website",
    title: "Coolify",
    description:
      "Discover the ultimate LinkedIn tool! Save your favorite LinkedIn posts into collections effortlessly with Coolify. Check it out!",
    siteName: "Coolify",
    url: "https://coolify.top",
    images: ["/logo/384x384.png"],
  },
  themeColor: "#271F30",
  keywords: [
    "Coolify",
    "linkedin",
    "posts",
    "save",
    "collection",
    "linkedin post save",
    "linkedin post collection",
  ],
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
        }}
      >
      <Box
        sx={{
          width: "min(1920px, 100vw)",
          maxWidth: "min(1920px, 100vw)",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <AllProviders>{children}</AllProviders>
      </Box>
      </body>
    </html>
  );
}
