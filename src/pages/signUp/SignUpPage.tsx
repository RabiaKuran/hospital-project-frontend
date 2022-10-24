import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import AButton from "../../components/buttons/AButton";
import RedirectHelper from "../../helper/RedirectHelper";
import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField } from "@mui/material";
import AHeaderLabel from "../../components/labels/header/AHeaderLabel";
import { ColorPalette } from "../../theme/ColorPalette";
import "../../components/labels/horizontalRule/horizontalRule.css";
import SignUpTokenService from "../../services/token/SignUpTokenService";
import { useFormik } from 'formik'

export default function SignUpPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);


    const validate = (values: any) => {
        let errors = {}

        if (!values.email) {
            errors = 'Required'

        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors = 'Invalid email address'

        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate,
        onSubmit: () => {
            console.log("submit")
        },
    });

    const handleClose = () => {
        setShowError(false);
        RedirectHelper.redirect("/sign-up");
    }

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

        console.log('Event: Form Submit');
    };

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
                        <strong>Username already exists! Please try another username.</strong>
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
                            letterSpacing: "0.4rem",
                            padding: 3,
                        }}
                    >
                        <AHeaderLabel
                            text="Register Information"
                            size={6}
                            color={ColorPalette.white}
                            sx={{ marginTop: 40, height: "15%" }}
                        />

                        <form
                            onSubmit={handleSubmit}
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                display: "flex",
                                width: "100%",
                                height: "50%",
                                marginTop: -4
                                

                            }} >
                            <TextField
                            
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="username"
                                type="text"
                                autoComplete='off'
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
                                    display: "center",
                                    marginBottom: 25
                                }}
                            />
                            <TextField
                                fullWidth
                                type="email"
                                name="email"
                                id="email"
                                label="Email Address"
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                InputProps={{
                                    style: { color: "#00003f" }
                                }}
                                style={{
                                    backgroundColor: "#ffffff26 ",
                                    width: "80%",
                                    border: "none",
                                    outline: "none",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    display: "center",
                                    marginBottom: 25
                                }}
                                onChange={formik.handleChange} value={formik.values.email} />
                            <TextField
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                inputProps={{
                                    autoComplete: 'new-password',
                                    form: {
                                        autoComplete: 'off',
                                    },
                                }}
                                InputProps={{
                                    style: { color: "#00003f" },

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
                                    marginBottom: 60
                                }}
                            />
                            <AButton
                                text="Sign Up"
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{
                                    background: "linear-gradient(to right, #14163C 0%, #03217B 79%)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.2rem",
                                    width: "65%",
                                    height: "20%",
                                    border: "none",
                                    color: "white",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    borderRadius: "2rem",
                                    cursor: "pointer",
                                }}
                            />
                        </form>
                        <Link
                            href="/"
                            variant="body2"
                            color={ColorPalette.white}
                            style={{
                                textDecoration: "none",
                                marginTop: 30,
                                marginBottom: 38,
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
                                marginTop: 45,
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        >
                            {"Contact Us"}
                        </Link>
                    </Box>
                </AGridItem>
                <CssBaseline />
                <AGridItem xs={3.5} />
            </AGrid>
        </>
    );
}