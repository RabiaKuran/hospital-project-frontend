import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import CustomersByClustersService from "../../../../services/customersByClusters/CustomersByClustersService";
import CustomersByClustersModel from "../../../../models/customersByClusters/CustomersByClustersModel";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface CustomersByClustersItem {
    name: string;
    customers: number;
    fill: any;
}

const Colors = [
    ColorPalette.gray,
    ColorPalette.purple,
    ColorPalette.blue,
    ColorPalette.green,
    ColorPalette.darkRed,
    ColorPalette.red,
    ColorPalette.orange,
];

export default function CustomersByClustersCard() {
    const [customersByClusters, setCustomersByClusters] = useState<CustomersByClustersModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getCustomersByClusters();
    }, []);

    const getCustomersByClusters = async () => {
        try {
            var customersByClusters = await CustomersByClustersService.getCustomersByClusters();
            const data: CustomersByClustersItem[] = [];
            customersByClusters.forEach((item, i) => {
                data.push({
                    name: "Cluster " + item.clusters,
                    customers: item.count,
                    fill: Colors[i]
                });
            });
            setDataSource(data);
            setCustomersByClusters(customersByClusters);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <ACard >
            <ACardHeader
                title={"Number of Customers by Clusters"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Number of Customers by Clusters"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is a radial bar chart that shows the total number of customers in the clusters
                            where the customers are located. We can give examples of clustering here, such as
                            shopping frequently, shopping less consistently.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent >
                <span style={{ display: "block", marginTop: "1.2em" }} />
                <RadialBarChart
                    width={490}
                    height={215}
                    innerRadius="10%"
                    outerRadius="80%"
                    data={dataSource}
                    startAngle={180}
                    endAngle={0}
                    style={{
                        paddingBottom: "0px"
                    }}
                    margin={{
                        top: 22,
                        right: 3,
                        bottom: -100,
                        left: 13,
                    }}
                >
                    <RadialBar label={{ fill: '#fff', position: 'insideStart' }} background dataKey='customers' />
                    <Legend iconSize={10} width={100} height={260} layout='vertical' verticalAlign='middle' align="left" />
                    <Tooltip />
                </RadialBarChart>
                <span style={{ display: "block", marginBottom: "-3.5em" }} />
            </ACardContent>
        </ACard>
    );
}