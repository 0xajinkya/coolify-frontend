import { Box, SxProps, Theme, Typography } from "@mui/material";

export const NothingToShow = ({ text, style }: { text: string, style?: SxProps<Theme> }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "rgba(0, 0, 0, 0.5)",
          fontSize: "13px",
          textAlign: "center",
          ...style
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
