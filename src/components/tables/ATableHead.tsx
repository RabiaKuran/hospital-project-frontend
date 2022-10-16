import TableHead from '@mui/material/TableHead';

interface IATableHeadProps
{
    children:any
}

export default function ATableHead(props:IATableHeadProps) {
  const { children } = props;

  return  <TableHead {...props}>{children}</TableHead>;
}
