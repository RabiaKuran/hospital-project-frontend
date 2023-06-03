import Card from '@mui/material/Card';

interface IACardProps {
  children: any
  height?: ACardHeight
  sx?: any;
  className?: any;
  onMouseOver?: any;
  onMouseLeave?: any;
}

export enum ACardHeight {
  small = "100%",
  medium = "125%",
  large = "150%",
  xLarge = "175%",
}

export default function ACard(props: IACardProps) {
  const { children, height, sx, className, onMouseOver, onMouseLeave } = props;
  const style = {
    height,
    padding:"5px",
    ...sx,
  };

  return (
    <Card className={className} sx={style} raised onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
    {children}
  </Card>
  );
}

ACard.defaultProps = {
  height: ACardHeight.small
};