"use client";

import { MainButton, MainInput, Person } from "@/components/Global";
import { Email } from "@/components/Global/Icon/Email";
import { Lock } from "@/components/Global/Icon/Lock";
import { SignupContext } from "@/context";
import { Box } from "@mui/material";
import { useContext, useState } from "react";

export const SignupForm = () => {
  const { handleChange, submitForm } = useContext(SignupContext);
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        setLoading(true);
        e.preventDefault();
        await submitForm();
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
          icon={<Person color="inherit" />}
          placeholder="Name"
          required={true}
          type="text"
          fieldName={"name"}
          handleChange={handleChange}
        />
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
        <MainInput
          icon={<Lock color="inherit" />}
          placeholder="Confirm Password"
          required={true}
          type="password"
          fieldName="confirmPassword"
          handleChange={handleChange}
        />
        <MainButton
          text="Create Account"
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
