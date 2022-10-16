import { Grid, Theme ,GridDirection} from "@mui/material";
import { SystemProps } from "@mui/system";

interface IAGridProps extends SystemProps<Theme> {
  children?: any;
  sx?: any;
  spacing?: number;
  direction?: GridDirection;
}

export default function AGrid(props: IAGridProps) {
  const { children, sx, spacing ,...other} = props;
  const space = { spacing: spacing ? spacing : 2 };

  return (
    <Grid container sx={sx} {...space} {...other} >
      {children}
    </Grid>
  );
}