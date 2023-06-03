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
import AddPatient from "../../pages/cards/patients/AddPatient";
import AddProduct from "../../pages/cards/hospital/AddProduct";
import ProductUpdate from "../../pages/cards/hospital/ProductUpdate";
import Notifications from "../../pages/cards/notifications/Notifications";
import Statistics from "../../pages/cards/statistics/Statistics";

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
                        <Route path="/add-patient" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddPatient />} />} />
                        <Route path="/add-product" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddProduct />} />} />
                        <Route path="/update-product" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ProductUpdate />} />} />
                        <Route path="/notifications" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Notifications />} />} />
                        <Route path="/Statistics" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Statistics />} />} />

                   </Routes>
                </Box>
            </PanelLayoutRoot>
        </UserContextProvider>
    );
};