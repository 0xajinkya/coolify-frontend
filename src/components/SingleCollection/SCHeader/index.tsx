import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export const SCHeader = ({
  name,
  createdBy,
  description,
}: {
  name: string;
  createdBy: string;
  description: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        mb: "18px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            pr: "50px",
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
            {name}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {" "}
            - {createdBy}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          ml: "50px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
