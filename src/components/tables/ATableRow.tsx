import TableRow from '@mui/material/TableRow';

interface IATableRowProps
{
    children:any;
    key?:any;
    sx?: any;
}

export default function ATableRow(props:IATableRowProps) {
  const { key, children, sx } = props;

  return  <TableRow key={key} sx={sx} {...props}>{children}</TableRow>;
}
