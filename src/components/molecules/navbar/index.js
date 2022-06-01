import { styled } from "@mui/material/styles";
import { drawerWidth } from "config/constant";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
  width: drawerWidth,
}));
export default DrawerHeader;
