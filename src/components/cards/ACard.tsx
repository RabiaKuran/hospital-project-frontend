import Card from '@mui/material/Card';

interface IACardProps {
  children: any
  height?: ACardHeight
  sx?: any;
}

export enum ACardHeight {
  small = "100%",
  medium = "125%",
  large = "150%",
  xLarge = "175%",
}

export default function ACard(props: IACardProps) {
  const { children, height,sx } = props;
  const style = {
    height,
    padding:"5px",
    ...sx,
  };

  return (
    <Card sx={style} raised>
      {children}
    </Card>
  );
}

ACard.defaultProps = {
  height: ACardHeight.small
};