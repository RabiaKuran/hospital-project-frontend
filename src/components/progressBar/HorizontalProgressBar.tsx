import { ColorPalette } from "../../theme/ColorPalette";
import { SizePalette } from "../../theme/SizePalette";

interface IProgressBarProps {
    label1: any;
    label2: any;
    fillParent?: ColorPalette;
    fillChild?: ColorPalette;
    width?: SizePalette;
    height?: SizePalette;
}

export default function HorizontalProgressBar(props: IProgressBarProps) {

    const { label1, label2, fillParent, fillChild, width, height } = props;

    const color = { color: `${fillChild}`, fontSize: 0 }

    const Parentdiv = {
        height: parseInt(`${height}`),
        width: parseInt(`${width}`),
        borderRadius: 40,
        backgroundColor: `${fillParent}`
    }

    const Childdiv = {
        height: parseInt(`${height}`),
        width: parseFloat(`${label1}`) * (parseInt(`${width}`) / (label1 + label2)),
        borderRadius: 70,
        backgroundColor: `${fillChild}`
    };

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={color}
                >{`%${label1}`}</span>
            </div>
        </div>
    );
}

HorizontalProgressBar.defaultProps = {
    height: SizePalette.size1,
    width: SizePalette.size2,
    fillParent: ColorPalette.spunGray,
    fillChild: ColorPalette.darkBlue
}