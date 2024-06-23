import { Button, SxProps } from "@mui/material"
import { MouseEventHandler } from "react"

export const OutlinedButton = ({text, type, onClick, style}: {text: string, type?: "submit" | "button", onClick?: MouseEventHandler<HTMLButtonElement>, style?: SxProps}) => {
    return (
        <Button
            sx={{
                border: "1px solid white",
                color: "white",
                borderRadius: '20px',
                px: "20px",
                py: "8px",
                textTransform: "capitalize",
                ":hover": {
                color: "white",
                },
                ...style
            }}
            type={type ?? "button"}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}