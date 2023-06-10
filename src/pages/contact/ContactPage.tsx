import {
  Alert,
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AGrid from "../../components/grids/AGrid";
import AGridItem from "../../components/grids/AGridItem";

import AInput from "../../components/inputs/AInput";
import { useRef } from "react";
import AHeaderLabel from "../../components/labels/header/AHeaderLabel";
import AButton from "../../components/buttons/AButton";
import { ColorPalette } from "../../theme/ColorPalette";

const theme = createTheme();

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={false}
      >
        <DialogTitle id="alert-dialog-title">
          {"cloremapp.com says"}
        </DialogTitle>
        <DialogContent>
          <Alert severity="info">
            <strong>
              Username already exists! Please try another username.
            </strong>
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button>Close</Button>
        </DialogActions>
      </Dialog>

      <AGrid
        sx={{
          height: "105vh",
          backgroundImage: `url(${"back.jpg"})`,
        }}
      >
        <AGridItem xs={3.5} />
        <AGridItem xs={5}>
          <AGridItem
           
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component={"form"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,

                marginTop: 4,
                position: "relative",
                background: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                height: "90%",
                width: "100%",

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
                  text="Contact Us"
                  size={6}
                  color={ColorPalette.white}
                  sx={{ height: "15%" }}
                />
              </Box>
              <form
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
                  type="text"
                  name="user_name"
                  placeholder={"Your Full Name"}
                ></AInput>
                <AInput
                  type="email"
                  name="user_email"
                  placeholder={"Your Email Name"}
                ></AInput>
                <AInput
                  name="message"
                  placeholder={"Your Message"}
                  minHeight={100}
                ></AInput>
              </form>

              <AButton type="submit" text="Send" style={{
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
                }}></AButton>
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
                  href="/sign-up"
                  variant="body2"
                  color={ColorPalette.white}
                  style={{
                    textDecoration: "none",
                    marginTop: 2,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
            </Box>
          </AGridItem>
        </AGridItem>
        <CssBaseline />
        <AGridItem xs={3.5} />
      </AGrid>
    </ThemeProvider>
  );
}
