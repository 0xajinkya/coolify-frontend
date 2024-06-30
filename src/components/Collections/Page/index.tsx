"use client";

import { Box, CircularProgress, Fade, Modal, Typography } from "@mui/material";
import { Heading } from "../Heading";
import { CollectionsList } from "../CollectionsList";
import { useContext } from "react";
import { AppContext, CollectionContext } from "@/context";
import { Loader } from "@/components/Global";
import { CreateCollectionModal } from "../CreateCollectionModal";

export const CollectionPage = () => {
  const {
    collections,
    deleteCollection,
    loading,
    createCollection,
    toggleModal,
    createModal,
    handleCollectionForm
  } = useContext(CollectionContext);

  return (
    <Box 
      sx={{
        position: "relative",
        // pt: "20px"
      }}
    >
      <Heading 
        toggleModal={toggleModal}
      />
      {/* <Box sx={{mt: "40px"}}></Box> */}
      <CollectionsList
        collections={collections}
        deleteCollection={deleteCollection}
        loading={loading}
      />
      <Loader loading={loading} />
      <CreateCollectionModal createCollection={createCollection} open={createModal} toggleModal={toggleModal} handleCollectionForm={handleCollectionForm}/>
    </Box>
  );
};
