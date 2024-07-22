"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MainButton, OutlinedButton } from "../Global";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import { CHROME_EXTENSION_URL, FIREFOX_EXTENSION_URL } from "@/constants";

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
  const { user } = useContext(GlobalContext);

  const [extensionUrl, setExtensionUrl] = useState("");

  useEffect(() => {
    // Detect the browser and set the appropriate URL
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome") || userAgent.includes("Edge")) {
      setExtensionUrl(CHROME_EXTENSION_URL as string);
    } else if (userAgent.includes("Firefox")) {
      setExtensionUrl(FIREFOX_EXTENSION_URL as string);
    }
  }, []);

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
            fontSize: ["20px", "48px"],
            lineHeight: ["35px", "75px"],
          }}
        >
          Save any post straight into <br />{" "}
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
            flexDirection: "column",
            gap: "8px",
            alignItems: "center"
          }}
        >
          <Typography>Works with</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <Image 
              src={"/icons/linkedin.svg"}
              alt="LinkedIn"
              width={40}
              height={40}
            />
            <Typography>{"&"}</Typography>
            <Image 
              src={"/icons/twitter.svg"}
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            justifyContent: "center",
            gap: "36px",
            alignItems: ["stretch", "center"],
            width: ["70%", "80%", "90%"],
          }}
        >
          {!user ? (
            <MainButton
              text="Log in now!"
              onClick={() => router.push("/log-in")}
              style={{
                border: "1px solid white",
                fontSize: ["14px", "20px"],
                borderRadius: "40px",
                flex: 1,
              }}
            />
          ) : (
            <OutlinedButton
              text="Go to dashboard"
              onClick={() => router.push("/app")}
              style={{
                border: "1px solid white",
                fontSize: ["14px", "20px"],
                borderRadius: "40px",
                flex: 1,
                minWidth: ["auto", "295px"],
              }}
            />
          )}
          <MainButton
            text="Download the extension!"
            style={{
              border: "1px solid #fcdc4d",
              background:
                "linear-gradient(90deg, #ffcbdd 0%, #fcdc4d 80%, #d36135 100%)",
              fontSize: ["14px", "20px"],
              borderRadius: "40px",
              // width: [user ? "210px" : "auto"],
              flex: 1,
              minWidth: ["auto", "295px"],
            }}
            onClick={() => window.open(extensionUrl, "_blank")}
          />
        </Box>
        <AbsoluteImage
          src={"/images/home/curve.png"}
          alt="curve"
          width={[220, 500]}
          height={[20, 50]}
          top={["16%", "30%"]}
          left={["17%", "12%"]}
        />
        <AbsoluteImage
          src={"/images/home/chat.png"}
          alt="curve"
          width={[25, 70]}
          height={[25, 70]}
          top={["-15%"]}
          left={["85%", "-40%"]}
        />

        <AbsoluteImage
          src={"/images/home/go.png"}
          alt="curve"
          width={[45, 70]}
          height={[45, 70]}
          top={["-25%", "-20%"]}
          left={["14%", "48%"]}
        />
        <AbsoluteImage
          src={"/images/home/phone.png"}
          alt="curve"
          width={[30, 70]}
          height={[30, 70]}
          top={["170%", "15%"]}
          left={["10%", "140%"]}
        />

        <AbsoluteImage
          src={"/images/home/task.png"}
          alt="curve"
          width={[30, 70]}
          height={[30, 70]}
          top={["120%", "120%"]}
          left={["80%", "-50%"]}
        />
      </Box>
    </Box>
  );
};
