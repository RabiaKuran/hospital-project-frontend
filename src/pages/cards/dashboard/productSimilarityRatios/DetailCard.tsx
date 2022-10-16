import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import DetailModel from '../../../../models/productSimilarityRatios/DetailModel';
import DetailService from '../../../../services/productSimilarityRatios/DetailService';
import ATableCell from '../../../../components/tables/ATableCell';
import ATableHead from '../../../../components/tables/ATableHead';
import ATableRow from '../../../../components/tables/ATableRow';
import ATable from '../../../../components/tables/ATable';
import ATableContainer from '../../../../components/tables/ATableContainer';

export default function DetailCard() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);
    const [detail, setDetail] = React.useState<DetailModel[]>();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getDetail();
    }, []);

    const getDetail = async () => {
        try {
            var detail = await DetailService.getDetail();
            setDetail(detail);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <ATableContainer sx={{ maxHeight: 930 }}>
                <ATable className="basic">
                    <ATableHead>
                        <ATableRow>
                            <ATableCell>Id</ATableCell>
                            <ATableCell>Antecedents</ATableCell>
                            <ATableCell>Consequents</ATableCell>
                            <ATableCell>Antecedent Support</ATableCell>
                            <ATableCell>Consequent Support</ATableCell>
                            <ATableCell>Support</ATableCell>
                            <ATableCell>Confidence</ATableCell>
                            <ATableCell>Lift</ATableCell>
                            <ATableCell>Leverage</ATableCell>
                            <ATableCell>Conviction</ATableCell>
                        </ATableRow>
                    </ATableHead>
                    <TableBody>
                        {detail?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <ATableRow
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        key={row.id}
                                    >
                                        <ATableCell>{row.id}</ATableCell>
                                        <ATableCell>{row.antecedents}</ATableCell>
                                        <ATableCell>{row.consequents}</ATableCell>
                                        <ATableCell>{row.antecedentSupport}</ATableCell>
                                        <ATableCell>{row.consequentSupport}</ATableCell>
                                        <ATableCell>{row.support}</ATableCell>
                                        <ATableCell>{row.confidence}</ATableCell>
                                        <ATableCell>{row.lift}</ATableCell>
                                        <ATableCell>{row.leverage}</ATableCell>
                                        <ATableCell>{row.conviction}</ATableCell>
                                    </ATableRow>
                                );
                            })}
                    </TableBody>
                </ATable>
            </ATableContainer>
            <TablePagination
                rowsPerPageOptions={[25, 50, 100, 500]}
                component="div"
                count={5001}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}