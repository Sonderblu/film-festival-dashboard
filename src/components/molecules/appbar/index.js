import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "config/constant";
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: theme.spacing(2),
  background: "transparent",
  zIndex: 1202,
  boxShadow: "none",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  color: theme.palette.primary.dark,
}));
export default AppBar;
