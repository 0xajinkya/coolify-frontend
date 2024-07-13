"use client";
import { IPost } from "@/context";
import { MoreHoriz } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import cheerio from "cheerio";

export const PostCard = ({
  post,
  togglePost,
}: {
  post: IPost;
  togglePost?: (id: string) => Promise<void>;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();
  const [title, setTitle] = useState("");
  console.log(post);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        axios.defaults.headers.common["User-Agent"] =
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36";
        const res = await fetch("/api/get-from-linkedin?id=" + post.postId, {
          method: "GET",
        });
        const resHtml = await res.text();
        const $ = cheerio.load(resHtml);

        const title = $("title").text();
        setTitle(title);
        console.log(title);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchPostData();
  }, []);

  return (
    <Card
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardActionArea
        sx={{
          flex: 1,
          py: "12px",
          pl: "6px",
        }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/feed/update/" + post.postId,
            "_blank"
          )
        }
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {title !== "" ? title : "Click to view this post!"}
        </Typography>
      </CardActionArea>
      {togglePost && (
        <>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHoriz
              sx={{
                width: "18px",
                height: "18px",
              }}
            />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                window.open(
                  "https://www.linkedin.com/feed/update/" + post.postId,
                  "_blank"
                );
              }}
            >
              View
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                togglePost(post.id);
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </>
      )}
    </Card>
  );
};
