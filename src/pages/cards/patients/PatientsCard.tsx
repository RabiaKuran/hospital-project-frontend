import AHeaderLabel from "../../../components/labels/header/AHeaderLabel";
import ACard from "../../../components/cards/ACard";
import AGrid from "../../../components/grids/AGrid";
import AGridItem from "../../../components/grids/AGridItem";
import ACardContent from "../../../components/cards/ACardContent";
import { useEffect, useState } from "react";
import ACardHeader from "../../../components/cards/ACardHeader";
import { ColorPalette } from "../../../theme/ColorPalette";
import ATable from "../../../components/tables/ATable";
import ATableContainer from "../../../components/tables/ATableContainer";
import ATableHead from "../../../components/tables/ATableHead";
import ATableRow from "../../../components/tables/ATableRow";
import HoverStyledTableCell from "../../../components/tables/HoverStyledTableCell";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import DateHelper from "../../../helper/DateHelper";
import PatientsModel from "../../../models/patients/PatientsModel";
import PatientsService from "../../../services/patients/PatientsService";
import AButton from "../../../components/buttons/AButton";
import ATableBody from "../../../components/tables/ATableBody";
import ASearchButton from "../../../components/search/ASearchButton";
import RedirectHelper from "../../../helper/RedirectHelper";
import { TablePagination } from "@mui/material";
import ADivider from "../../../components/divider/ADivider";

export interface PatientsItem {
  hId: number;
  radSoyad: string;
  adSoyad: string;
  cadSoyad: string;
  yatisSebebi: string;
  odaNo: string;
}

export default function PatientsCard() {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState<PatientsModel[]>();
  const [dataSource, setDataSource] = useState<any>([]);
  const [patientName, setPatientName] = useState<any>();
  const [search, setSearch] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    getPatients();
  }, [patientName]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchedVal: any) => {
    setPatientName(searchedVal);
  };
  const handleClick = () => {
    setSearch(2);
  };
  const addPatient = () => {
    RedirectHelper.redirect("/add-patient");
  };

  const getPatients = async () => {
    try {
      var patients = await PatientsService.getPatients();
      const data: PatientsItem[] = [];
      patients.forEach((item) => {
        data.push({
          hId: item.hId,
          radSoyad: item.radSoyad,
          adSoyad: item.adSoyad,
          cadSoyad: item.cadSoyad,
          yatisSebebi: item.yatisSebebi,
          odaNo: item.odaNo,
        });
      });
      setDataSource(data);
      setPatients(patients);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ACard>
      <ACardHeader
        title="Hastalarım"
        rightTitle={DateHelper.getCurrentDate()}
        action={
          <InfoDialog headerText={"Hasta Bilgi"}>
            <p style={{ fontSize: 20, color: ColorPalette.gray }}>
              Burası hastalara ait yatış bilgilerini gösterir
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
              ></ASearchButton>
            </AGrid>
            <AGrid>
              <AButton
                className="b-button"
                text="YENI HASTA KAYIT"
                fullWidth
                onClick={addPatient}
              ></AButton>
            </AGrid>
          </AGridItem>

          <AGridItem xs={8} sx={{ overflow: "hidden" }}>
            <ATableContainer>
              <ATable className="basic">
                <ATableHead>
                  <ATableRow>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Oda No
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Ad Soyad
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Refakatçi Adı Soyadı
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Yatış Sebebi
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Sorumlu Hemşire
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                  </ATableRow>
                </ATableHead>
                {patients
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <ATableBody>
                      {search === 1 ? (
                        <ATableRow>
                          <HoverStyledTableCell>
                            {row.odaNo}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.adSoyad}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.radSoyad}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.yatisSebebi}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.cadSoyad}
                          </HoverStyledTableCell>
                        </ATableRow>
                      ) : row.adSoyad === patientName ? (
                        <ATableRow>
                          <HoverStyledTableCell>
                            {row.odaNo}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.adSoyad}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.radSoyad}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.yatisSebebi}
                          </HoverStyledTableCell>
                          <HoverStyledTableCell>
                            {row.cadSoyad}
                          </HoverStyledTableCell>
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
            {search === 3 ? (
              <AGridItem>Aradığınız kişi bulunamadı</AGridItem>
            ) : (
              <AGridItem></AGridItem>
            )}
          </AGridItem>
        </AGrid>
      </ACardContent>
    </ACard>
  );
}
