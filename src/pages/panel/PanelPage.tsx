import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import "../../components/labels/horizontalRule/horizontalRule.css";
import './panelPage.css'
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
        }}
      >
        <AGridItem xs={1} />
        <AGridItem xs={5}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: -6,
            marginTop: 8
          }}
        >
          <CustomerCard />
        </AGridItem>
        <AGridItem
          xs={5}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 11,
            marginTop: 8
          }}
        >
          <HospitalInferCard/>
        </AGridItem>
        <AGridItem xs={1} />
      </AGrid>
    </>
  );
}
