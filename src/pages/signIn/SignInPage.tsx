import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import AButton from "../../components/buttons/AButton";
import RedirectHelper from "../../helper/RedirectHelper";
import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField } from "@mui/material";
import AHeaderLabel from "../../components/labels/header/AHeaderLabel";
import { ColorPalette } from "../../theme/ColorPalette";
import TokenService from "../../services/token/TokenService";
import "../../components/labels/horizontalRule/horizontalRule.css";

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
  }
  return (
    <>
      <Dialog
        open={showError}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"unifierapp.com says"}</DialogTitle>
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
          height: "105vh",
          backgroundImage: `url(${"12.jpg"})`,
        }}
      >
        <AGridItem xs={1} />
        <AGridItem xs={5}
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
              height: "60%",
              width: "100%",
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)",
              borderRadius: "10px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.4rem",
              padding: 3
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
            }}>
              <AHeaderLabel
              text="Unifier"
              size={5}
              color={ColorPalette.white}
              sx={{  height: "5%", fontSize: 52 }}
            />
            <p className="letter" >
              Unifier offers a 360-degree perspective on
              a wide variety of topics, such as shopping preferences, which segment the customer is in
              according to their spending, and products with a high percentage of being sold together.
            
            </p>
            <p className="letter">
              It turns the analyzes made into a dashboard with a user-friendly interface and guides
              companies on issues related to sales policies.
            </p>
            </Box>
          </Box>
        </AGridItem>
        <AGridItem xs={1} />
        <AGridItem
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center"
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
              letterSpacing: "0.4rem",
              padding: 3,
            }}
          >
            <AHeaderLabel
              text="Login Information"
              size={6}
              color={ColorPalette.white}
              sx={{ marginTop: 40, height: "15%" }}
            />
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
              }}
            >
              <>
                <TextField
                  margin="normal"
                  fullWidth
                  id="userName"
                  label="User Name"
                  type='text'
                  autoComplete="none"
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: { color: '#00003f' }
                  }}
                  value={userName}
                  onChange={(e: any) => {
                    setUserName(e.target.value);
                  }}
                  style={{
                    backgroundColor: "#ffffff26 ",
                    width: "80%",
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    display: "center"
                  }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  InputLabelProps={{
                    style: { color: '#fff' }
                  }}
                  InputProps={{
                    style: { color: "#00003f" }
                  }}
                  inputProps={{
                    autoComplete: 'new-password',
                    form: {
                      autoComplete: 'off',
                    },
                  }}
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  style={{
                    backgroundColor: "#ffffff26 ",
                    width: "80%",
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginTop: -18
                  }}
                />
                <AButton
                  text="Sign In"
                  variant="contained"
                  color="primary"
                  style={{
                    background: "linear-gradient(to right, #14163C 0%, #03217B 79%)",
                    textTransform: "uppercase",
                    letterSpacing: "0.2rem",
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
                    marginTop: 30,
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
                    marginTop: 8,
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
        <AGridItem xs={1} />
      </AGrid>
    </>
  );
}