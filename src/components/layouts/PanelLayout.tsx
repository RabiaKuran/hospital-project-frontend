import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import RouteManager from "../../routes";
import UserContextProvider from "../../contexts/UserContext";
import PanelPage from "../../pages/panel/PanelPage";
import HomePage from "../../pages/home/HomePage";
import ProtectedRoute, { ProtectedRouteProps } from "../protectedRoute/ProtectedRoute";
import TokenHelper from "../../helper/TokenHelper";
import SignInPage from "../../pages/signIn/SignInPage";
import SignUpPage from "../../pages/signUp/SignUpPage";
import HospitalInformation from "../../pages/hospitalInformation/HospitalInformationPage";

const PanelLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
}));

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: TokenHelper.isValid(),
    authenticationPath: '/',
};

export const PanelLayout = (props: any) => {
    const mainBoxSx = {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        width: "100%",
    };

    return (
        <UserContextProvider>
            <PanelLayoutRoot>
                <Box sx={mainBoxSx}>
                    <Routes>
                        {RouteManager().routes.map((route, index) => (
                            <Route key={"panel" + index} path={route.path} element={route.component} />
                        ))}
                        <Route path="/" element={<SignInPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/panel" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<PanelPage />} />} />
                        <Route path="/patients" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<HomePage />} />} />
                        <Route path="/hospitalInformation" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<HospitalInformation />} />} />
                        <Route path="/menu" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<HospitalInformation />} />} />
                   </Routes>
                </Box>
            </PanelLayoutRoot>
        </UserContextProvider>
    );
};