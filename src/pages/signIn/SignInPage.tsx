import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import AButton from "../../components/buttons/AButton";
import RedirectHelper from "../../helper/RedirectHelper";
import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import AHeaderLabel from "../../components/labels/header/AHeaderLabel";
import { ColorPalette } from "../../theme/ColorPalette";
import TokenService from "../../services/token/TokenService";
import "../../components/labels/horizontalRule/horizontalRule.css";
import AInput from "../../components/inputs/AInput";

export default function SignInPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSignIn = async () => {
    await TokenService.getToken(userName, password)
      .then((response) => {
        window.localStorage.setItem("token", response.accessToken);
        RedirectHelper.redirect("/panel");
        setUserName("");
        setPassword("");
      })
      .catch(() => {
        setShowError(true);
      });
  };

  const handleClose = () => {
    RedirectHelper.redirect("/");
    setShowError(false);
  };
  return (
    <>
      <Dialog
        open={showError}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"unifierapp.com says"}
        </DialogTitle>
        <DialogContent>
          <Alert severity="info">
            <strong>Username or password is incorrect please try again.</strong>
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <AGrid
        sx={{
          height: "106vh",
          backgroundImage: `url(${"back.jpg"})`,
        }}
        spacing={2}
      >
        <AGridItem xs={1} />
        <AGridItem
          xs={5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
              height: "65%",
              width: "100%",
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)",
              borderRadius: "10px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.4rem",
              padding: 3,
            }}
          >
            <Box
              component="form"
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  paddingTop: "15px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <AHeaderLabel
                  text="HOSPİTAL"
                  size={5}
                  color={ColorPalette.white}
                  sx={{ height: "5%", fontSize: 52 }}
                />
              </Box>

              <Box sx={{ padding: "5%" }}>
                <img src="bilgiislem.png" width="100%" height="100%" />
              </Box>
            </Box>
          </Box>
        </AGridItem>
        <AGridItem xs={1} />
        <AGridItem
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
              height: "75%",
              width: "100%",
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)",
              borderRadius: "10px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.1rem",
              padding: 3,
              position: "relative",
            }}
            component="form"
          >
            <Box
              sx={{
                paddingTop: "15px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <AHeaderLabel
                text="Login Information"
                size={6}
                color={ColorPalette.white}
                sx={{ marginTop: 30, height: "15%", marginBottom: 20 }}
              />
            </Box>

            <Box
              component="form"
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                height: "89%",
                width: "100%",
                position: "relative",
              }}
            >
              <>
                <AInput
                  fullWidth
                  placeholder={"User Name"}
                  type="text"
                  autoComplete="none"
                  value={userName}
                  onChange={(e: any) => {
                    setUserName(e.target.value);
                  }}
                />
                <AInput
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  inputProps={{
                    autoComplete: "new-password",
                    form: {
                      autoComplete: "off",
                    },
                  }}
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
                <AButton
                  text="Sign In"
                  variant="contained"
                  color="primary"
                  style={{
                    background:
                      "linear-gradient(to right, #14163C 0%, #03217B 79%)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1rem",
                    width: "65%",
                    height: "13%",
                    border: "none",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    borderRadius: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={handleSignIn}
                />
                <Link
                  href="/sign-up"
                  variant="body2"
                  color={ColorPalette.white}
                  style={{
                    textDecoration: "none",
                    marginTop: 40,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
                <span className="rule"></span>
                <Link
                  href="/contact-us"
                  variant="body2"
                  color={ColorPalette.white}
                  style={{
                    textDecoration: "none",
                    marginTop: 1,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"Contact Us"}
                </Link>
              </>
            </Box>
          </Box>
        </AGridItem>
        <CssBaseline />
      </AGrid>
    </>
  );
}
