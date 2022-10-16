import ACard from "../../../../components/cards/ACard";
import ACardContent from "../../../../components/cards/ACardContent";
import { ColorPalette } from "../../../../theme/ColorPalette";
import { useState, useEffect } from "react";
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";
import ACardHeader from "../../../../components/cards/ACardHeader";
import DateHelper from "../../../../helper/DateHelper";
import CustomerLifetimeValueModel from "../../../../models/customerLifetimeValue/CustomerLifetimeValueModel";
import CustomerLifetimeValueService from "../../../../services/customerLifetimeValue/CustomerLifetimeValueService";
import InfoDialog from "../../../../components/dialogs/InfoDialog";

export default function CustomerLifetimeValueCard() {
    const [customerLifetimeValue, setCustomerLifetimeValue] = useState<CustomerLifetimeValueModel>();
    const [loading, setLoading] = useState(true);
    const data = [
        {
            name: '$1000',
            numberOfCustomers: customerLifetimeValue?.thousand,
            fill: ColorPalette.circleOne
        },
        {
            name: '$5000',
            numberOfCustomers: customerLifetimeValue?.fiveThousand,
            fill: ColorPalette.circleTwo
        },
        {
            name: '$10000',
            numberOfCustomers: customerLifetimeValue?.tenThousand,
            fill: ColorPalette.circleThree
        },
        {
            name: '$15000',
            numberOfCustomers: customerLifetimeValue?.fifteenThousand,
            fill: ColorPalette.circleFour
        },
        {
            name: '$20000',
            numberOfCustomers: customerLifetimeValue?.twentyThousand,
            fill: ColorPalette.circleFive
        },
        {
            name: '$25000',
            numberOfCustomers: customerLifetimeValue?.twentyfiveThousand,
            fill: ColorPalette.circleSix
        },
        {
            name: '$30000',
            numberOfCustomers: customerLifetimeValue?.thirtyThousand,
            fill: ColorPalette.circleSeven
        },
    ];

    useEffect(() => {
        getCustomerLifetimeValue();
    }, []);

    const getCustomerLifetimeValue = async () => {
        try {
            var customerLifetimeValue = await CustomerLifetimeValueService.getCustomerLifetimeValue();
            setCustomerLifetimeValue(customerLifetimeValue);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ACard >
            <ACardHeader
                title={"Customer Lifetime Value"}
                rightTitle={DateHelper.getCurrentDate()}
                action={
                    <InfoDialog
                        headerText={"Customer Lifetime Value"}>
                        <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                            There is a radial bar chart that shows how much money all customers spend on average.
                            It shows the total number of customers who spend certain amounts of money.
                        </p>
                    </InfoDialog>}
            ></ACardHeader>
            <ACardContent sx={{ height: "300px", paddingTop: 0, marginBottom: -5, marginLeft: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="63%"
                        cy="46%"
                        innerRadius="10%"
                        outerRadius="90%"
                        barSize={10}
                        data={data}

                    >
                        <RadialBar
                            label={{ fill: '#fff', position: 'insideStart' }}
                            background
                            dataKey="numberOfCustomers"
                        />
                        <Legend
                            iconSize={10}
                            layout="vertical"
                            verticalAlign="middle"
                            align="left"
                            width={100}
                            height={200}
                        />
                        <Tooltip />
                    </RadialBarChart>
                </ResponsiveContainer>
            </ACardContent >
        </ACard>
    );
}