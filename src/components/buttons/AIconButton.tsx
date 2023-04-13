import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { ColorPalette } from "../../theme/ColorPalette";
import "./AButtonRounded.css";
import AButtonTheme from "./AButtonTheme";

interface IAIconButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: "text" | "contained" | "outlined" | undefined;
  size?: "small" | "medium" | "large" | undefined;
  gradient?: true;
  style?: any;
  className?: string;
  fullWidth?: boolean;
  type?: any;
  disabled?: boolean;
  children?: any;
  id?: string;
  tooltipTitle?: any;
  icon?: any;
}

export default function AIconButton(props: IAIconButtonProps) {
  const {
    text,
    variant,
    disabled,
    onClick,
    size,
    gradient,
    style,
    className,
    fullWidth,
    type,
    children,
    id,
    icon,
    tooltipTitle,
  } = props;
  const gradientSx = {
    color: "white",
    background: ColorPalette.background1,
    "&:hover": {
      background: ColorPalette.background2,
    },
  };
  const sx = { ...(gradient && gradientSx), ...style };

  return (
    <ThemeProvider theme={AButtonTheme}>
      <IconButton aria-label="expand row" size="small" onClick={onClick} >
        {icon}
        {children}
      </IconButton>
    </ThemeProvider>
  );
}

AIconButton.defaultProps = {
  variant: "contained",
  color: "secondary",
  size: "small",
  className: "",
  fullWidth: false,

};
