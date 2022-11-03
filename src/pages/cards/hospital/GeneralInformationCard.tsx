import { Stack, LinearProgress, Alert, AlertTitle } from "@mui/material";
import AButton from "../../../components/buttons/AButton";
import AGridItem from "../../../components/grids/AGridItem";
import AdbIcon from '@mui/icons-material/Adb';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import UpdateIcon from '@mui/icons-material/Update';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RedirectHelper from "../../../helper/RedirectHelper";
import CommentIcon from '@mui/icons-material/Comment';

interface IGeneralInformationCard {
    progress: Boolean;
    button: Boolean;
}

export default function GeneralInformationCard(props: IGeneralInformationCard) {
    const { progress, button } = props;

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
                        <LinearProgress color="warning" style={{ height: 7 }} />
                        <LinearProgress color="secondary" style={{ height: 7 }} />
                    </Stack>
                }
            </AGridItem>
            
            <AGridItem xs={12}>
                {button &&
                    <AButton
                        className="alert5"
                        text="Genel Bilgiler"
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