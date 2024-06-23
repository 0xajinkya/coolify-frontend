"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MainButton, OutlinedButton } from "../Global";
import { useRouter } from "next/navigation";

const AbsoluteImage = ({
  src,
  alt,
  width,
  height,
  top,
  right,
  left,
  bottom,
}: {
  src: string;
  alt: string;
  width: number[] | number;
  height: number[] | number;
  top: string[] | number[] | undefined;
  right?: string[] | number[] | undefined;
  left: string[] | number[] | undefined;
  bottom?: string[] | number[] | undefined;
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: width ?? 30,
        height: height ?? 30,
        top,
        left,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: width ?? 30,
          height: height ?? 30,
        }}
      >
        <Image src={src} alt={alt} fill />
      </Box>
    </Box>
  );
};

export const MainSec = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        // backgroundColor: "red",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: ["30px", "50px"],
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            // fontFamily: "Playwrite NZ",
            textAlign: "center",
            fontSize: ["22px", "48px"],
            lineHeight: ["35px", "75px"],
          }}
        >
          Save any post from LinkedIn, <br />
          straight into{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #ffcbdd 0%, #fcdc4d 80%, #d36135 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            your fav collections
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#D2D2D2",
            textAlign: "center",
            fontSize: ["12px", "auto"],
            // mt: "30px",
          }}
        >
          Create different collections for different purposes <br />
          to save your posts accordingly, acces them anywhere!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <OutlinedButton
            text="Watch How!"
            style={{
              fontSize: ["14px", "20px"],
              borderRadius: "40px",
            }}
            // onClick={}
          />
          <MainButton
            text="Get Started"
            onClick={() => router.push("/log-in")}
            style={{
              background:
                "linear-gradient(90deg, #ffcbdd 0%, #fcdc4d 80%, #d36135 100%)",
              border: "1px solid #fcdc4d",
              fontSize: ["14px", "20px"],
              borderRadius: "40px",
            }}
          />
        </Box>
        <AbsoluteImage
          src={"/images/home/curve.png"}
          alt="curve"
          width={[220, 500]}
          height={[20, 50]}
          top={["30%", "40%"]}
          left={["39%", "37%"]}
        />
        <AbsoluteImage
          src={"/images/home/chat.png"}
          alt="curve"
          width={[25, 70]}
          height={[25, 70]}
          top={["-45%"]}
          left={["85%", "-40%"]}
        />

        <AbsoluteImage
          src={"/images/home/go.png"}
          alt="curve"
          width={[45, 70]}
          height={[45, 70]}
          top={["-25%", "-35%"]}
          left={["14%", "48%"]}
        />
        <AbsoluteImage
          src={"/images/home/phone.png"}
          alt="curve"
          width={[30, 70]}
          height={[30, 70]}
          top={["170%", "5%"]}
          left={["10%", "140%"]}
        />

        <AbsoluteImage
          src={"/images/home/task.png"}
          alt="curve"
          width={[30, 70]}
          height={[30, 70]}
          top={["120%", "145%"]}
          left={["80%", "-50%"]}
        />
      </Box>
    </Box>
  );
};
