"use client";

import { MainButton, MainInput, Person } from "@/components/Global";
import { Email } from "@/components/Global/Icon/Email";
import { Lock } from "@/components/Global/Icon/Lock";
import { SignupContext } from "@/context";
import { Box } from "@mui/material";
import { useContext, useState } from "react";

export const LoginForm = () => {
  const { handleChange, login } = useContext(SignupContext);
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        setLoading(true);
        e.preventDefault();
        await login();
        setLoading(false);
      }}
      method="POST"
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <MainInput
          icon={<Email color="inherit" />}
          placeholder="Email"
          required={true}
          type="email"
          fieldName="email"
          handleChange={handleChange}
        />
        <MainInput
          icon={<Lock color="inherit" />}
          placeholder="Password"
          required={true}
          type="password"
          fieldName="password"
          handleChange={handleChange}
        />
        <MainButton
          text="Login"
          style={{
            backgroundColor: "#271F30",
            color: "white",
            marginTop: "12px",
            ":hover": {
              backgroundColor: "#271F30",
              color: "white",
            },
          }}
          type="submit"
          loading={loading}
        />
      </Box>
    </form>
  );
};
