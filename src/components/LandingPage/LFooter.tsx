import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const LFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1c1d22",
        px: ["20px", "100px"],
        py: "50px",
        gap: ["24px", "auto"],
        display: "flex",
        flexDirection: ["column", "row"],
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
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
          Coolify
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
            color: "grey",
            ml: "6px",
          }}
        >
          © All rights reserved
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          gap: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            Legals
          </Typography>
          <Box
            sx={{
              ml: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {["Terms of service", "Privacy policy"].map((d, i) => (
              <Link key={i} href={d.toLowerCase().replace(" ", "-")} className="link">
                <Typography
                  key={i}
                  sx={{
                    color: "#D2D2D2",
                  }}
                >
                  {d}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            Page
          </Typography>
          <Box
            sx={{
              ml: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {["Home", "Collections"].map((d, i) => (
              <Link
                key={i}
                href={d === "Home" ? "/" : d.toLowerCase()}
                className="link"
              >
                <Typography
                  key={i}
                  sx={{
                    color: "#D2D2D2",
                  }}
                >
                  {d}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
