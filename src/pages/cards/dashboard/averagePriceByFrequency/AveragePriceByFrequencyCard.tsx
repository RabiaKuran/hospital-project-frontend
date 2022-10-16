import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import PropTypes from 'prop-types';
import AveragePriceByFrequencyModel from "../../../../models/averagePriceByFrequency/AveragePriceByFrequencyModel";
import AveragePriceByFrequencyService from "../../../../services/averagePriceByFrequency/AveragePriceByFrequencyService";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface AveragePriceByFrequencyItem {
    frequency: number;
    averagePrice: string;
}

const Colors = [
    ColorPalette.blue,
    ColorPalette.orange,
    ColorPalette.green,
    ColorPalette.red,
    ColorPalette.purple,
];

const getPath = (x: any, y: any, width: any, height: any) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default function AveragePriceByFrequencyCard() {
    const [averagePriceByFrequency, setAveragePriceByFrequency] = useState<AveragePriceByFrequencyModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getAveragePriceByFrequency();
    }, []);

    const getAveragePriceByFrequency = async () => {
        try {
            var averagePriceByFrequency = await AveragePriceByFrequencyService.getAveragePriceByFrequency();
            const data: AveragePriceByFrequencyItem[] = [];
            averagePriceByFrequency.forEach((item) => {
                data.push({
                    frequency: item.frequency,
                    averagePrice: parseFloat(item.avgPrice.toString()).toFixed(2)
                });
            });
            setDataSource(data);
            setAveragePriceByFrequency(averagePriceByFrequency);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard  >
            <ACardHeader
                title={"Average Price by Frequency"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Average Price by Frequency"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is a chart that shows the average product prices by grouping customers according
                            to their frequency. The frequency term here refers to the total number of purchases
                            by our customers.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent sx={{ height: "250px", paddingTop: 0 }}>
                <ResponsiveContainer width="100%" height="108%">
                    <BarChart
                        width={600}
                        height={400}
                        data={dataSource}
                        margin={{
                            top: 30,
                            right: 13,
                            bottom: 5,
                            left: -18
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="frequency" />
                        <YAxis />
                        <Bar dataKey="averagePrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {dataSource.map((entry: any, index: any) => (
                                <Cell key={`cell-${index}`} fill={Colors[index]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ACardContent>
        </ACard>
    );
}