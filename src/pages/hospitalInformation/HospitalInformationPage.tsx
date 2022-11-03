import AGridItem from "../../components/grids/AGridItem";
import AGrid from "../../components/grids/AGrid";
import "../../components/labels/horizontalRule/horizontalRule.css";
import AButton from "../../components/buttons/AButton";
import { useState } from "react";
import CltvService from "../../services/artificialIntelligence/CltvService";
import ChurnService from "../../services/artificialIntelligence/ChurnService";
import SegmentService from "../../services/artificialIntelligence/SegmentService";
import CrossSellService from "../../services/artificialIntelligence/CrossSellService";
import AINavbar from "../../components/navbars/AINavbar";
import PersonalProductsCard from "../cards/hospital/PersonalProductsCard";
import FoodSectionCard from "../cards/hospital/FoodSectionCard";
import FloorInformationCard from "../cards/hospital/FloorInformationCard";
import GeneralInformationCard from "../cards/hospital/GeneralInformationCard";

export default function HospitalInformation() {
    const [alert11, setAlert11] = useState<Boolean>(false);
    const [alert12, setAlert12] = useState<Boolean>(false);
    const [alert13, setAlert13] = useState<Boolean>(false);
    const [alert14, setAlert14] = useState<Boolean>(false);
    const [alert15, setAlert15] = useState<Boolean>(false);
    const [progress1, setProgress1] = useState<Boolean>(false);
    const [button1, setButton1] = useState<Boolean>(false);
    const [count1, setCount1] = useState<Boolean>(false);
    const [count11, setCount11] = useState<Boolean>(false);
    const [dataSource1, setDataSource1] = useState<Boolean>(false);

    const [alert21, setAlert21] = useState<Boolean>(false);
    const [alert22, setAlert22] = useState<Boolean>(false);
    const [alert23, setAlert23] = useState<Boolean>(false);
    const [alert24, setAlert24] = useState<Boolean>(false);
    const [alert25, setAlert25] = useState<Boolean>(false);
    const [progress2, setProgress2] = useState<Boolean>(false);
    const [button2, setButton2] = useState<Boolean>(false);
    const [count2, setCount2] = useState<Boolean>(false);
    const [count22, setCount22] = useState<Boolean>(false);
    const [dataSource2, setDataSource2] = useState<Boolean>(false);

    const [alert31, setAlert31] = useState<Boolean>(false);
    const [alert32, setAlert32] = useState<Boolean>(false);
    const [alert33, setAlert33] = useState<Boolean>(false);
    const [alert34, setAlert34] = useState<Boolean>(false);
    const [alert35, setAlert35] = useState<Boolean>(false);
    const [progress3, setProgress3] = useState<Boolean>(false);
    const [button3, setButton3] = useState<Boolean>(false);
    const [count3, setCount3] = useState<Boolean>(false);
    const [count33, setCount33] = useState<Boolean>(false);
    const [dataSource3, setDataSource3] = useState<Boolean>(false);

    const [alert41, setAlert41] = useState<Boolean>(false);
    const [alert42, setAlert42] = useState<Boolean>(false);
    const [alert43, setAlert43] = useState<Boolean>(false);
    const [alert44, setAlert44] = useState<Boolean>(false);
    const [alert45, setAlert45] = useState<Boolean>(false);
    const [progress4, setProgress4] = useState<Boolean>(false);
    const [button4, setButton4] = useState<Boolean>(false);
    const [count4, setCount4] = useState<Boolean>(false);
    const [count44, setCount44] = useState<Boolean>(false);
    const [dataSource4, setDataSource4] = useState<Boolean>(false);

    const handleCltv = () => {
        if (!count11) {
            CltvService.getCltv();
            setCount11(true)
        }
        setDataSource2(false);
        setDataSource3(false);
        setDataSource4(false);
        setDataSource1(true);
        if (!count1) {
            let time = setInterval(() => {
                setProgress1(true)
            }, 0);
            setTimeout(() => {
                clearInterval(time)
                setProgress1(false)
            }, 1);
            setCount1(true)
        }
        setInterval(() => {
            setAlert11(true)
        }, 2);
        setInterval(() => {
            setAlert12(true)
        }, 7);
        setInterval(() => {
            setAlert13(true)
        }, 111);
        setInterval(() => {
            setAlert14(true)
        }, 16);
        setInterval(() => {
            setAlert15(true)
        }, 20);
        setInterval(() => {
            setButton1(true)
        }, 24);

    }

    const handleChurn = () => {
        if (!count22) {
            ChurnService.getChurn();
            setCount22(true)
        }
        setDataSource1(false);
        setDataSource3(false);
        setDataSource4(false);
        setDataSource2(true);
        if (!count2) {
            let time = setInterval(() => {
                setProgress2(true)
            }, 0);
            setTimeout(() => {
                clearInterval(time)
                setProgress2(false)
            }, 2);
            setCount2(true)
        }
        setInterval(() => {
            setAlert21(true)
        }, 3);
        setInterval(() => {
            setAlert22(true)
        }, 7);
        setInterval(() => {
            setAlert23(true)
        }, 1);
        setInterval(() => {
            setAlert24(true)
        }, 1);
        setInterval(() => {
            setAlert25(true)
        }, 2);
        setInterval(() => {
            setButton2(true)
        }, 24);
    }

    const handleSegment = () => {
        if (!count33) {
            SegmentService.getSegment();
            setCount33(true)
        }
        setDataSource1(false);
        setDataSource2(false);
        setDataSource4(false);
        setDataSource3(true);
        if (!count3) {
            let time = setInterval(() => {
                setProgress3(true)
            }, 0);
            setTimeout(() => {
                clearInterval(time)
                setProgress3(false)
            }, 2);
            setCount3(true)
        }
        setInterval(() => {
            setAlert31(true)
        }, 3);
        setInterval(() => {
            setAlert32(true)
        }, 7);
        setInterval(() => {
            setAlert33(true)
        }, 11);
        setInterval(() => {
            setAlert34(true)
        }, 16);
        setInterval(() => {
            setAlert35(true)
        }, 2);
        setInterval(() => {
            setButton3(true)
        }, 24);
    }

    const handleCrossSell = () => {
        if (!count44) {
            CrossSellService.getCrossSell();
            setCount44(true)
        }
        setDataSource1(false);
        setDataSource2(false);
        setDataSource3(false);
        setDataSource4(true);
        if (!count4) {
            let time = setInterval(() => {
                setProgress4(true)
            }, 0);
            setTimeout(() => {
                clearInterval(time)
                setProgress4(false)
            }, 2);
            setCount4(true)
        }
        setInterval(() => {
            setAlert41(true)
        }, 3);
        setInterval(() => {
            setAlert42(true)
        }, 1);
        setInterval(() => {
            setAlert43(true)
        }, 6);
        setInterval(() => {
            setAlert44(true)
        }, 12);
        setInterval(() => {
            setAlert45(true)
        }, 2);
        setInterval(() => {
            setButton4(true)
        }, 24);
    }

    return (
        <>
            <AINavbar />
            <AGrid
                sx={{

                    backgroundColor: "#FAF9F6",
                    padding: 5
                }}
            >
                <AGridItem xs={3} >
                    <AButton
                        text="KİŞİSEL ÜRÜNLER"
                        variant="contained"
                        color="primary"
                        style={{
                            background: "linear-gradient(90deg, rgba(19,98,173,1) 0%, rgba(23,112,199,1) 38%, rgba(21,121,218,1) 68%)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            width: "95%",
                            height: "70px",
                            border: "none",
                            color: "white",
                            fontSize: 17,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={handleCltv}
                    />
                </AGridItem>
                <AGridItem xs={3}>
                    <AButton
                        text="YEMEK KATI"
                        variant="contained"
                        color="primary"
                        style={{
                            background: "linear-gradient(90deg, rgba(19,98,173,1) 0%, rgba(23,112,199,1) 38%, rgba(21,121,218,1) 68%)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            width: "95%",
                            height: "70px",
                            border: "none",
                            color: "white",
                            fontSize: 17,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={handleChurn}
                    />
                </AGridItem>
                <AGridItem xs={3}>
                    <AButton
                        text="KAT BİLGİLERİ"
                        variant="contained"
                        color="primary"
                        style={{
                            background: "linear-gradient(90deg, rgba(19,98,173,1) 0%, rgba(23,112,199,1) 38%, rgba(21,121,218,1) 68%)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            width: "95%",
                            height: "70px",
                            border: "none",
                            color: "white",
                            fontSize: 17,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={handleSegment}
                    />
                </AGridItem>
                <AGridItem xs={3}>
                    <AButton
                        text="GENEL BİLGİLER"
                        variant="contained"
                        color="primary"
                        style={{
                            background: "linear-gradient(90deg, rgba(19,98,173,1) 0%, rgba(23,112,199,1) 38%, rgba(21,121,218,1) 68%)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            width: "95%",
                            height: "70px",
                            border: "none",
                            color: "white",
                            fontSize: 17,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={handleCrossSell}
                    />
                </AGridItem>
                {dataSource1 &&
                    <PersonalProductsCard progress={progress1} button={button1}  />
                }
                {dataSource2 &&
                    <FoodSectionCard  progress={progress2} button={button2} />
                }
                {dataSource3 &&
                    <FloorInformationCard progress={progress3} button={button3} />
                }
                {dataSource4 &&
                    <GeneralInformationCard progress={progress4} button={button4} />
                }
            </AGrid >
        </>
    );
}