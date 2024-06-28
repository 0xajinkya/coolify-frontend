import { AppProvider, CollectionProvider } from "@/context"
import { ReactNode } from "react"

export const CollectionLayout = ({children}: {children: ReactNode}) => {
    return (
        <CollectionProvider>
            {children}
        </CollectionProvider>
    )
}