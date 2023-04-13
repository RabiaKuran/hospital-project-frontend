import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../../components/navbars/DashboardNavbar";
import AGrid from "../../../components/grids/AGrid";
import ACard from "../../../components/cards/ACard";
import AGridItem from "../../../components/grids/AGridItem";
import ACardHeader from "../../../components/cards/ACardHeader";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import DateHelper from "../../../helper/DateHelper";
import { ColorPalette } from "../../../theme/ColorPalette";
import { TextField, TablePagination, Typography } from "@mui/material";
import AButton from "../../../components/buttons/AButton";
import AIconButton from "../../../components/buttons/AIconButton";
import ADivider from "../../../components/divider/ADivider";
import AHeaderLabel from "../../../components/labels/header/AHeaderLabel";
import ATable from "../../../components/tables/ATable";
import ATableBody from "../../../components/tables/ATableBody";
import ATableContainer from "../../../components/tables/ATableContainer";
import ATableHead from "../../../components/tables/ATableHead";
import ATableRow from "../../../components/tables/ATableRow";
import HoverStyledTableCell from "../../../components/tables/HoverStyledTableCell";
import ProductUpdate from "../hospital/ProductUpdate";
import NotificationsGetAllModel from "../../../models/notifications/NotificationsGetAllModel";
import NotificationsService from "../../../services/notifications/NotificationsService";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export interface NotificationsItem {
  urunId: number;
  urunKategori: string;
  urunAdi: string;
  urunAdedi: number;
  notifications: string;
  tarih: string;
  durum: string;
}
export default function Notifications() {
  const [notifications, setNotifications] =
    useState<NotificationsGetAllModel[]>();
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState<any>();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  

  useEffect(() => {
    getNotifications();
  }, []);
  const getNotifications = async () => {
    try {
      var products = await NotificationsService.getNotifications();
      const data: NotificationsItem[] = [];
      products.forEach((item) => {
        data.push({
          urunId: item.urunId,
          urunKategori: item.urunKategori,
          urunAdi: item.urunAdi,
          urunAdedi: item.urunAdedi,
          tarih: item.tarih,
          notifications: item.notifications,
          durum: item.durum,
        });
      });
      console.log(dataSource);
      setDataSource(data);
      console.log(dataSource);

      setNotifications(products);
      console.log(products);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChange = (fieldName: any, value: any) => {};
  function handleToggleYourList(artworkId: number) {
    console.log(artworkId);
  }
  return (
    <>
      <DashboardNavbar />
      <AGrid sx={{ padding: 3 }}>
        {/* 1.row */}

        <AGridItem xs={12} sm={12} md={12} xl={12} minHeight={750}>
          <ACard>
            <ACardHeader
              title="Bildirimler"
              rightTitle={DateHelper.getCurrentDate()}
              action={
                <InfoDialog headerText={"Bilgi"}>
                  <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                    Burası katlara ait istek bilgilerini içerir.
                  </p>
                </InfoDialog>
              }
            />
            <AGrid>
              <AGridItem
                sx={{ overflow: "hidden" }}
                minWidth={"%80"}
                marginTop={3}
                xs={12}
              >
                <ATableContainer>
                  <ATable className="basic">
                    <ATableHead>
                      <ATableRow>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Ürün Id
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Ürün Kategori
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Ürün Adı
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Ürün Adedi
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Tarih
                          </AHeaderLabel>
                        </HoverStyledTableCell>

                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Notifications
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Durum
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          <AHeaderLabel size={5} color={ColorPalette.black}>
                            Ürün Onaylama
                          </AHeaderLabel>
                        </HoverStyledTableCell>
                      </ATableRow>
                    </ATableHead>

                    {notifications
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, i) => (
                        <ATableBody>
                          <ATableRow
                            sx={{
                              ":hover": {
                                backgroundColor: "#F9F9FD",
                              },
                            }}
                            key={i}
                          >
                            <HoverStyledTableCell>
                              {row.urunId}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row.urunKategori}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row.urunAdi}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row.urunAdedi}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row.tarih}
                            </HoverStyledTableCell>

                            <HoverStyledTableCell>
                              {row.notifications}
                            </HoverStyledTableCell>
                           
                            <HoverStyledTableCell>
                              {edit === row?.urunId ? (
                                <TextField
                                  id="durum"
                                  name="durum"
                                  variant="standard"
                                  style={{ minWidth: "160px" }}
                                  value={row.durum}
                                  onChange={(e) =>
                                    handleChange("durum", e.target.value)
                                  }
                                />
                              ) : (

                                <AGridItem>{row.durum==="Onaylandı" ? ( <Typography color={ColorPalette.greenn}>
                                  {row.durum}
                                </Typography>):( <Typography color={ColorPalette.red}>
                          {row.durum}
                        </Typography>)}</AGridItem>
                              )}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell key={"tableHeader#" + i}>
                              {edit === row?.urunId ? (
                                <AGridItem>
                                  <AIconButton
                                    onClick={() => [
                                      handleToggleYourList(row?.urunId),
                                      setEdit(0),
                                    ]}
                                  >
                                    <CloseIcon
                                      sx={{ color: ColorPalette.red }}
                                    ></CloseIcon>
                                  </AIconButton>

                                  <AIconButton>
                                    <SaveIcon
                                      sx={{ color: ColorPalette.greenn }}
                                    ></SaveIcon>
                                  </AIconButton>
                                </AGridItem>
                              ) : (
                                <AIconButton
                                  onClick={() => [
                                    handleToggleYourList(row?.urunId),
                                    setEdit(row?.urunId),
                                  ]}
                                >
                                  <DriveFileRenameOutlineIcon
                                    sx={{ color: ColorPalette.greenn }}
                                  />
                                </AIconButton>
                              )}
                            </HoverStyledTableCell>
                          </ATableRow>

                          <AGrid></AGrid>
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
          </ACard>
        </AGridItem>
      </AGrid>
    </>
  );
}
