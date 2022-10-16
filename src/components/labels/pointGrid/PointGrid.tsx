import { ColorPalette } from '../../../theme/ColorPalette';
import AGrid from '../../grids/AGrid'
import AGridItem from '../../grids/AGridItem'
import AHeaderLabel from "../header/AHeaderLabel";
import Point from '../point/Point';

interface IPointGridProps {
    label: any;
    labelColor?: ColorPalette;
    fill?: ColorPalette;
    size?: any;
}

export default function PointGrid({ label, size, labelColor, fill }: IPointGridProps) {
    return (
        <AGrid  sx={{display: "flex", alignItems: "center"}}>
            <AGridItem xs={2}>
                <Point fill={fill} />
            </AGridItem>
            <AGridItem xs={10}>
                <AHeaderLabel text={label} color={labelColor} size={size} />
            </AGridItem>

        </AGrid>
    );
}

PointGrid.defaultProps = {
    labelColor: ColorPalette.black,
    size: 3
}