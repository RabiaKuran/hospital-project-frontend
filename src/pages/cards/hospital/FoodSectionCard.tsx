import { Stack, LinearProgress, Alert, AlertTitle } from "@mui/material";
import AButton from "../../../components/buttons/AButton";
import AGridItem from "../../../components/grids/AGridItem";
import RedirectHelper from "../../../helper/RedirectHelper";
import CommentIcon from '@mui/icons-material/Comment';

interface IFoodSectionCard {
    alert1: Boolean;
    alert2: Boolean;
    alert3: Boolean;
    alert4: Boolean;
    alert5: Boolean;
    progress: Boolean;
    button: Boolean;
}

export default function FoodSectionCard(props: IFoodSectionCard) {
    const { alert1, alert2, alert3, alert4, alert5, progress, button } = props;

    const explore = () => {
        RedirectHelper.redirect("/dashboard");
    }

    return (
        <>
            <AGridItem xs={12} sx={{ marginTop: 2, marginBottom: 1 }}>
                {progress &&
                    <Stack sx={{ width: '100%' }} spacing={3}>
                        <LinearProgress color="info" style={{ height: 7 }} />
                        <LinearProgress color="error" style={{ height: 7 }} />
                        
                    </Stack>
                }
            </AGridItem>
            <AGridItem xs={12}>
                {alert1 &&
                    <Alert icon={<CommentIcon style={{ fontSize: 75, color: "#0073B0" }} />} style={{ fontSize: 30, color: "#0073B0", display: "flex", alignItems: "center", background: "rgba(30,144,255,0.2)", paddingTop: 20, paddingBottom: 20 }}>
                        <AlertTitle style={{ fontSize: 40 }}>Bilgi</AlertTitle>
                        Beklediğiniz içi teşekkürler.
                    </Alert>

                }
            </AGridItem>
            <AGridItem xs={12}>
                {button &&
                    <AButton
                        className="alert5"
                        text="ÜRÜNLERİ GETİR"
                        variant="contained"
                        color="primary"
                        style={{
                            background: "linear-gradient(90deg, rgba(29,106,10,0.6787757339263831) 0%, rgba(56,124,12,0.6227533249627977) 38%, rgba(84,194,14,1) 68%)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            width: "100%",
                            height: "70px",
                            border: "none",
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                            marginTop: 1
                        }}
                        onClick={explore}
                    />
                }
            </AGridItem>
        </>

    );
}