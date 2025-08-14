import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function DrawerMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  const pages = [
    { label: "Home", path: "/" },
    { label: "Company Profile", path: "/company-profile" },
    { label: "Service", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Us", path: "/contact" },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "var(--color-primary)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{ mt: 6, color: "white" }}>
        {pages.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                "&:hover": {
                  backgroundColor: "var(--color-secondary)",
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography fontSize={"1.5rem"}>{item.label}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon fontSize="large" className="text-[var(--color-secondary)]" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
