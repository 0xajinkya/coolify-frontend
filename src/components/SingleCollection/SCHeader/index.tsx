import { getFromLocalStorage } from "@/utils";
import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const SCHeader = ({
  name,
  createdBy,
  description,
}: {
  name: string;
  createdBy: string;
  description: string;
}) => {
  const router = useRouter();

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
        <IconButton
          onClick={() =>
            getFromLocalStorage("accessToken")
              ? router.replace("/app")
              : router.push("/sign-up")
          }
        >
          <ArrowBack />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            pr: ["0px", "50px"],
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playwrite NZ",
              fontSize: ["20px", "30px"],
              fontWeight: 700,
              background:
                "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitLineClamp: 1 /* Number of lines to show */,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: ["12px", "auto"],
              WebkitLineClamp: 1 /* Number of lines to show */,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            - {createdBy}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          ml: ["0px", "50px"],
          color: "rgba(0, 0, 0, 0.5)",
          fontSize: '14px'
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
