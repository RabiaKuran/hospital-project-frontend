import Table from '@mui/material/Table';

interface IATableProps
{
    size?: "small" | "medium" | undefined;
    children:any;
    className?: string;
    style?: any;
}

export default function ATable(props:IATableProps) {
  const { children, className, style } = props;

  return  <Table sx={{ minWidth: 650 }} className={className} style={style} aria-label="simple table" stickyHeader {...props}>{children}</Table>;
}

ATable.defaultProps = {
    size: 'medium'
}