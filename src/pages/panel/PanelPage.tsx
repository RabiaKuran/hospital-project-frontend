import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import "../../components/labels/horizontalRule/horizontalRule.css";
import "./panelPage.css";
import ANavbar from "../../components/navbars/ANavbar";
import CustomerCard from "../cards/panel/customer/CustomerCard";
import HospitalInferCard from "../cards/panel/hospitalInferCard/HospitalInferCard";

export default function PanelPage() {
  return (
    <>
      <ANavbar />
      <AGrid
        sx={{
          height: "95vh",
          backgroundColor: "#FAF9F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AGridItem xs={0.75} />
        <AGridItem
          xs={12}
          sm={5}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <CustomerCard />
        </AGridItem>
        <AGridItem xs={0.5}></AGridItem>
        <AGridItem
          xs={12}
          sm={5}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            height: "auto",
            width: "auto"
          }}
        >
          <HospitalInferCard />
        </AGridItem>
        <AGridItem xs={0.75} />
      </AGrid>
    </>
  );
}
