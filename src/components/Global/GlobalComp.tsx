import { Box } from "@mui/material"
import { ReactNode, useContext } from "react"
import { VerifyEmailModal } from "./VerifyEmail"
import { GlobalContext } from "@/context"

export const GlobalComp = ({children}: {children: ReactNode}) => {

    const {
        open,
        submitOtp,
        resendOtp
    } = useContext(GlobalContext)

    return (
        <Box>
            <VerifyEmailModal 
                open={open}
                submitOtp={submitOtp}
                resendOtp={resendOtp}
            />
        {children}
        </Box>
    )
}