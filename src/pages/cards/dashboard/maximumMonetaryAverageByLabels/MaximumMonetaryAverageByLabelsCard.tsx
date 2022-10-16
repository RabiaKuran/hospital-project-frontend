import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { CartesianGrid, Cell, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import MaximumMonetaryAverageByLabelsModel from "../../../../models/maximumMonetaryAverageByLabels/MaximumMonetaryAverageByLabelsModel";
import MaximumMonetaryAverageByLabelsService from "../../../../services/maximumMonetaryAverageByLabels/MaximumMonetaryAverageByLabelsService";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface MaximumMonetaryAverageByLabelsItem {
  label: string;
  monetaryAverage: number;
}

const Colors = [
  ColorPalette.blue,
  ColorPalette.orange,
  ColorPalette.green,
  ColorPalette.red,
  ColorPalette.purple,
];

export default function MaximumMonetaryAverageByLabelsCard() {
  const [maximumMonetaryAverageByLabels, setMaximumMonetaryAverageByLabels] = useState<MaximumMonetaryAverageByLabelsModel[]>();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    getMaximumMonetaryAverageByLabels();
  }, []);

  const getMaximumMonetaryAverageByLabels = async () => {
    try {
      var maximumMonetaryAverageByLabels = await MaximumMonetaryAverageByLabelsService.getMaximumMonetaryAverageByLabels();
      const data: MaximumMonetaryAverageByLabelsItem[] = [];
      maximumMonetaryAverageByLabels.forEach((item) => {
        data.push({
          label: item.label,
          monetaryAverage: item.monetaryAvg
        });
      });
      setDataSource(data);
      setMaximumMonetaryAverageByLabels(maximumMonetaryAverageByLabels);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ACard  >
      <ACardHeader
        title={"Max Monetary Average By Labels"}
        rightTitle={DateHelper.getCurrentDate()}
        action={
          <InfoDialog
            headerText={"Max Monetary Average By Labels"}>
            <p style={{ fontSize: 20, color: ColorPalette.gray }}>
              The term monetory refers to the total amount of spending as a result of customers' purchases.
              There is a scatter chart that shows the maximum average amount of spending according to customer labels.
            </p>
          </InfoDialog>}
      ></ACardHeader>
      <ACardContent sx={{ height: "300px", paddingTop: 0, marginTop: 3.2, marginBottom: -10 }}>
        <ResponsiveContainer width="100%" height="78%">
          <ScatterChart
            width={500}
            height={400}
            margin={{
              top: 2,
              right: 10,
              left: -18,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="label" name="Label" minTickGap={-20} />
            <YAxis type="number" dataKey="monetaryAverage" name="Max Monetary Average" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={dataSource} fill="#8884d8">
              {dataSource.map((entry: any, index: any) => (
                <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </ACardContent>
    </ACard>
  );
}