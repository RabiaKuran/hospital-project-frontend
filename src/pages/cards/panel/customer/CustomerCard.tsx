import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import AGridItem from "../../../../components/grids/AGridItem";
import AButton from "../../../../components/buttons/AButton";
import RedirectHelper from "../../../../helper/RedirectHelper";
import AHeaderLabel from "../../../../components/labels/header/AHeaderLabel";
import "../../../panel/panelPage.css";
import { Box } from "@mui/material";
import AGrid from "../../../../components/grids/AGrid";
import "../customer/CustomerCard.css";
export default function CustomerCard() {
  const handleDashboard = () => {
    RedirectHelper.redirect("/patients");
  };

  return (
    <AGrid spacing={2}>
      <AGridItem className="card">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            height: "20%",

            position: "relative",
          }}
        >
          <ACardContent>
            <AGridItem xs={12}>
              <AHeaderLabel
                text="HASTALARIM"
                size={4}
                color={ColorPalette.darkestBlue}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              />
            </AGridItem>
            <AGridItem
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="hospital-6633776_1920.png"
                width={"100%"}
                style={{
                  marginTop: 10,
                  borderRadius: 10,
                  boxShadow: "#14163C 0px 0px 20px 0px",
                  textAlign: "center",
                  maxHeight: "320px",
                }}
              />
            </AGridItem>
            <AGridItem xs={12} marginTop="20px" marginBottom="20px">
              <p className="font-family:courier;">
                Buradan{" "}
                <strong>
                  kendi hastalarınız için, oda numaraları, istekleri gibi{" "}
                </strong>
                tüm bilgilere ulaşabilirsiniz. Bigilere ulaşabilmek için giriş
                butonuna tıklayınız.
              </p>
            </AGridItem>
            <AGridItem xs={12}>
              <AButton
                text="GİRİŞ"
                variant="contained"
                color="primary"
                style={{
                  background:
                    "linear-gradient(to right, #14163C 0%, #03217B 79%)",
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
        </Box>
      </AGridItem>
    </AGrid>
  );
}
