import AHeaderLabel from "../../../components/labels/header/AHeaderLabel";
import ACard from "../../../components/cards/ACard";
import AGrid from "../../../components/grids/AGrid";
import AGridItem from "../../../components/grids/AGridItem";
import ACardContent from "../../../components/cards/ACardContent";
import { useEffect, useState } from "react";
import ACardHeader from "../../../components/cards/ACardHeader";
import ATableBody from "../../../components/tables/ATableBody";
import { ColorPalette } from "../../../theme/ColorPalette";
import ATable from "../../../components/tables/ATable";
import ATableContainer from "../../../components/tables/ATableContainer";
import ATableHead from "../../../components/tables/ATableHead";
import ASelect from "../../../components/select/ASelect";
import ATableRow from "../../../components/tables/ATableRow";
import HoverStyledTableCell from "../../../components/tables/HoverStyledTableCell";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import DateHelper from "../../../helper/DateHelper";
import ASearch from "../../../components/search/ASearch";
import PatientsModel from "../../../models/patients/PatientsModel";
import PatientsService from "../../../services/patients/PatientsService";
import { TableBody } from "@mui/material";

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

  const SelectDataSource: any = [{ label: "Ölçek", value: "1" }];
  useEffect(() => {
    getPatients();
  }, []);

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
              Bilgi eklenecek
            </p>
          </InfoDialog>
        }
      />

      <ACardContent>
        <AGrid>
          <AGridItem xs={3}>
            <AGridItem sx={{ marginTop: "15px", marginRight: "30px" }}>
              <ASearch placeholder="Hasta Ara"></ASearch>
            </AGridItem>
          </AGridItem>

          <AGridItem xs={9} sx={{ overflow: "hidden" }} marginTop={3}>
            <AGridItem xs={2}>
              <ASelect dataSource={SelectDataSource} selected={1} />
            </AGridItem>
            <AGridItem xs={8}></AGridItem>
            <ATableContainer sx={{ minHeight: 250 }}>
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
                <TableBody>
                  {patients?.map((row) => {
                      return (
                        <ATableRow    >
                          <HoverStyledTableCell>{row.odaNo}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.adSoyad}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.radSoyad}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.yatisSebebi}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.cadSoyad}</HoverStyledTableCell>   
                        </ATableRow>
                      );
                    })}
                </TableBody>
              </ATable>
            </ATableContainer>
          </AGridItem>
        </AGrid>
      </ACardContent>
    </ACard>
  );
}
