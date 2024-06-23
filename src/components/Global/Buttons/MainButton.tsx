"use client";

import { LoadingButton } from "@mui/lab";
import { Button, CircularProgress, SxProps } from "@mui/material"
import { MouseEventHandler } from "react"

export const MainButton = ({text, type, onClick, style, loading=false, disabled=false}: {text: string, type?: "submit" | "button", onClick?: MouseEventHandler<HTMLButtonElement>, style?: SxProps, loading?: boolean, disabled?: boolean}) => {
    return (
        <LoadingButton
            sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: '20px',
                px: "20px",
                py: "8px",
                textTransform: "capitalize",
                ":hover": {
                    backgroundColor: "white"
                },
                ...style
            }}
            type={type ?? "button"}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            loadingIndicator={<CircularProgress size={15} sx={{color: "white", width: "15px", height: "15px"}}/>}
        >
            {text}
        </LoadingButton>
    )
}