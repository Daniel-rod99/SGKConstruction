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
import { HashLink } from "react-router-hash-link";

interface DrawerMenuProps {
  scrollWithOffset: (el: HTMLElement) => void;
}

export default function DrawerMenu({ scrollWithOffset }: DrawerMenuProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const pages = [
    { label: "Home", path: "/" },
    { label: "Company Profile", path: "/company-profile" },
    { label: "Service", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Us", path: "/contact" },
  ];

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
        <Box
          sx={{
            width: 250,
            height: "100%",
            backgroundColor: "var(--color-primary)",
          }}
          role="presentation"
        >
          <List sx={{ mt: 6, color: "white" }}>
            {pages.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={HashLink}
                  to={item.path}
                  smooth
                  scroll={(el) => {
                    scrollWithOffset(el); // Ajusta el offset
                    setTimeout(() => setOpen(false), 300); // Cierra el drawer
                  }}
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
      </Drawer>
    </div>
  );
}
