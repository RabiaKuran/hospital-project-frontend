import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import AGridItem from "../../../../components/grids/AGridItem";
import AButton from "../../../../components/buttons/AButton";
import RedirectHelper from "../../../../helper/RedirectHelper";
import AHeaderLabel from "../../../../components/labels/header/AHeaderLabel";
import '../../../panel/panelPage.css'

export default function CustomerCard() {

    const handleDashboard = () => {
        RedirectHelper.redirect("/patients");
    }

    return (
        <ACard sx={{
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            height: "80vh",
            width: "60vw",
            background: "#fffff",
            "-webkit-box-shadow": "0px 2px 39px 1px rgba(11,4,99,0.93)",
            boxShadow: "0px 2px 50px 20px rgba(206,206,206,0.93)",
            backdropFilter: "blur(8.5px)",
            borderRadius: "10px",
            color: "black",
            letterSpacing: "0.1rem",
            padding: 3
        }} >
            <ACardContent >
                <AGridItem xs={12}>
                    <AHeaderLabel
                        text="HASTALARIM"
                        size={3}
                        color={ColorPalette.darkestBlue}
                        sx={{ display: "flex", justifyContent: "center" }}
                    />
                </AGridItem>
                <AGridItem xs={12}>
                    <img src="hospital-6633776_1920.png" width={"98%"} height={"300px"}
                        style={{
                            marginTop: 10,
                            borderRadius: 10,
                            boxShadow: "#14163C 0px 0px 20px 0px"
                        }}
                    />
                </AGridItem>
                <AGridItem xs={12} marginTop="10px" marginBottom="10px">
                    <p className="font-family:courier;">
                        Buradan <strong>kendi hastalarınız için, oda numaraları, istekleri gibi  </strong>
                        tüm bilgilere ulaşabilirsiniz. Bigilere ulaşabilmek için giriş butonuna tıklayınız.
                    </p>
                </AGridItem>
                <AGridItem xs={12}>
                    <AButton
                        text="GİRİŞ"
                        variant="contained"
                        color="primary"
                        style={{
                            background: "linear-gradient(to right, #14163C 0%, #03217B 79%)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            width: "100%",
                            height: "65px",
                            border: "none",
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={handleDashboard}
                    />
                </AGridItem>
            </ACardContent>
        </ACard>
    );
}