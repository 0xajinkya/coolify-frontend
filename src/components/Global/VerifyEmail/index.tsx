"use client";

import { SignupContext } from "@/context";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { MainInput } from "../Inputs";
import { MainButton } from "../Buttons";

export const VerifyEmailModal = ({
  open,
  submitOtp,
  resendOtp,
}: {
  open: boolean;
  submitOtp: (val: string) => Promise<void>;
  resendOtp: () => Promise<void>;
}) => {
  const [otp, setOtp] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await submitOtp(`${otp}`);
    setLoading(false);
  };

  const handleResend = async () => {
    setResend(true);
    await resendOtp();
    setTimeout(() => setResend(false), 120000);
  };

  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: ["flex-end", "center"],
        pb: ["60px", "0px"],
        backdropFilter: "blur(10px)",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            width: ["80%", "20%"],
          }}
        >
          <Box
            sx={{
              px: "20px",
              py: "20px",
              backgroundColor: "white",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Verify your email
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Uh oh..It seems you have not verified your email address. To
              continue going forward, please verify your email!
              <br /> <br />
              Thanks,
              <br />
              Coolify Team
            </Typography>
            <Box
              sx={{
                mt: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <MainInput
                placeholder="Your OTP"
                type="number"
                fieldName="otp"
                handleChange={(_, val) => setOtp(val)}
              />
              <MainButton
                text="Verify"
                style={{
                  backgroundColor: "#271F30",
                  color: "white",
                  ":hover": {
                    backgroundColor: "#271F30",
                    color: "white",
                  },
                  ":disabled" : {
                    color: "grey"
                  }
                }}
                disabled={otp?.length !== 6}
                loading={loading}
                onClick={() => handleSubmit()}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                Didn&apos;t receive OTP?{" "}
                <Button
                  sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    p: 0,
                    m: 0,
                  }}
                  onClick={() => handleResend()}
                  disabled={resend}
                >
                  Resend
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
