import AButton from "../../../components/buttons/AButton";
  import AGridItem from "../../../components/grids/AGridItem";
  import RedirectHelper from "../../../helper/RedirectHelper";
  import React, { useState } from "react";
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
  import ACardHeader from "../../../components/cards/ACardHeader";
  import InfoDialog from "../../../components/dialogs/InfoDialog";
  import DateHelper from "../../../helper/DateHelper";
  import ACardContent from "../../../components/cards/ACardContent";
  import ASearch from "../../../components/search/ASearch";
import EmployeeService from "../../../services/employee/EmployeeService";
import EmployeeModel from "../../../models/employee/EmployeeModel";

  
  interface IGeneralInformationCard {
    progress: Boolean;
    button: Boolean;
  }
  export interface AverageRecencyCltvPRecencyItem {
    adSoyad: string;
    mail: string;
    gorev: string;
    kat: number;
    bolum: string;
    telefon: number;
  }
  
  export default function GeneralInformationCard(props: IGeneralInformationCard) {
    const { progress, button } = props;
  
    const explore = () => {
      RedirectHelper.redirect("/dashboard");
    };
    const [products, setProducts] = useState<EmployeeModel[]>();
    const [loading, setLoading] = React.useState(true);
    const [dataSource, setDataSource] = React.useState<any>([]);
    const [patientName, setPatientName] = useState<any>();
    const [search, setSearch] = useState(1);
  
    React.useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        var products = await EmployeeService.getEmployee();
        const data: AverageRecencyCltvPRecencyItem[] = [];
        products.forEach((item) => {
          data.push({
            adSoyad: item.adSoyad,
            mail: item.mail,
            gorev: item.gorev,
            kat: item.kat,
            bolum: item.bolum,
            telefon: item.telefon,
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
      <ACard sx={{ marginTop: 4, marginLeft: 0.5, minWidth: 2235 }}>
        <ACardHeader
          title="Genel Bilgiler"
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
            <AGridItem xs={3}>
              <AGridItem>
                <ASearch
                  label="Çalışan Ara"
                  placeholder="Çalışan Ad Soyad"
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
                          Ad Soyad
                        </AHeaderLabel>
                      </HoverStyledTableCell>
                      <HoverStyledTableCell>
                        <AHeaderLabel size={5} color={ColorPalette.black}>
                          Bölüm
                        </AHeaderLabel>
                      </HoverStyledTableCell>
                      <HoverStyledTableCell>
                        <AHeaderLabel size={5} color={ColorPalette.black}>
                          Kat
                        </AHeaderLabel>
                      </HoverStyledTableCell>
                      <HoverStyledTableCell>
                        <AHeaderLabel size={5} color={ColorPalette.black}>
                        Görev
                        </AHeaderLabel>
                      </HoverStyledTableCell>
                      <HoverStyledTableCell>
                        <AHeaderLabel size={5} color={ColorPalette.black}>
                          Mail
                        </AHeaderLabel>
                      </HoverStyledTableCell>
                      <HoverStyledTableCell>
                        <AHeaderLabel size={5} color={ColorPalette.black}>
                        Telefon
                        </AHeaderLabel>
                      </HoverStyledTableCell>
                    </ATableRow>
                  </ATableHead>
  
                  {products?.map((row) => (
                    <ATableBody>
                      {search === 1 ? (
                        <ATableRow
                          sx={{
                            ":hover": {
                              backgroundColor: "#F9F9FD",
                            },
                          }}
                        >
                          <HoverStyledTableCell>{row.adSoyad}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.bolum}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.kat}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.gorev}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.mail}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.telefon}</HoverStyledTableCell>
                        </ATableRow>
                      ) : row.adSoyad === patientName ? (
                        <ATableRow
                          sx={{
                            ":hover": {
                              backgroundColor: "#F9F9FD",
                            },
                          }}
                        >
                          <HoverStyledTableCell>{row.adSoyad}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.bolum}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.kat}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.gorev}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.mail}</HoverStyledTableCell>
                          <HoverStyledTableCell>{row.telefon}</HoverStyledTableCell>
                        </ATableRow>
                      ) : (
                        <AGrid></AGrid>
                      )}
                    </ATableBody>
                  ))}
                </ATable>
              </ATableContainer>
            </AGridItem>
          </AGrid>
        </ACardContent>
      </ACard>
    );
  }
  