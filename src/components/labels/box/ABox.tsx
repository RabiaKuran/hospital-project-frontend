import Box from "@mui/material/Box";
import "./aBox.css";
import AHeaderLabel from "../header/AHeaderLabel";
import { ColorPalette } from "../../../theme/ColorPalette";
import AGrid from "../../grids/AGrid";
import AGridItem from "../../grids/AGridItem";

interface IABoxProps {
    text1: string;
    text2: any;
}

export default function ABox(props: IABoxProps) {
    const { text1, text2 } = props;
    return (
        <Box className="box" sx={{ backgroundColor: "#f9f9fd" }}>
            <AGrid>
                <AGridItem xs={12}sx={{marginTop: "-5px", marginLeft: "21px"}}>
                    <AHeaderLabel
                        text={text1}
                        color={ColorPalette.gray}
                        size={1}
                    />
                </AGridItem>
                <AGridItem xs={12} sx={{marginTop: "-8px", marginLeft: "46px"}}>
                    <AHeaderLabel
                        text={text2}
                        color={ColorPalette.gray}
                        size={2}
                    />
                </AGridItem>
            </AGrid>
        </Box >
    );
}