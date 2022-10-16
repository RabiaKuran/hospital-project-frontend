import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import CustomersByClustersCard from "../cards/dashboard/customersByClusters/CustomersByClustersCard";
import NumberOfCustomersCard from "../cards/dashboard/numberOfCustomers/NumberOfCustomersCard";
import AveragePriceByFrequencyCard from "../cards/dashboard/averagePriceByFrequency/AveragePriceByFrequencyCard";
import MaxPriceByTheTotalProductQuantityCard from "../cards/dashboard/maxPriceByTheTotalProductQuantity/MaxPriceByTheTotalProductQuantityCard";
import ProductSimilarityRatiosCard from "../cards/dashboard/productSimilarityRatios/ProductSimilarityRatiosCard";
import AverageChurnByClusterNamesCard from "../cards/dashboard/averageChurnByClusterNames/AverageChurnByClusterNamesCard";
import CustomerLifetimeValueCard from "../cards/dashboard/customerLifetimeValue/CustomerLifetimeValueCard";
import AverageFrequencyRecencyMonetaryByLabelsCard from "../cards/dashboard/averageRecencyCltvPRecency/AverageRecencyCltvPRecencyCard";
import MaximumMonetaryAverageByLabelsCard from "../cards/dashboard/maximumMonetaryAverageByLabels/MaximumMonetaryAverageByLabelsCard";
import AverageLifetimeBySegmentsCard from "../cards/dashboard/AverageLifetimeBySegments/AverageLifetimeBySegmentsCard";
import DashboardNavbar from "../../components/navbars/DashboardNavbar";

export default function HomePage() {

  return (
    <>
      <DashboardNavbar />
      <AGrid sx={{ padding: 3 }}>
        {/* 1.row */}
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <CustomersByClustersCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <NumberOfCustomersCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <AveragePriceByFrequencyCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <AverageChurnByClusterNamesCard />
        </AGridItem>
        {/* 2. row */}

        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <CustomerLifetimeValueCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <AverageFrequencyRecencyMonetaryByLabelsCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <MaximumMonetaryAverageByLabelsCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={3} xl={3}>
          <AverageLifetimeBySegmentsCard />
        </AGridItem>
        {/* 3.row */}

        <AGridItem xs={12} sm={6} md={6} xl={6}>
          <MaxPriceByTheTotalProductQuantityCard />
        </AGridItem>
        <AGridItem xs={12} sm={6} md={6} xl={6}>
          <ProductSimilarityRatiosCard />
        </AGridItem>
      </AGrid>
    </>

  );
}
