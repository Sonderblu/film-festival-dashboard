import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { drawerWidth } from "config/constant";
import AppBar from "components/molecules/appbar";
import DrawerHeader from "components/molecules/navbar";
import Logo from "asset/logo/logo.png";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    backgroundColor: theme.palette.primary.light,
    flexGrow: 1,
    height: "100vh",
    padding: theme.spacing(3),
    borderRadius: "50px",
    position: "absolute",
    top: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    zIndex: 1201,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    left: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      left: `${drawerWidth}px`,
    }),
  })
);

function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.primary.dark}
            noWrap
            component="div"
          >
            Persistent drawer
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth + 40,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.primary.main,
            width: drawerWidth + 40,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        color="primary"
      >
        <DrawerHeader>
          <Box
            component="img"
            sx={{
              height: 70,
              width: 155,
            }}
            alt="logo"
            src={Logo}
          />
        </DrawerHeader>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
export default Sidebar;
