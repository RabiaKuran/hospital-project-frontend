import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import AverageChurnByClusterNamesModel from "../../../../models/averageChurnByClusterNames/AverageChurnByClusterNamesModel";
import AverageChurnByClusterNamesService from "../../../../services/averageChurnByClusterNames/AverageChurnByClusterNamesService";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface AverageChurnByClusterNamesItem {
    customerId: number;
    prediction: number;
    predProb: number;
}

export default function AverageChurnByClusterNamesCard() {
    const [averageChurnByClusterNames, setAverageChurnByClusterNames] = useState<AverageChurnByClusterNamesModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getAverageChurnByClusterNames();
    }, []);

    const getAverageChurnByClusterNames = async () => {
        try {
            var averageChurnByClusterNames = await AverageChurnByClusterNamesService.getAverageChurnByClusterNames();
            const data: AverageChurnByClusterNamesItem[] = [];
            averageChurnByClusterNames.forEach((item) => {
                data.push({
                    customerId: item.customerId,
                    prediction: item.prediction,
                    predProb: item.predProb
                });
            });
            setDataSource(data);
            setAverageChurnByClusterNames(averageChurnByClusterNames);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard  >
            <ACardHeader
                title={"Churn Risk and Prediction"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Churn Risk and Prediction"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is a radar chart showing the churn risks and prediction values of the top 10 customers.
                            A prediction value of 1 indicates that the customer is churn, and a value of 0 indicates that
                            the customer is not churn. Churn risk describes the likelihood that a customer will stop using
                            or paying for a service.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent sx={{ height: "300px", paddingTop: 0, marginTop: 2, marginBottom: -10 }}>
                <ResponsiveContainer width="100%" height="80%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataSource}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="customerId" />
                        <PolarRadiusAxis />
                        <Radar
                            name="Prediction"
                            dataKey="prediction"
                            stroke={ColorPalette.albarakaOrange}
                            fill={ColorPalette.orange}
                            fillOpacity={0.6}
                        />
                        <Radar
                            name="Churn"
                            dataKey="predProb"
                            stroke={ColorPalette.darkRed}
                            fill={ColorPalette.albarakaOrange}
                            fillOpacity={0.6}
                        />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </ACardContent>
        </ACard>
    );
}