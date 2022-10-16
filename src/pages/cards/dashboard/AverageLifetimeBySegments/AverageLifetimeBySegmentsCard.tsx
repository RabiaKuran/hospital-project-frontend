import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import AGrid from "../../../../components/grids/AGrid";
import AGridItem from "../../../../components/grids/AGridItem";
import PointGrid from "../../../../components/labels/pointGrid/PointGrid";
import AverageLifetimeBySegmentsModel from "../../../../models/AverageLifetimeBySegments/AverageLifetimeBySegmentsModel";
import AverageLifetimeBySegmentsService from "../../../../services/AverageLifetimeBySegments/AverageLifetimeBySegmentsService";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface AverageLifetimeBySegmentsItem {
    name: string;
    cltvP: number;
}

const Colors = [
    ColorPalette.pieOne,
    ColorPalette.pieTwo,
    ColorPalette.pieThree
];

export default function AverageLifetimeBySegmentsCard() {
    const [averageLifetimeBySegments, setAverageLifetimeBySegments] = useState<AverageLifetimeBySegmentsModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getAverageLifetimeBySegments();
    }, []);

    const getAverageLifetimeBySegments = async () => {
        try {
            var averageLifetimeBySegments = await AverageLifetimeBySegmentsService.getAverageLifetimeBySegments();
            const data: AverageLifetimeBySegmentsItem[] = [];
            averageLifetimeBySegments.forEach((item) => {
                data.push({
                    name: item.cltvPSegment,
                    cltvP: parseFloat(item.cltvP.toFixed(5))
                });
            });
            setDataSource(data);
            setAverageLifetimeBySegments(averageLifetimeBySegments);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard  >
            <ACardHeader
                title={"Average Lifetime by Segments"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Average Lifetime by Segments"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            To take part in the pie chart, which shows the average lifetime values of customers in the
                            company according to customer segments. The higher the average lifetime value, the better.
                        </p>
                    </InfoDialog>}
                sx={{ fonSize: 2 }}
            ></ACardHeader>
            <ACardContent sx={{ height: "300px", paddingTop: 0, marginTop: 1.2, marginBottom: -8 }}>
                <PieChart width={800} height={400}>
                    <Pie
                        data={dataSource}
                        cx={125}
                        cy={115}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="cltvP"
                        label
                    >
                        {dataSource.map((entry: any, index: any) => (
                            <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <AGrid sx={{ marginTop: -46, marginLeft: 34 }}>
                    {averageLifetimeBySegments?.map((e, i) => (
                        <>
                            <AGridItem xs={3}>
                                <PointGrid
                                    label={e.cltvPSegment}
                                    fill={Colors[i]}
                                    labelColor={Colors[i]}
                                />
                            </AGridItem>
                            <AGridItem xs={9} />
                        </>
                    ))}
                </AGrid>
            </ACardContent>
        </ACard>
    );
}