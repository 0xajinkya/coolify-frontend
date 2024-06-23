import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import { FeaturesSec, LNavbar, MainSec } from "@/components";

export default function Page() {
  return (
    <Box>
      <MainSec />
      <FeaturesSec />
    </Box>
  );
}
