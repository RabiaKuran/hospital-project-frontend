import { ColorPalette } from "../../../theme/ColorPalette";
import CircleIcon from '@mui/icons-material/Circle';

interface IPointProps {
    fill?: ColorPalette;
}

export default function Point({ fill }: IPointProps) {
    return (
       <CircleIcon sx = {{fill, width:"11px", height:"11px"}}/>
    );
}

Point.defaultProps = {
    fill: ColorPalette.albarakaOrange
}