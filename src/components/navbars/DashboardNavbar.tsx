import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import RouteManager from "../../routes";
import BurgerItem from "./BurgerItem";
import ANavbarItem from "./ANavbarItem";
import ANotificationItem from "./ANotificationItem";
import ALogoItem from "./ALogoItem";

const DashboardNavbar = () => {
    return (
        <AppBar
            position="static"
            color="default"
            sx={{
                paddingLeft: "30px",
                boxShadow: "0px 4px 18px -2px #d2d2d2",
                background: "linear-gradient(to right, #14163C 0%, #03217B 79%)",
                height: "7%",
                marginBottom: 1,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ marginTop: 0.7 }}>
                        <ALogoItem />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <BurgerItem></BurgerItem>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "end", marginTop: -5 } }}>
                        {RouteManager().routes.map((route, index) => (
                            <ANavbarItem route={{ ...route }} key={"navbar" + index} />
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <ANotificationItem></ANotificationItem>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default DashboardNavbar;