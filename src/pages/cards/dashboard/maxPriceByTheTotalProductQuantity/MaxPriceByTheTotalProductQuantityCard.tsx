import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import AGridItem from "../../../../components/grids/AGridItem";
import PointGrid from "../../../../components/labels/pointGrid/PointGrid";
import AGrid from "../../../../components/grids/AGrid";
import MaxPriceByTheTotalProductQuantityModel from "../../../../models/maxPriceByTheTotalProductQuantity/MaxPriceByTheTotalProductQuantityModel";
import MaxPriceByTheTotalProductQuantityService from "../../../../services/maxPriceByTheTotalProductQuantity/MaxPriceByTheTotalProductQuantityService";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface MaxPriceByTheTotalProductQuantityItem {
    name: string;
    male: number;
    female: number;
}

export default function MaxPriceByTheTotalProductQuantityCard() {
    const [maxPrice, setMaxPrice] = useState<MaxPriceByTheTotalProductQuantityModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getMaxPrice();
    }, []);

    const getMaxPrice = async () => {
        try {
            var maxPrice = await MaxPriceByTheTotalProductQuantityService.getMaxPriceByTheTotalProductQuantity();
            const data: MaxPriceByTheTotalProductQuantityItem[] = [];
            maxPrice.forEach((item) => {
                data.push({
                    name: item.totalProductQuantity.toString(),
                    male: item.maxPriceMale,
                    female: item.maxPriceFemale
                });
            });
            setDataSource(data);
            setMaxPrice(maxPrice);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard  >
            <ACardHeader
                title={"Max Price by the Total Product Quantity"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Max Price by the Total Product Quantity"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            According to the number of products purchased by customers, there is a stacked bar chart
                            that shows the maximum price paid by male and female customers.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent sx={{ height: "300px", paddingTop: 0, marginTop: 3 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={300}
                        height={200}
                        data={dataSource}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"
                            padding={{ left: 30, right: 30 }}
                        />
                        <YAxis
                            axisLine={{ stroke: "#EAF0F4" }}
                            label={{ fill: "blue" }}
                            type="number"
                        />
                        <Tooltip />
                        <Bar
                            dataKey="male"
                            stackId="a"
                            fill={ColorPalette.yellow}
                            radius={[0, 0, 6, 6]}
                            barSize={35}
                        />
                        <Bar
                            dataKey="female"
                            stackId="a"
                            fill={ColorPalette.green}
                            radius={[6, 6, 0, 0]}
                            barSize={35}
                        />
                    </BarChart>
                </ResponsiveContainer>
                <AGrid>
                    <AGridItem xs={4} />
                    <AGridItem xs={2} >
                        <PointGrid
                            label={"Male"}
                            fill={ColorPalette.yellow}
                            labelColor={ColorPalette.yellow}
                            size={2}
                        />
                    </AGridItem>
                    <AGridItem xs={1} />
                    <AGridItem xs={2} >
                        <PointGrid
                            label={"Female"}
                            fill={ColorPalette.green}
                            labelColor={ColorPalette.green}
                            size={2}
                        />
                    </AGridItem>
                    <AGridItem xs={3} />
                </AGrid>
            </ACardContent>
        </ACard>
    );
}