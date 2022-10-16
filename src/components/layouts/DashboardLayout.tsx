import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ANavbar from "../navbars/ANavbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import RouteManager, { IRouteItem, RouteList } from "../../routes";
import UserContextProvider from "../../contexts/UserContext";
import HomePage from "../../pages/home/HomePage";

export const DashboardLayout = (props: any) => {
  const mainBoxSx = {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%",
  };


  return (
    <>
      <UserContextProvider>
        <ANavbar />
        <Box sx={mainBoxSx}>
          <Routes>
            {RouteManager().routes.map((route, index) => (
              <Route key={"dashboard" + index} path={route.path} element={route.component} />
            ))}
            <Route path="/dashboard" element={<HomePage />} />
          </Routes>
        </Box>
      </UserContextProvider>
    </>
  );
};