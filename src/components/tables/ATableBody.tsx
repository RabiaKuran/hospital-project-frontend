import TableBody from '@mui/material/TableBody';

interface IATableBodyProps
{
    children:any
}

export default function ATableBody(props:IATableBodyProps) {
  const { children } = props;

  return  <TableBody {...props}>{children}</TableBody>;
}
