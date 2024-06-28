"use client";

import { Box, Card, Divider, Pagination } from "@mui/material";
import { SCHeader } from "../SCHeader";
import React, { useContext } from "react";
import { ICollection, IMeta, SingleCollectionContext } from "@/context";
import { PostCard } from "../PostCard";

export const SingleCollectionPage = () => {

  const { collection, posts, setPage, meta, togglePost } = useContext(
    SingleCollectionContext
  );

  console.log(collection);

  return (
    <Box>
      {collection && (collection as ICollection).id && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <SCHeader
            name={(collection as ICollection).name}
            createdBy={(collection as ICollection).owner!.name}
            description={(collection as ICollection).description}
          />
          {posts?.map((p, i) => (
            <Box
              sx={{
                px: "50px",
              }}
              key={i}
            >
              <PostCard key={p.id} post={p} togglePost={togglePost}/>
              <Divider
                sx={
                  {
                    // marginTop: "12px"
                  }
                }
              />
            </Box>
          ))}
          {meta && (
            <Pagination
              onChange={(_, val) => setPage(val as number)}
              count={(meta as IMeta).pages}
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "18px",
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};
