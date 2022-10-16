import ACard from "../../../../components/cards/ACard";
import AGrid from "../../../../components/grids/AGrid";
import AGridItem from "../../../../components/grids/AGridItem";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import ABox from "../../../../components/labels/box/ABox";
import NumberOfCustomersModel from "../../../../models/numberOfCustomers/NumberOfCustomersModel";
import NumberOfCustomersService from "../../../../services/numberOfCustomers/NumberOfCustomersService";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import PointGrid from "../../../../components/labels/pointGrid/PointGrid";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

const Colors = [
    ColorPalette.darkBlue,
    ColorPalette.spunGray
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function NumberOfCustomersCard() {
    const [numberOfCustomers, setNumberOfCustomers] = useState<NumberOfCustomersModel>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNumberOfCustomers();
    }, []);

    const getNumberOfCustomers = async () => {
        try {
            var numberOfCustomers = await NumberOfCustomersService.getNumberOfCustomers();
            setNumberOfCustomers(numberOfCustomers);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    const data = [
        { name: 'Male', value: numberOfCustomers?.totalMale },
        { name: 'Female', value: numberOfCustomers?.totalFemale },
    ];

    return (
        <ACard>
            <ACardHeader
                title={"Number of Customers"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Number of Customers"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is a pie chart showing the number of customers grouped by gender.
                            Next to it is a box showing the total number of customers.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent sx={{ height: "250px", paddingTop: 0 }}>
                <AGrid sx={{ marginTop: 0.1 }}>
                    <AGridItem xs={2} />
                    <AGridItem xs={3}>
                        <PointGrid
                            label={"Male"}
                            fill={ColorPalette.darkBlue}
                            labelColor={ColorPalette.darkBlue}
                            size={2}
                        />
                    </AGridItem>
                    <AGridItem xs={2} />
                    <AGridItem xs={4}>
                        <PointGrid
                            label={" Female"}
                            fill={ColorPalette.spunGray}
                            labelColor={ColorPalette.spunGray}
                            size={2}
                        />
                    </AGridItem>
                    <AGridItem xs={1} />
                </AGrid>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart
                        width={400}
                        height={400}
                        margin={{
                            top: -20,
                            right: 30,
                            bottom: 5,
                            left: -140
                        }}
                    >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                <AGrid sx={{ marginTop: -20, marginLeft: 27 }}>
                    <AGridItem xs={6}>
                        <ABox text1={"Total Customers"} text2={numberOfCustomers?.total} />
                    </AGridItem>
                </AGrid>
            </ACardContent>
        </ACard>
    );
}