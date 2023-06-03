import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import ACard from "../../../components/cards/ACard";
import { Box } from "@mui/material";
import ACardHeader from "../../../components/cards/ACardHeader";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import AGrid from "../../../components/grids/AGrid";
import DateHelper from "../../../helper/DateHelper";
import { ColorPalette } from "../../../theme/ColorPalette";

interface ProductSales {
  productName: string;
  salesCount: number;
}

interface Props {
  productsSales: ProductSales[];
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF19AF",
  "#9EE111",
  "#E1B111",
];

const PercentageDistributionChart: React.FC<Props> = ({ productsSales }) => {
  const totalSalesCount = productsSales.reduce(
    (acc, { salesCount }) => acc + salesCount,
    0
  );

  const data = productsSales.map(({ productName, salesCount }) => ({
    name: productName,
    value: (salesCount / totalSalesCount) * 100,
  }));

  return (
    <>
      <ACard>
        <ACardHeader
          title="İstatistik Pasta Grafiği"
          rightTitle={DateHelper.getCurrentDate()}
          action={
            <InfoDialog headerText={"Bilgi"}>
              <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                Burası her ürün En çok en az satışı içerir
              </p>
            </InfoDialog>
          }
        />
        <AGrid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,

              marginTop: 1,
              position: "relative",
            }}
          >
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={140}
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value.toFixed(2)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>
        </AGrid>
      </ACard>
    </>
  );
};

export default PercentageDistributionChart;
