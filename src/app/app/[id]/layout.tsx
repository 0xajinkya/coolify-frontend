import { SingleCollectionLayout } from "@/components";
import { ICollection } from "@/context";
import {
  fetchCollectionApiCall,
  fetchCollectionMeta,
  getFromLocalStorage,
} from "@/utils";
import { Box } from "@mui/material";
import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const res = await fetchCollectionMeta(params.id);
    const collection: ICollection = res.content.data.collection;
    console.log(collection);
    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: `${collection.name} | ${collection.owner!.name}`,
      description: collection.description,
      openGraph: {
        images: [...previousImages],
      },
    };
  } catch (error) {
    const mt = await parent;
    return {
      metadataBase: new URL("https://coolify.top"),
      title: "Coolify",
      description:
        "Discover the ultimate LinkedIn tool! Save your favorite LinkedIn posts into collections effortlessly with Coolify. Check it out!",
      applicationName: "OnlyMess",
      authors: [
        {
          url: "https://linkedin.com/in/0xajinkya",
          name: "Ajinkya",
        },
      ],
      creator: "Coolify",
      robots: {
        googleBot: {
          index: true,
          follow: true,
          noarchive: false,
          nosnippet: false,
          noimageindex: true,
          nocache: false,
          notranslate: true,
          indexifembedded: false,
          nositelinkssearchbox: true,
          unavailable_after: "2025-01-01",
          "max-video-preview": 120,
          "max-image-preview": "standard",
          "max-snippet": 150,
        },
      },
      icons: ["/logo/192x192.png", "/logo/384x384.png", "/logo/500x500.png"],
      openGraph: {
        type: "website",
        title: "Coolify",
        description:
          "Discover the ultimate LinkedIn tool! Save your favorite LinkedIn posts into collections effortlessly with Coolify. Check it out!",
        siteName: "Coolify",
        url: "https://coolify.top",
        images: ["/logo/384x384.png"],
      },
      themeColor: "#271F30",
      keywords: [
        "Coolify",
        "linkedin",
        "posts",
        "save",
        "collection",
        "linkedin post save",
        "linkedin post collection",
      ],
      manifest: "/manifest.json",
    };
  }
}

// export const metadata: Metadata = {
//   title: "Helo"
// }

const Layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) => {
  const { id } = params;
  return <SingleCollectionLayout id={id}>{children}</SingleCollectionLayout>;
};

export default Layout;
