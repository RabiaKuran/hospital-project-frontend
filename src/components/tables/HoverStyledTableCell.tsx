import { styled } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import ATableCell from "./ATableCell";
interface IHoverStyledTableCellProps {
    align?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
    children?: any;
    className?: string;
    style?: any;
    colSpan?: number;
}

const HoverStyleTableCell = styled(ATableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        textTransform: "capitalize",
        borderBottom: "3px solid",
        borderColor: "#F9F9FD"
    },
    [`&.${tableCellClasses.body}`]: {

        textTransform: "capitalize",
        borderBottom: "3px solid",
        borderColor: "#F9F9FD",
        color: "#5e6167",
        fontWeight: "bold",
        ":hover": {
            color: "#ff5800",
        }
    }
}));

export default function HoverStyledTableCell(props: IHoverStyledTableCellProps) {
    const { children, align, className, style, colSpan } = props;
    return (
        <HoverStyleTableCell
            colSpan={colSpan}
            align={align}
            style={style}
            className={className}
            {...props}
        >
            {children}
        </HoverStyleTableCell>
    );
}
HoverStyledTableCell.defaultProps = {
    align: "center",
};