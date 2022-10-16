import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

interface IATableContainerProps
{
    children:any;
    sx?: any;
}

export default function ATableContainer(props:IATableContainerProps) {
  const { children, sx } = props;

  return <TableContainer component={Paper} sx={sx} {...props}>{children}</TableContainer>;
}