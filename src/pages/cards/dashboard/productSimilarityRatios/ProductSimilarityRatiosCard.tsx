import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import AGridItem from "../../../../components/grids/AGridItem";
import PointGrid from "../../../../components/labels/pointGrid/PointGrid";
import AGrid from "../../../../components/grids/AGrid";
import ProductSimilarityRatiosModel from "../../../../models/productSimilarityRatios/ProductSimilarityRatiosModel";
import ProductSimilarityRatiosService from "../../../../services/productSimilarityRatios/ProductSimilarityRatiosService";
import ADialog from "../../../../components/dialogs/ADialog";
import DetailCard from "./DetailCard";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export interface ProductSimilarityRatiosItem {
    name: string;
    support: number;
    confidence: number;
}

export default function ProductSimilarityRatiosCard() {
    const [productSimilarityRatios, setProductSimilarityRatios] = useState<ProductSimilarityRatiosModel[]>();
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        getProductSimilarityRatios();
    }, []);

    const getProductSimilarityRatios = async () => {
        try {
            var productSimilarityRatios = await ProductSimilarityRatiosService.getProductSimilarityRatios();
            const data: ProductSimilarityRatiosItem[] = [];
            productSimilarityRatios.forEach((item) => {
                data.push({
                    name: item.antecedents + "--" + item.consequents,
                    support: item.support,
                    confidence: item.confidence
                });
            });
            setDataSource(data);
            setProductSimilarityRatios(productSimilarityRatios);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard  >
            <ACardHeader
                title={"Product Similarity Ratios"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Product Similarity Ratios"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is a composed chart that compares the two products and shows the support and
                            confidence values. The support value here refers to the probability of two
                            products being seen together; confidence refers to the similarity of two products.
                            In addition, the detail button is located above the graph. By clicking on the Detail button, there
                            is a pop-up screen showing a detailed list of other variables in the comparison between
                            the two products.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent sx={{ height: "360px", paddingTop: 0 }}>
                <AGrid>
                    <AGridItem xs={4} >
                        <ADialog
                            text="Detail"
                            size="medium"
                            color="primary"
                            headerText="Product Similarity Ratios List"
                            style={{ width: 130 }}
                        >
                            <DetailCard />
                        </ADialog>
                    </AGridItem>
                    <AGridItem xs={8} />
                </AGrid>
                <ResponsiveContainer width="107%" height="80%">
                    <ComposedChart
                        width={700}
                        height={400}
                        data={dataSource}
                        margin={{
                            top: 20,
                            right: 80,
                            bottom: 20,
                            left: 5,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis
                            dataKey="name"
                            hide={true}

                        />
                        <YAxis
                            axisLine={{ stroke: "#EAF0F4" }}
                            label={{ fill: "blue" }}
                            type="number"
                            domain={[0, 1]}
                        />
                        <Tooltip />
                        <Bar
                            dataKey="confidence"
                            barSize={25}
                            radius={[6, 6, 6, 6]}
                            fill={ColorPalette.purpleMedium}
                            height={500}
                        />
                        <Line
                            type="monotone"
                            dataKey="support"
                            stroke={ColorPalette.orangeLight}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
                <AGrid>
                    <AGridItem xs={3} />
                    <AGridItem xs={2} >
                        <PointGrid
                            label={"Confidence"}
                            fill={ColorPalette.purpleMedium}
                            labelColor={ColorPalette.purpleMedium}
                            size={2}
                        />
                    </AGridItem>
                    <AGridItem xs={2} />
                    <AGridItem xs={2} sx={{ marginLeft: 4 }} >
                        <PointGrid
                            label={"Support"}
                            fill={ColorPalette.orangeLight}
                            labelColor={ColorPalette.orangeLight}
                            size={2}
                        />
                    </AGridItem>
                    <AGridItem xs={3} />
                </AGrid>
            </ACardContent>
        </ACard>
    );
}