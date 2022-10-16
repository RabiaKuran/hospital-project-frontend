import CardContent from '@mui/material/CardContent';

interface IACardContentProps {
  children: any;
  sx?: any;
}

export default function ACardContent(props: IACardContentProps) {
  const { children, sx } = props;

  return <CardContent sx={sx} {...props}>{children}</CardContent>;
}

