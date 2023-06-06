import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../../components/navbars/DashboardNavbar";
import AGrid from "../../../components/grids/AGrid";
import ACard from "../../../components/cards/ACard";
import AGridItem from "../../../components/grids/AGridItem";

import { ColorPalette } from "../../../theme/ColorPalette";
import { TextField, TablePagination, Typography } from "@mui/material";
import AIconButton from "../../../components/buttons/AIconButton";
import ADivider from "../../../components/divider/ADivider";
import AHeaderLabel from "../../../components/labels/header/AHeaderLabel";
import ATable from "../../../components/tables/ATable";
import ATableBody from "../../../components/tables/ATableBody";
import ATableContainer from "../../../components/tables/ATableContainer";
import ATableHead from "../../../components/tables/ATableHead";
import ATableRow from "../../../components/tables/ATableRow";
import HoverStyledTableCell from "../../../components/tables/HoverStyledTableCell";
import NotificationsGetAllModel from "../../../models/notifications/NotificationsGetAllModel";
import NotificationsService from "../../../services/notifications/NotificationsService";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Badge from "@mui/material/Badge";
import NotificationsUpdateService from "../../../services/notifications/NotificationsUpdateService";

export interface NotificationsItem {
  id: number;
  urunId: number;
  urunKategori: string;
  urunAdi: string;
  urunAdedi: number;
  notifications: string;
  tarih: string;
  durum: string;
  quantity: number;
  odaNo: string;
}
export default function Notifications() {
  const [notifications, setNotifications] =
    useState<NotificationsGetAllModel[]>();
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState<any>();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [approvalCount, setApprovalCount] = useState(0);
  const getApprovalCount = () => {
    let count = 0;
    notifications?.forEach((row) => {
      if (row.durum === "Onaylanmadı") {
        count++;
      }
    });
    return count;
  };
  useEffect(() => {
    getNotifications();
  }, []);

  useEffect(() => {
    const count = getApprovalCount();
    console.log(count);
    setApprovalCount(count);
  }, [notifications]);

  const getNotifications = async () => {
    try {
      var products = await NotificationsService.getNotifications();
      const data: NotificationsItem[] = [];
      products.forEach((item) => {
        data.push({
          id: item.id,
          urunId: item.urunId,
          urunKategori: item.urunKategori,
          urunAdi: item.urunAdi,
          urunAdedi: item.urunAdedi,
          tarih: item.tarih,
          notifications: item.notifications,
          durum: item.durum,
          quantity: item.quantity,
          odaNo: item.odaNo,
        });
      });
      setDataSource(data);
      setNotifications(products);
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

  const handleChange = (fieldName: string, value: any) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications?.map((notification) => {
        if (notification.id === edit) {
          return { ...notification, [fieldName]: value };
        }
        return notification;
      });
      return updatedNotifications;
    });
  };

  const handleSave = async (row: NotificationsItem) => {
    try {
      const updatedRow = { ...row, durum: "Onaylandı" };
      await NotificationsUpdateService.updateNotifications(updatedRow);
      console.log("Güncelleme başarılı!");
      setEdit(0);
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <AGrid sx={{ padding: 3 }}>
        {/* 1.row */}

        <AGridItem xs={12} sm={12} md={12} xl={12} minHeight={750}>
          <ACard>
            <AGrid>
              <AGridItem>
                <AGrid>
                  <Typography
                    style={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      fontSize: 20,
                      marginLeft: 40,

                      marginTop: 20,
                    }}
                  >
                    Bildirimler
                  </Typography>

                  <Badge
                    badgeContent={approvalCount}
                    max={999}
                    color="error"
                    style={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      fontSize: 20,
                      marginLeft: 30,
                      marginTop: 37,
                    }}
                  />
                </AGrid>
              </AGridItem>
            </AGrid>

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
                            Oda Numarası
                          </AHeaderLabel>
                        </HoverStyledTableCell>
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
                              {row?.odaNo}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row?.urunId}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row?.urunKategori}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row?.urunAdi}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row?.quantity}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell>
                              {row?.tarih}
                            </HoverStyledTableCell>

                            <HoverStyledTableCell>
                              {row?.notifications}
                            </HoverStyledTableCell>

                            <HoverStyledTableCell>
                              {edit === row?.id ? (
                                <TextField
                                  id="durum"
                                  name="durum"
                                  variant="standard"
                                  style={{ minWidth: "160px" }}
                                  value={row?.durum}
                                  onChange={(e) =>
                                    handleChange("durum", e.target.value)
                                  }
                                  InputProps={{ readOnly: false }}
                                />
                              ) : (
                                <AGridItem>
                                  {row?.durum === "Onaylandı" ? (
                                    <Typography color={ColorPalette.greenn}>
                                      {row?.durum}
                                    </Typography>
                                  ) : (
                                    <>
                                      <Typography color={ColorPalette.red}>
                                        {row?.durum}
                                      </Typography>{" "}
                                    </>
                                  )}
                                </AGridItem>
                              )}
                            </HoverStyledTableCell>
                            <HoverStyledTableCell key={"tableHeader#" + i}>
                              {edit === row?.id ? (
                                <AGridItem>
                                  <AIconButton onClick={() => [setEdit(0)]}>
                                    <CloseIcon
                                      sx={{ color: ColorPalette.red }}
                                    ></CloseIcon>
                                  </AIconButton>

                                  <AIconButton
                                    onClick={() => [handleSave(row)]}
                                  >
                                    <SaveIcon
                                      sx={{ color: ColorPalette.greenn }}
                                    ></SaveIcon>
                                  </AIconButton>
                                </AGridItem>
                              ) : (
                                <AIconButton onClick={() => [setEdit(row?.id)]}>
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
                      count={dataSource?.length}
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
