"use client";
import { ICollection } from "@/context";
import { Box, Divider, Typography } from "@mui/material";
import { CollectionsListItem } from "../CollectionListItem";

export const CollectionsList = ({
  collections,
  deleteCollection,
  loading,
  openShareCollectionModal,
}: {
  collections: ICollection[];
  deleteCollection: (id: string) => Promise<void>;
  loading: boolean;
  openShareCollectionModal: (
    name: string,
    id: string,
    description: string
  ) => void;
}) => {
  return (
    <Box
      sx={
        {
          // mt: "20px",
        }
      }
    >
      {collections.length > 0 &&
        collections?.map((c, id) => {
          return (
            <>
              <CollectionsListItem
                c={c}
                key={id}
                deleteCollection={deleteCollection}
                openShareCollectionModal={openShareCollectionModal}
              />
              <Divider sx={{ mt: "12px" }} />
            </>
          );
        })}
      {collections.length === 0 && !loading && (
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: ["14px", "auto"],
          }}
        >
          <Typography>You have 0 collections, create one now!</Typography>
        </Box>
      )}
    </Box>
  );
};
