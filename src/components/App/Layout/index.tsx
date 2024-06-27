import { AppProvider } from "@/context"
import { ReactNode } from "react"

export const AppLayout = ({children}: {children: ReactNode}) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}