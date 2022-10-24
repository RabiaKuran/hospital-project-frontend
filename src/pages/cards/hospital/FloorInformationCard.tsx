import { Stack, LinearProgress, Alert, AlertTitle } from "@mui/material";
import AButton from "../../../components/buttons/AButton";
import AGridItem from "../../../components/grids/AGridItem";
import AdbIcon from '@mui/icons-material/Adb';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import UpdateIcon from '@mui/icons-material/Update';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RedirectHelper from "../../../helper/RedirectHelper";
import CommentIcon from '@mui/icons-material/Comment';

interface IFloorInformationCard {
    alert1: Boolean;
    alert2: Boolean;
    alert3: Boolean;
    alert4: Boolean;
    alert5: Boolean;
    progress: Boolean;
    button: Boolean;
}

export default function FloorInformationCard(props: IFloorInformationCard) {
    const { alert1, alert2, alert3, alert4, alert5, progress, button } = props;

    const explore = () => {
        RedirectHelper.redirect("/patient");
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
                {alert1 &&
                    <Alert icon={<CommentIcon style={{ fontSize: 75, color: "#0073B0" }} />} style={{ fontSize: 30, color: "#0073B0", display: "flex", alignItems: "center", background: "rgba(30,144,255,0.2)", paddingTop: 20, paddingBottom: 20 }}>
                        <AlertTitle style={{ fontSize: 40 }}>Segment Analysis</AlertTitle>
                        Segment analysis is a marketing technique that, based on common characteristics, allows you to split your
                        customers or products into different groups. This in return gives the ability to create tailor-made and
                        relevant advertisement campaigns, products or to optimize overall brand positioning. With the clustering
                        method, you can offer personalized experiences by segmenting your customers.
                    </Alert>

                }
            </AGridItem>
            <AGridItem xs={12}>
                {alert2 &&
                    <Alert icon={<AdbIcon style={{ fontSize: 87, color: "#696969" }} />} style={{ fontSize: 30, color: "#696969", display: "flex", alignItems: "center", background: "rgba(105,105,105,0.2)", paddingTop: 20, paddingBottom: 20 }}>
                        <AlertTitle style={{ fontSize: 40 }}>Hello, I am iUnifier</AlertTitle>
                        I've got your request, I'm going to start working in no time. I am trying to make it as soon
                        as possible, but segment analysis can take a long time.
                    </Alert>
                }
            </AGridItem>
            <AGridItem xs={12}>
                {alert3 &&
                    <Alert id="alert2" icon={<ContentPasteSearchIcon style={{ fontSize: 75, color: "#A64DA6" }} />} style={{ fontSize: 30, color: "#A64DA6", display: "flex", alignItems: "center", background: "rgba(152,45,223,0.1)", paddingTop: 30, paddingBottom: 30 }}>
                        I continue to examine . . .
                    </Alert>
                }
            </AGridItem>
            <AGridItem xs={12}>
                {alert4 &&
                    <Alert id="alert3" icon={<UpdateIcon style={{ fontSize: 75, color: "#FF8C00" }} />} style={{ fontSize: 30, color: "#FF8C00", display: "flex", alignItems: "center", background: "rgba(255,165,0, 0.2)", paddingTop: 30, paddingBottom: 30 }}>
                        It's almost over. I will present the results of the segment analysis you requested.
                    </Alert>
                }
            </AGridItem>
            <AGridItem xs={12}>
                {alert5 &&
                    <Alert id="alert4" icon={<TaskAltIcon style={{ fontSize: 70, color: "#008000" }} />} style={{ fontSize: 30, color: "#008000", display: "flex", alignItems: "center", background: "rgba(49, 180, 45, 0.2)", paddingTop: 30, paddingBottom: 30 }} >
                        IT'S DONE! I AM COMPLETED THE SEGMENT ANALYSIS. YOU CAN SEE THE ANALYSIS RESULTS ON THE CUSTOMER
                        360 DASHBOARD RIGHT NOW...
                    </Alert>
                }
            </AGridItem>
            <AGridItem xs={12}>
                {button &&
                    <AButton
                        className="alert5"
                        text="Start to Explore"
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