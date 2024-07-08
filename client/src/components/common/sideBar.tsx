// components/Sidebar.js
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import * as React from "react";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const drawerWidth = 240;

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
  ...theme.mixins.toolbar,
}));



interface SidebarProps {
  dummyList: {
    to?: string;
    icon?: any;
    title: string;
    subBtn?: {
      to: string,
      title: string,
    }[];
  }[];
  isDrawerOpen: boolean,
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>
}

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

export const Sidebar = ({ dummyList, isDrawerOpen, setIsDrawerOpen }: SidebarProps) => {
 
  const handleDrawerClose = () => {
    setIsDrawerOpen(!isDrawerOpen)
  };

  const [openSubmenu, setOpenSubmenu] = React.useState<string>("");

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prevOpen) => (prevOpen === title ? "" : title));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={isDrawerOpen}>
        <Box sx={{
          height: "100%", background: "linear-gradient(270.59deg, #079759 0.48%, #35C350 99.47%)"
        }}>
          <DrawerHeader>
            {isDrawerOpen && (
              <img
                src={"../../src/assets/images/dashboard-white-logo.svg"}
                alt="logo"
              // style={{ width: "120px" }}
              />
            )}

            <IconButton onClick={handleDrawerClose}>
              {isDrawerOpen ? (
                <ChevronRightIcon sx={{ color: "white" }} />
              ) : (
                <MenuIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {dummyList?.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={() =>
                    item.subBtn ? toggleSubmenu(item.title) : null
                  }
                  sx={{ alignItems: "center" }}
                  {...(item.to ? { to: item.to } : undefined )}
                >
                  <ListItemIcon>
                    {/* <InboxIcon /> */}
                    <img src={item.icon} style={{ width: 20, height: 20 }} />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.title}
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  {item.subBtn &&
                    (openSubmenu === item.title ? (
                      <ExpandLess sx={{ color: "white" }} />
                    ) : (
                      <ExpandMore sx={{ color: "white" }} />
                    ))}
                </ListItemButton>
                {item.subBtn && (
                  <Collapse
                    in={openSubmenu === item.title}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subBtn.map((subItem, subIndex) => (
                        <ListItemButton 
                          key={subIndex} 
                          sx={{ pl: 4 }} 
                          {...(subItem.to ? { to: subItem.to } : undefined )}
                        >
                          <ListItemText
                            primary={subItem.title}
                            style={{ color: "white" }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
