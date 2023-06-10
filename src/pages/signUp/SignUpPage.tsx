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
} from "@mui/material";
import AHeaderLabel from "../../components/labels/header/AHeaderLabel";
import { ColorPalette } from "../../theme/ColorPalette";
import "../../components/labels/horizontalRule/horizontalRule.css";
import SignUpTokenService from "../../services/token/SignUpTokenService";
import { useFormik } from "formik";
import AInput from "../../components/inputs/AInput";

export default function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const validate = (values: any) => {
    let errors = {};

    if (!values.email) {
      errors = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: () => {
      console.log("submit");
    },
  });

  const handleClose = () => {
    setShowError(false);
    RedirectHelper.redirect("/sign-up");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await SignUpTokenService.getToken(userName, password)
      .then((response) => {
        console.log(response);
        RedirectHelper.redirect("/");
        setUserName("");
        setPassword("");
      })
      .catch(() => {
        setShowError(true);
      });

    console.log("Event: Form Submit");
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
            <strong>
              Username already exists! Please try another username.
            </strong>
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <AGrid
        sx={{
          height: "105vh",
          backgroundImage: `url(${"back.jpg"})`,
        }}
      >
        <AGridItem xs={3.5} />
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
              height: "80%",
              width: "100%",
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)",
              borderRadius: "10px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.1rem",
              padding: 3,
            }}
          >
            <Box
              sx={{
                paddingTop: "15px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "40px",
              }}
            >
              <AHeaderLabel
                text="Register Information"
                size={6}
                color={ColorPalette.white}
                sx={{ height: "15%" }}
              />
            </Box>
            <form
              onSubmit={handleSubmit}
              style={{
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
                width: "100%",
                height: "89%",
                position: "relative",
                justifyContent: "space-around",
              }}
            >
              <AInput
                fullWidth
                id="userName"
                placeholder="User Name"
                name="username"
                type="text"
                autoComplete="off"
                value={userName}
                onChange={(e: any) => {
                  setUserName(e.target.value);
                }}
              />
              <AInput
                fullWidth
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                text="Sign Up"
                variant="contained"
                color="primary"
                type="submit"
                style={{
                  marginTop: "20px",
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
              />
              <Link
                href="/"
                variant="body2"
                color={ColorPalette.white}
                style={{
                  textDecoration: "none",
                  marginTop: 30,
                  marginBottom: 1,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {"Already have an account? Sign In"}
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
            </form>
          </Box>
        </AGridItem>
        <CssBaseline />
        <AGridItem xs={3.5} />
      </AGrid>
    </>
  );
}
