import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { PanelLayout } from "./components/layouts/PanelLayout";
import SignInPage from "./pages/signIn/SignInPage";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper />
      </ThemeProvider>
    </Router>
    
  );
}

function AppWrapper() {
  const location = useLocation();
  const getLayout = () => {
    if (location.pathname === "/") return <SignInPage />;
    else return <PanelLayout />;
  };

  return <>{getLayout()}</>;
}

export default App;