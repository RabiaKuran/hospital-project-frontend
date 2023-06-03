import {
  Stack,
  LinearProgress,
  Alert,
  AlertTitle,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  TablePagination,
} from "@mui/material";
import AButton from "../../../components/buttons/AButton";
import AGridItem from "../../../components/grids/AGridItem";
import RedirectHelper from "../../../helper/RedirectHelper";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState } from "react";
import ProductsModel from "../../../models/products/ProductsModel";
import ProductsService from "../../../services/products/ProductsService";
import ACard from "../../../components/cards/ACard";
import AGrid from "../../../components/grids/AGrid";
import AHeaderLabel from "../../../components/labels/header/AHeaderLabel";
import ATable from "../../../components/tables/ATable";
import ATableBody from "../../../components/tables/ATableBody";
import ATableContainer from "../../../components/tables/ATableContainer";
import ATableHead from "../../../components/tables/ATableHead";
import ATableRow from "../../../components/tables/ATableRow";
import HoverStyledTableCell from "../../../components/tables/HoverStyledTableCell";
import { ColorPalette } from "../../../theme/ColorPalette";
import FloorModel from "../../../models/floor/FloorModel";
import FloorService from "../../../services/floor/FloorService";
import ACardHeader from "../../../components/cards/ACardHeader";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import DateHelper from "../../../helper/DateHelper";
import ACardContent from "../../../components/cards/ACardContent";
import ASearchButton from "../../../components/search/ASearchButton";
import ADivider from "../../../components/divider/ADivider";

interface IFloorInformationCard {
  button: Boolean;
}
export interface AverageRecencyCltvPRecencyItem {
  kat: number;
  odaNo: string;
  durum: string;
  bilgi: string;
}

export default function FloorInformationCard(props: IFloorInformationCard) {
 
  const [products, setProducts] = useState<FloorModel[]>();
  const [loading, setLoading] = React.useState(true);
  const [dataSource, setDataSource] = React.useState<any>([]);
  const [patientName, setPatientName] = useState<any>();
  const [search, setSearch] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      var products = await FloorService.getFloor();
      const data: AverageRecencyCltvPRecencyItem[] = [];
      products.forEach((item) => {
        data.push({
          kat: item.kat,
          odaNo: item.odaNo,
          durum: item.durum,
          bilgi: item.bilgi,
        });
      });
      setDataSource(data);
      setProducts(products);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  const requestSearch = (searchedVal: any) => {
    setPatientName(searchedVal);
  };
  const handleClick = () => {
    setSearch(2);
  };

  const handleClick2 = () => {
    setSearch(3);
  };

  return (
    <ACard sx={{ marginTop: 2, minWidth: "100%" }} >
      <ACardHeader
        title="Kat Bilgileri"
        rightTitle={DateHelper.getCurrentDate()}
        action={
          <InfoDialog headerText={"Bilgi"}>
            <p style={{ fontSize: 20, color: ColorPalette.gray }}>
              Burası katlara ait durum bilgilerini gösterir
            </p>
          </InfoDialog>
        }
      />

      <ACardContent>
        <AGrid>
          <AGridItem xs={4}>
          <AGrid>
              <ASearchButton
                onClick={handleClick}
                onChange={(e: any) => requestSearch(e.target.value)}
                placeholder={"Ara"}
              ></ASearchButton>
            </AGrid>
             
           
          </AGridItem>

          <AGridItem xs={8} sx={{ overflow: "hidden" }}>
            <ATableContainer>
              <ATable className="basic">
                <ATableHead>
                  <ATableRow>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Kat
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Oda no
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Bilgi
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Durum
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                  </ATableRow>
                </ATableHead>

                {products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                  <ATableBody>
                    {search === 1 ? (
                      <ATableRow
                        sx={{
                          ":hover": {
                            backgroundColor: "#F9F9FD",
                          },
                        }}
                      >
                        <HoverStyledTableCell>{row.kat}</HoverStyledTableCell>
                        <HoverStyledTableCell>{row.odaNo}</HoverStyledTableCell>
                        <HoverStyledTableCell>{row.bilgi}</HoverStyledTableCell>
                        <HoverStyledTableCell>{row.durum}</HoverStyledTableCell>
                      </ATableRow>
                    ) : row.odaNo === patientName ? (
                      <ATableRow
                        sx={{
                          ":hover": {
                            backgroundColor: "#F9F9FD",
                          },
                        }}
                      >
                        <HoverStyledTableCell>{row.kat}</HoverStyledTableCell>
                        <HoverStyledTableCell>{row.odaNo}</HoverStyledTableCell>
                        <HoverStyledTableCell>{row.bilgi}</HoverStyledTableCell>
                        <HoverStyledTableCell>{row.durum}</HoverStyledTableCell>
                      </ATableRow>
                    ) : (
                      <AGrid></AGrid>
                    )}
                  </ATableBody>
                ))}
              </ATable>
            </ATableContainer>
            <AGridItem xs={12}>
              <ADivider />
            </AGridItem>
            <AGrid
              sx={{
                alignItems: "right",
                justifyContent: "right",
                marginTop: 1,
              }}
            >
              <AGridItem>
                {" "}
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 100]}
                  component="div"
                  count={dataSource.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </AGridItem>
              <AGridItem></AGridItem>
              <AGridItem></AGridItem>
            </AGrid>
          </AGridItem>
        </AGrid>
      </ACardContent>
    </ACard>
  );
}
