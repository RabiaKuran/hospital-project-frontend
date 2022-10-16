import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import AverageRecencyCltvPRecencyModel from "../../../../models/averageRecencyCltvPRecency/AverageRecencyCltvPRecencyModel";
import AverageRecencyCltvPRecencyService from "../../../../services/averageRecencyCltvPRecency/AverageRecencyCltvPRecencyService";
import AGrid from "../../../../components/grids/AGrid";
import AGridItem from "../../../../components/grids/AGridItem";
import PointGrid from "../../../../components/labels/pointGrid/PointGrid";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface AverageRecencyCltvPRecencyItem {
    label: string;
    averageRecency: number;
    averageRecencyCltvP: number;
}

export default function AverageRecencyCltvPRecencyCard() {
    const [averageRecencyCltvPRecency, setAverageRecencyCltvPRecency] = useState<AverageRecencyCltvPRecencyModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getAverageRecencyCltvPRecency();
    }, []);

    const getAverageRecencyCltvPRecency = async () => {
        try {
            var averageRecencyCltvPRecency = await AverageRecencyCltvPRecencyService.getAverageRecencyCltvPRecency();
            const data: AverageRecencyCltvPRecencyItem[] = [];
            averageRecencyCltvPRecency.forEach((item) => {
                data.push({
                    label: item.label,
                    averageRecency: item.recency,
                    averageRecencyCltvP: item.recencyCltvP,
                });
            });
            setDataSource(data);
            setAverageRecencyCltvPRecency(averageRecencyCltvPRecency);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard  >
            <ACardHeader
                title={"Average Recencies by Labels"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Average Recencies by Labels"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is an area chart that shows the averages of our customers from the last purchase
                            date to the reference date (recency) and the time elapsed between the last shopping date
                            made by our customers and the first shopping date (recency_cltv_p) according to the
                            customer labels.
                        </p>
                    </InfoDialog>}
                sx={{ fonSize: 2 }}
            ></ACardHeader>
            <ACardContent sx={{ height: "300px", paddingTop: 0, marginTop: 1.2, marginBottom: -8 }}>
                <ResponsiveContainer width="100%" height="78%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={dataSource}
                        margin={{
                            top: 8,
                            right: 20,
                            left: -27,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="averageRecency"
                            stackId="1"
                            stroke={ColorPalette.circleFour}
                            fill={ColorPalette.circleFour}
                        />
                        <Area
                            type="monotone"
                            dataKey="averageRecencyCltvP"
                            stackId="1"
                            stroke={ColorPalette.circleOne}
                            fill={ColorPalette.circleOne}
                        />
                    </AreaChart>
                </ResponsiveContainer>
                <AGrid>
                    <AGridItem xs={1} />
                    <AGridItem xs={5} >
                        <PointGrid
                            label={"Average Recency"}
                            fill={ColorPalette.circleFour}
                            labelColor={ColorPalette.circleFour}
                            size={1}
                        />
                    </AGridItem>
                    <AGridItem xs={5} >
                        <PointGrid
                            label={"Average Recency Cltv P"}
                            fill={ColorPalette.circleOne}
                            labelColor={ColorPalette.circleOne}
                            size={1}
                        />
                    </AGridItem>
                    <AGridItem xs={1} />
                </AGrid>
            </ACardContent>
        </ACard>
    );
}