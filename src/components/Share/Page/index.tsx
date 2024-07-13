"use client";

import { Loader, NothingToShow } from "@/components/Global";
import { PostCard } from "@/components/SingleCollection/PostCard";
import { SCHeader } from "@/components/SingleCollection/SCHeader";
import { ICollection, IMeta, ShareCollectionContext } from "@/context";
import { Box, Divider, Pagination } from "@mui/material";
import { useContext } from "react";

export const SharePage = () => {
  const { collection, posts, setPage, meta, loading } = useContext(
    ShareCollectionContext
  );

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
          {!loading && (meta as IMeta).total === 0 && (
            <NothingToShow
              text="Uh..oh it seems this collection does not any post saved in it!"
              style={{
                marginTop: "24px",
              }}
            />
          )}
          {posts?.map((p, i) => (
            <Box
              sx={{
                px: ["10px", "50px"],
              }}
              key={i}
            >
              <PostCard key={p.id} post={p} />
              <Divider
                sx={
                  {
                    // marginTop: "12px"
                  }
                }
              />
            </Box>
          ))}

          {(meta as IMeta).total > 0 && (
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
      <Loader loading={loading} />
    </Box>
  );
};
