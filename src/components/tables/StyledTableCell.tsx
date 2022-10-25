
import { styled } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import ATableCell from "./ATableCell";
interface IStyledTableCellProps {
    align?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
    children?: any;
    className?: string;
    style?: any;
    colSpan?: number;
}

const StyleTableCell = styled(ATableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        textTransform: "capitalize",
        borderBottom: "3px solid",
        borderColor: "#F9F9FD"
    },
    [`&.${tableCellClasses.body}`]: {
        textTransform: "capitalize",
        borderBottom: "3px solid",
        borderColor: "#F9F9FD"
    }
}));


export default function StyledTableCell(props: IStyledTableCellProps) {
    const { children, align, className, style, colSpan } = props;
    return (
        <StyleTableCell
            colSpan={colSpan}
            align={align}
            style={style}
            className={className}
            {...props}
        >
            {children}
        </StyleTableCell>
    );
}
StyledTableCell.defaultProps = {
    align: "center",
};