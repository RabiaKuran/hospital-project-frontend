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
import ASearch from "../../../components/search/ASearch";
import PatientsModel from "../../../models/patients/PatientsModel";
import PatientsService from "../../../services/patients/PatientsService";
import AButton from "../../../components/buttons/AButton";
import ATableBody from "../../../components/tables/ATableBody";


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
  useEffect(() => {
    getPatients();
  }, [patientName]);

  const requestSearch = (searchedVal: any) => {
    setPatientName(searchedVal);   
  };
  const handleClick = () => {
    setSearch(2);
  };

  const handleClick2 = () => {
    setSearch(3);
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
          <AGridItem xs={3}>
            <AGridItem>
              <ASearch
                label="Hasta Ara"
                placeholder="Ad Soyad"
                onChange={(e: any) => requestSearch(e.target.value)}
              ></ASearch>

              <AGridItem marginLeft={37} marginTop={2}>
                <AButton
                  text="Ara"
                  gradient
                  style={{ width: 95, height: 36, borderRadius: 2 }}
                  onClick={handleClick}
                />
              </AGridItem>
            </AGridItem>
          </AGridItem>

          <AGridItem xs={9} sx={{ overflow: "hidden" }} marginTop={3}>
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
                {patients?.map((row) => (
                  <ATableBody>
                    {search === 1 ? (
                      <ATableRow>
                        <HoverStyledTableCell>{row.odaNo}</HoverStyledTableCell>
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
                        <HoverStyledTableCell>{row.odaNo}</HoverStyledTableCell>
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
            {search === 3 ? <AGridItem>
              Aradığınız kişi bulunamadı
            </AGridItem>
            :
            <AGridItem>
            </AGridItem>
            
            }
            
          </AGridItem>
        </AGrid>
      </ACardContent>
    </ACard>
  );
}
