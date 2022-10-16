import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import './AButton.css'
import AButtonTheme from './AButtonTheme'

interface IAButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: "text" | "contained" | "outlined" | undefined;
  color?:
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";
  size?: "small" | "medium" | "large" | undefined;
  gradient?: true;
  style?: any;
  className?: string;
  fullWidth?: boolean;
  type?: any;
}

export default function AButton(props: IAButtonProps) {
  const {
    text,
    variant,
    onClick,
    color,
    size,
    gradient,
    style,
    className,
    fullWidth,
    type
  } = props;
  const gradientSx = {
    color: 'white',
    background: 'linear-gradient(90deg, rgba(255,88,0,1) 0%, rgba(198,6,8,1) 80%, rgba(198,6,8,1) 100%)',
    "&:hover": {
      background: 'linear-gradient(5deg, rgba(255,88,0,1) 0%, rgba(198,6,8,1) 15%, rgba(198,6,8,1) 100%)'
    }
  }
  const sx = { ...(gradient && gradientSx), ...style };

  return (
    <ThemeProvider theme={AButtonTheme}>
      <Button
        variant={variant}
        sx={sx}
        color={color}
        onClick={onClick}
        size={size}
        className={`a-button ${className}`}
        fullWidth={fullWidth}
        type={type}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

AButton.defaultProps = {
  variant: "contained",
  color: "secondary",
  size: "small",
  className: "",
  fullWidth: false,
};