import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import RouteManager, { RouteList,IRouteItem } from "../../routes";
import ANotificationItem from "./ANotificationItem";
import AUserProfileItem from "./UserProfileItem";
import BurgerItem from "./BurgerItem";
import ANavbarItem from "./ANavbarItem";
import { ColorPalette } from "../../theme/ColorPalette";
import SignInNavbarItem from "./SignInNavbarItem";
import SignInIndex from "../../routes/SignInIndex";

const SignInNavbar = () => {


  return (
    <AppBar
      position="static"
      sx={{ 
        paddingLeft: "30px", 
        boxShadow: "0px 4px 18px -2px #d2d2d2", 
        background: "linear-gradient(90deg, rgba(255,88,0,1) 0%, rgba(198,6,8,1) 80%, rgba(198,6,8,1) 90%)",
        height:100
    }}
    >
      <Container maxWidth="xl" style={{backgroundColor:"primary" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <BurgerItem></BurgerItem>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent:"end", marginTop:-8} }}>
            {SignInIndex().routes.map((route, index) => (
              <SignInNavbarItem route={{ ...route }} key={"navbar"+index} />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default SignInNavbar;
