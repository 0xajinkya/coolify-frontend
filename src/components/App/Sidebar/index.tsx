"use client";

import { Box, Button, Fab, SvgIconTypeMap } from "@mui/material";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { GlobalContext } from "@/context";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Collections, ExitToApp } from "@mui/icons-material";
import { MainButton } from "@/components/Global";
import { useRouter } from "next/navigation";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarList = ({
  open,
  text,
  icon,
  current,
  onClick,
}: {
  open: boolean;
  text: string;
  current: string;
  icon: any;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <ListItem key={text} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
          borderRadius: "12px",
          color:
            current === text.split(" ").join("-").toLowerCase()
              ? "white"
              : "#D2D2D2",
          border:
            current === text.split(" ").join("-").toLowerCase() && open
              ? "1px solid white"
              : "1px solid transparent",
        }}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: "inherit",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, logOut } = React.useContext(GlobalContext);
  const [current, setCurrent] = React.useState("collections");
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        sx={{
          display: ["flex", "none"],
          position: "fixed",
          bottom: "3%",
          backgroundColor: "white",
        }}
        onClick={logOut}
      >
        <ExitToApp
          sx={{
            color: "darkred",
          }}
        />
      </Fab>
      <Box
        sx={{
          height: "100%",
          display: ["none", "flex"],
        }}
      >
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          sx={{}}
          PaperProps={{
            sx: {
              backgroundColor: "#271F30",
            },
          }}
        >
          <DrawerHeader
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: "24px",
              px: "18px",
            }}
          >
            <Typography
              sx={{
                display: open ? "flex" : "none",
                fontFamily: "Playwrite NZ",
                fontSize: "30px",
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Coolify
            </Typography>
            <IconButton
              sx={{
                color: "white",
              }}
              onClick={open ? handleDrawerClose : handleDrawerOpen}
            >
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              px: "12px",
              // borderRadius: "12"
            }}
          >
            {["Collections"].map((text, index) => (
              <SidebarList
                text={text}
                open={open}
                key={index}
                icon={<Collections />}
                current={current}
                onClick={(e) =>
                  // setCurrent(text.split(" ").join("-").toLowerCase())
                  router.push("/app")
                }
              />
            ))}
          </List>
          <Box
            sx={{
              display: open ? "flex" : "none",
              mt: "auto",
              mb: "30px",
              ml: "20px",
              backgroundColor: "rgba(252,176,69,1)",
              p: user ? "20px" : "0px",
              borderRadius: "15px",
            }}
          >
            {user ? (
              <Box
                sx={{
                  display: open ? "flex" : "none",
                  flexDirection: "column",
                  gap: "12px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: open ? "flex" : "none",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: 700,
                    }}
                  >
                    {user!.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "11px",
                    }}
                  >
                    {user!.email}
                  </Typography>
                </Box>
                <MainButton text="Logout" onClick={logOut} />
              </Box>
            ) : (
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  py: "20px",
                }}
                onClick={() => router.push("/log-in")}
              >
                Login Now
              </Button>
            )}
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
