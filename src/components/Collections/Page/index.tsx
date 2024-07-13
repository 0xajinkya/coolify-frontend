"use client";

import { Box } from "@mui/material";
import { Heading } from "../Heading";
import { CollectionsList } from "../CollectionsList";
import { useContext } from "react";
import { AppContext, CollectionContext } from "@/context";
import { Loader } from "@/components/Global";
import { CreateCollectionModal } from "../CreateCollectionModal";
import { ShareCollectionModal } from "../ShareCollection";

export const CollectionPage = () => {
  const {
    collections,
    deleteCollection,
    loading,
    createCollection,
    toggleModal,
    createModal,
    handleCollectionForm,
    shareCollection,
    closeShareCollectionModal,
    openShareCollectionModal,
  } = useContext(CollectionContext);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Heading toggleModal={toggleModal} />
      <CollectionsList
        collections={collections}
        deleteCollection={deleteCollection}
        loading={loading}
        openShareCollectionModal={openShareCollectionModal}
      />
      <Loader loading={loading} />
      <CreateCollectionModal
        createCollection={createCollection}
        open={createModal}
        toggleModal={toggleModal}
        handleCollectionForm={handleCollectionForm}

      />
      {Boolean(shareCollection) && (
        <ShareCollectionModal
          shareData={shareCollection}
          toggleModal={closeShareCollectionModal}
        />
      )}
    </Box>
  );
};
