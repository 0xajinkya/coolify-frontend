"use client";
import { ICollection } from "@/context";
import { Box, Divider, Typography } from "@mui/material";
import { CollectionsListItem } from "../CollectionListItem";

export const CollectionsList = ({
  collections,
  deleteCollection,
  loading
}: {
  collections: ICollection[];
  deleteCollection: (id: string) => Promise<void>;
  loading: boolean
}) => {
  return (
    <Box
      sx={{
        mt: "20px",
      }}
    >
      {collections.length > 0 && collections?.map((c, id) => {
        return (
          <>
            <CollectionsListItem c={c} key={id} deleteCollection={deleteCollection} />
            <Divider sx={{ mt: "12px" }} />
          </>
        );
      })}
      {collections.length === 0 && !loading && 
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography>
            You have 0 collections, create one now!
          </Typography>
        </Box>
      }
    </Box>
  );
};
