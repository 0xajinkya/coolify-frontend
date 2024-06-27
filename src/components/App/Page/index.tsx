"use client";

import { Box, CircularProgress, Fade, Modal, Typography } from "@mui/material";
import { Heading } from "../Heading";
import { CollectionsList } from "../CollectionsList";
import { useContext } from "react";
import { AppContext } from "@/context";
import { Loader } from "@/components/Global";
import { CreateCollectionModal } from "../CreateCollectionModal";

export const AppPage = () => {
  const {
    collections,
    deleteCollection,
    loading,
    createCollection,
    toggleModal,
    createModal,
    handleCollectionForm
  } = useContext(AppContext);

  return (
    <Box sx={{}}>
      <Heading 
        toggleModal={toggleModal}
      />
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
