import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import RouteManager from "../../routes";
import BurgerItem from "./BurgerItem";
import ANavbarItem from "./ANavbarItem";
import ANotificationItem from "./ANotificationItem";
import AImageItem from "./AImageItem";

const ANavbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        paddingLeft: "3px",
        boxShadow: "0px 4px 18px -2px #d2d2d2",
        background: "linear-gradient(to right, #14163C 0%, #03217B 79%)",
        height: "12%"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{marginTop:-7}}>
            <AImageItem />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} >
            <BurgerItem />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "end",marginTop:"-50px" } }}>
            {RouteManager().routes.map((route, index) => (
              <ANavbarItem route={{ ...route }} key={"navbar" + index} />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ANavbar;
