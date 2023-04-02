import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import DashboardNavbar from "../../components/navbars/DashboardNavbar";
import PatientsCard from "../cards/patients/PatientsCard";

export default function HomePage() {
  return (
    <>
      <DashboardNavbar />
      <AGrid sx={{ padding: 3 }}>
        {/* 1.row */}

        <AGridItem xs={12} sm={12} md={12} xl={12} minHeight={750}>
          <PatientsCard />
        </AGridItem>

        {/* 2. row */}

        <AGridItem xs={12} sm={6} md={3} xl={3}></AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}></AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}></AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}></AGridItem>
        {/* 3.row */}

        <AGridItem xs={12} sm={6} md={6} xl={6}></AGridItem>
        <AGridItem xs={12} sm={6} md={6} xl={6}></AGridItem>
      </AGrid>
    </>
  );
}
