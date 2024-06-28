import { MainButton } from "@/components/Global";
import { Add, PlusOne } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Heading = ({toggleModal}: {toggleModal: () => void}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pb: "12px"
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
        Your Collections
      </Typography>
      <MainButton
        text="Create new collection"
        startIcon={<Add />}
        style={{
          backgroundColor: "rgba(180,93,238,1)",
          color: "white",
          ":hover": {
            backgroundColor: "rgba(180,93,238,1)",
          },
        }}
        onClick={() => toggleModal()}
      />
    </Box>
  );
};
