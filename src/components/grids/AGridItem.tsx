import { Grid, Theme } from "@mui/material";
import { SystemProps } from "@mui/system";

interface IAGridItemProps extends SystemProps<Theme> {
  children?: any;
  xs?: number;
  sm?: number;
  md?: number;
  xl?: number;
  sx?: any;
  className?:string;
}

export default function AGridItem(props: IAGridItemProps) {
  const { children } = props;

  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
}