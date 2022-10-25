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

export default function PatientsCard() {
  const [loading, setLoading] = useState(true);

  const SelectDataSource: any = [{ label: "Ölçek", value: "1" }];

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
            <AGridItem sx={{ marginTop: "15px", marginRight:"30px" }}>
              <ASearch placeholder="Hasta Ara"></ASearch>
            </AGridItem>
          </AGridItem>

          <AGridItem xs={9} sx={{ overflow: "hidden" }} marginTop={3}>
            <AGridItem xs={2}>
              <ASelect dataSource={SelectDataSource} selected={1} />
            </AGridItem>
            <AGridItem xs={8}></AGridItem>
            <ATableContainer sx={{ height: 250 }}>
              <ATable className="basic">
                <ATableHead>
                  <ATableRow>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.gray}>
                        Oda No
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.gray}>
                        Ad Soyad
                      </AHeaderLabel>
                    </HoverStyledTableCell>

                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.gray}>
                        Hasta Adı
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.gray}>
                        Yatış Sebebi
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                  </ATableRow>
                </ATableHead>
                <ATableBody>
                  <HoverStyledTableCell>{"A309"}</HoverStyledTableCell>
                  <HoverStyledTableCell>{"Ecem Kara"}</HoverStyledTableCell>
                  <HoverStyledTableCell>{"Melisa Kara"}</HoverStyledTableCell>
                  <HoverStyledTableCell>
                    {"Böbrek yetmezliği"}
                  </HoverStyledTableCell>
                </ATableBody>
                <ATableBody>
                  <HoverStyledTableCell>{"A305"}</HoverStyledTableCell>
                  <HoverStyledTableCell>{"Ayşe Kara"}</HoverStyledTableCell>
                  <HoverStyledTableCell>{"Can Kara"}</HoverStyledTableCell>
                  <HoverStyledTableCell>
                    {"Böbrek yetmezliği"}
                  </HoverStyledTableCell>
                </ATableBody>
              </ATable>
            </ATableContainer>
          </AGridItem>
        </AGrid>
      </ACardContent>
    </ACard>
  );
}
