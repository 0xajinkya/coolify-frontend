import { CollectionLayout } from "@/components";
import { Box } from "@mui/material"
import { ReactNode } from "react"

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <CollectionLayout>
            {children}
        </CollectionLayout>
    )
};

export default Layout;