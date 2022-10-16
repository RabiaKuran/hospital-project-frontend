import TableCell from '@mui/material/TableCell';

interface IATableCellProps
{
    align?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
    children:any;
    className?: string;
    style?: any;
}

export default function ATableCell(props:IATableCellProps) {
  const { children, align, className, style } = props;

  return <TableCell align={align} component='th' scope='row' style={style} className={className} {...props}>{children}</TableCell>;
}

ATableCell.defaultProps = {
    align: "center"
}