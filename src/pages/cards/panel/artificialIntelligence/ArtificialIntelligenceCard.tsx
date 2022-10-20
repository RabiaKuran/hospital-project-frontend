import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import AGridItem from "../../../../components/grids/AGridItem";
import AButton from "../../../../components/buttons/AButton";
import RedirectHelper from "../../../../helper/RedirectHelper";
import AHeaderLabel from "../../../../components/labels/header/AHeaderLabel";

export default function ArtificialIntelligenceCard() {

    const handleAI = () => {
        RedirectHelper.redirect("/patients");
    }

    return (
        <ACard sx={{
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            height: "67vh",
            width: "60vw",
            background: "#fffff",
            "-webkit-box-shadow": "0px 2px 39px 1px rgba(11,4,99,0.93)",
            boxShadow: "0px 2px 50px 20px rgba(206,206,206,0.93)",
            backdropFilter: "blur(8.5px)",
            borderRadius: "10px",
            color: "black",
            textTransform: "uppercase",
            letterSpacing: "0.4rem",
            padding: 3
        }} >
            <ACardContent >
                <AGridItem xs={12}>
                    <AHeaderLabel
                        text="HASTANE İLE İLGİLİ DURUM BİLGİSİ"
                        size={5}
                        color={ColorPalette.darkestBlue}
                        sx={{ display: "flex", justifyContent: "center", marginTop: -30 }}
                    />
                </AGridItem>
                <AGridItem xs={12}>
                    <img src="33.jpg" width={850} height={350}
                        style={{
                            marginTop: 20,
                            borderRadius: 10,
                            boxShadow: "#14163C 0px 0px 10px 0px"
                        }}
                    />
                </AGridItem>
                <AGridItem xs={12} sx={{ marginTop: -2 }}>
                    <p className="letter">
                        Buradan hastanede bulunan <strong> odaların müsaitliğini, ürünlerin anlık olarak ne kadarının hastane de bulunduğunu </strong>
                        görebilirsiniz.
                    </p>
                </AGridItem>
                <AGridItem xs={12}>
                    <AButton
                        text="BİLGİ"
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
                        onClick={handleAI}
                    />
                </AGridItem>
            </ACardContent>
        </ACard>
    );
}