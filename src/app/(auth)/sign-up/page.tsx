import { SignupForm, SignupLayout } from "@/components";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <Box
      sx={{
        width: ["100%", "76%"],
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: ["40px", "0px"],
        borderBottomLeftRadius: ["0px", "40px"],
      }}
    >
      <Box
        sx={{
          px: "20px",
          pb: ["35px", "20px"],
          pt: ["35px", "20px"],
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap :"16px"
        }}
      >
        <Box
          sx={{
            width: ["80%", "40%"],
          }}
        >
          <SignupForm />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: ["80%", "40%"],
            ml: "12px"
          }}
        >
          <Typography
            sx={{
              alignItems: "center",
              color: "rgba(0, 0, 0, 0.4)"
            }}
          >
            Already have an account? <Link href={"/log-in"} className="link" style={{color: "#271F30"}}>Login</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
