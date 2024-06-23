import { LoginForm } from "@/components/SignupPage/LoginForm";
import { Box } from "@mui/material";

export default function Page () {
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
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: ["80%", "40%"],
          }}
        >
          <LoginForm />
        </Box>
      </Box>
    </Box>
    )
}