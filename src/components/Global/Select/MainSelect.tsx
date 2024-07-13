"use client";

import {
  Box,
  Icon,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { MainInput } from "../Inputs";
import { useState } from "react";

export const MainSelect = ({
  placeholder,
  required = false,
  fieldName,
  handleChange,
}: {
  placeholder: string;
  fieldName: string;
  required?: boolean;
  icon?: JSX.Element;
  type?: string;
  handleChange?: (key: any, value: string) => void;
}) => {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {val === "" && (
        <Typography
          sx={{
            color: "grey",
            position: "absolute",
            fontSize: "13px",
            ml: "12px",
          }}
        >
          {placeholder}
        </Typography>
      )}
      <Select
        input={
          <InputBase
            sx={{
              borderBottom: !focused
                ? "1px solid #D2D2D2"
                : "1px solid #271F30",
              width: "100%",
              pb: "12px",
              pl: "12px",
              fontSize: ["13px", "auto"],
            }}
            name={fieldName}
            placeholder={placeholder}
          />
        }
        required={required}
        onChange={(e) => {
          handleChange && handleChange(fieldName, e.target.value as string);
          setVal(e.target.value as string);
          console.log(e.target.value)
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        notched
        sx={{
          width: "100%",
          borderBottom: !focused ? "1px solid #D2D2D2" : "1px solid #271F30",
          fontSize: "13px",
          pl: "10px",
          py: "6px",
        }}
      >
        <MenuItem value={"public"}>Public</MenuItem>
        <MenuItem selected value={"private"}>
          Private
        </MenuItem>
        <MenuItem value={"unlisted"}>Unlisted</MenuItem>
      </Select>
    </Box>
  );
};
