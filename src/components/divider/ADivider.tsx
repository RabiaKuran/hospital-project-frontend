import Divider from "@mui/material/Divider";
import { ColorPalette } from "../../theme/ColorPalette";

interface IADividerProps {
  textAlign?: "left" | "right" | "center" | undefined;
  children?: any;
  color?: ColorPalette
  style?: any
}
export default function ADivider(props: IADividerProps) {
  const { textAlign, children, color, style } = props;
  return <Divider textAlign={textAlign} color={color} style={style}>{children}</Divider>;
}

ADivider.defaultProps = {
  textAlign: "center",
  color: ColorPalette.blueBerry
};
