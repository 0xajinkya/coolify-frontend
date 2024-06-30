import { ICollection } from "@/context";
import { Delete, MoreHoriz } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const CollectionsListItem = ({
  c,
  deleteCollection,
}: {
  c: ICollection;
  deleteCollection: (id: string) => Promise<void>;
}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: ["center"],
        boxShadow: "none",
      }}
    >
      <CardActionArea
        sx={{
          flex: 1,
          cursor: "pointer",
          p: "4px",
          mt: "12px",
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={() => router.push(`/app/${c.id}`)}
      >
        <Box>
          <Typography sx={{ fontWeight: [700, 600], fontSize: ["14px", "auto"] }}>{c.name}</Typography>
          <Typography
            sx={{
              fontSize: ["10px", "11px"],
              color: "rgba(0, 0, 0, 0.5)",
              display: "-webkit-box",
              WebkitLineClamp: 2 /* Number of lines to show */,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {c.description}
          </Typography>
        </Box>
      </CardActionArea>
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
            transform: ["rotate(90deg)", "none"]
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
            router.push(`/app/${c.id}`);
          }}
        >
          View
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            deleteCollection(c.id);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </Card>
  );
};
