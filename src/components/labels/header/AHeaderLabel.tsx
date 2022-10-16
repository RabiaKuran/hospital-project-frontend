// import { Typography } from "@mui/material";
import { ColorPalette } from "../../../theme/ColorPalette";

 
interface IAHeaderLabelProps {
  text?: string;
  color?: ColorPalette;
  children?: any;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  sx?: any;
}

AHeaderLabel.defaultProps={
  color:ColorPalette.black,
  size:3
}

export default function AHeaderLabel(props: IAHeaderLabelProps) {
  const { text, color, size, children, sx } = props;
  const style = { color: color, ...sx };
  let label;

  switch (size) {
    case 1:
      label = (
        <h6 style={style}>
          {text} {children}
        </h6>
      );
      break;
    case 2:
      label = (
        <h5 style={style}>
          {text} {children}
        </h5>
      );
      break;

    case 3:
      label = (
        <h4 style={style}>
          {text} {children}
        </h4>
      );
      break;

    case 4:
      label = (
        <h3 style={style}>
          {text} {children}
        </h3>
      );
      break;

    case 5:
      label = (
        <h2 style={style}>
          {text} {children}
        </h2>
      );
      break;
    case 6:
      label = (
        <h1 style={style}>
          {text} {children}
        </h1>
      );
      break;
    default:
      label = (
        <h5 style={style}>
          {text} {children}
        </h5>
      );
  }

  return label;
}
