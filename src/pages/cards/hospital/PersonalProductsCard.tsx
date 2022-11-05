import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import AGridItem from "../../../components/grids/AGridItem";
import "../../../components/labels/horizontalRule/horizontalRule.css";
import RedirectHelper from "../../../helper/RedirectHelper";
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
import { useState } from "react";
import ProductsModel from "../../../models/products/ProductsModel";
import ProductsService from "../../../services/products/ProductsService";

interface IPersonalProductsCard {
  progress: Boolean;
  button: Boolean;
}

export interface AverageRecencyCltvPRecencyItem {
  urunId: number;
  urunKategori: string;
  urunAdi: string;
  urunAdedi: number;
}

export default function PersonalProductsCard(props: IPersonalProductsCard) {
  const { progress, button } = props;

  const explore = () => {
    RedirectHelper.redirect("/dashboard");
  };

  const [averageRecencyCltvPRecency, setAverageRecencyCltvPRecency] =useState<ProductsModel[]>();
  const [loading, setLoading] = React.useState(true);
  const [dataSource, setDataSource] = React.useState<any>([]);

  React.useEffect(() => {
    getAverageRecencyCltvPRecency();
  }, []);

  const getAverageRecencyCltvPRecency = async () => {
    try {
      var averageRecencyCltvPRecency = await ProductsService.getProducts();
      const data: AverageRecencyCltvPRecencyItem[] = [];
      averageRecencyCltvPRecency.forEach((item) => {
        data.push({
          urunId: item.urunId,
          urunKategori: item.urunKategori,
          urunAdi: item.urunAdi,
          urunAdedi: item.urunAdedi,
        });
      });
      setDataSource(data);
      setAverageRecencyCltvPRecency(averageRecencyCltvPRecency);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ACard sx={{ marginTop: "12px" }}>
      <AGrid>
        <AGridItem xs={9} sm={12} md={6} xl={6} minWidth={1400}>
          <ImageList sx={{ margin: "12px" }}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">
                Kişisel Ürünler Listesi
              </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </AGridItem>
        <AGridItem
          sx={{ overflow: "hidden" }}
          minWidth={"%60"}
          marginTop={3}
          xs={4}
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
                </ATableRow>
              </ATableHead>

              {averageRecencyCltvPRecency?.map((row) => (
                <ATableBody>
                  {row.urunKategori === "Kişisel Bölüm" ? (
                    <ATableRow
                      sx={{
                        ":hover": {
                          backgroundColor: "#F9F9FD",
                        },
                      }}
                    >
                      <HoverStyledTableCell>{row.urunId}</HoverStyledTableCell>
                      <HoverStyledTableCell>
                        {row.urunKategori}
                      </HoverStyledTableCell>
                      <HoverStyledTableCell>{row.urunAdi}</HoverStyledTableCell>
                      <HoverStyledTableCell>
                        {row.urunAdedi}
                      </HoverStyledTableCell>
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
    </ACard>
  );
}

const itemData = [
  {
    img: "https://www.vitateks.com/images/havlu4.jpg",
    title: "Havlu",
    author: "@erisim",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.vitateks.com/images/nevresim12.jpg",
    title: "Nevresim",
    author: "@erisim",
  },

  {
    img: "https://www.vitateks.com/images/carsaf4.jpg",
    title: "Çarşaf",
    author: "@erisim",
    cols: 2,
  },
  {
    img: "https://www.vitateks.com/images/yastik1.jpg",
    title: "Yastık",
    author: "@erisim",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://n11scdn.akamaized.net/a1/org/kozmetik-kisisel-bakim/tek-kullanimlik-urunler/ureticiden-500-cift-tek-kullanimlik-terlik-hastane-otel-terligi__0429795930745664.jpg",
    title: "Terlik",
    author: "@erisim",
  },
  {
    img: "https://st.myideasoft.com/shop/er/01/myassets/products/383/perfect-hair-washing-cap-jpg-350x350_min.jpg?revision=1519586078",
    title: "Saç Yıkama Bonesi",
    author: "@erisim",
    cols: 2,
  },
  {
    img: "https://www.vitateks.com/images/yorgan3.jpg",
    title: "Yorgan",
    author: "@erisim",
  },
  {
    img: "https://www.vitateks.com/images/kilif10.jpg",
    title: "Yastık Kılıfı",
    author: "@erisim",
  },
  {
    img: "https://www.vitateks.com/images/alez1.jpg",
    title: "Alez",
    author: "@erisim",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://cdn.dermogrup.net/white-glo-dis-macunu-ve-fircasi-seyahat-seti-white-glo-84938-18-O.jpg",
    title: "Diş macunu ve diş fırçası",
    author: "@erisim",
  },
  {
    img: "https://ae01.alicdn.com/kf/H7ce43bf6c43b41b3a10bfaed95921d73m/S-cak-10-ml-ampuan-Seyahat-Boy-Plastik-i-eler-10-ml-PET-Plastik-ampuan-i.jpg_Q90.jpg_.webp",
    title: "Şampuan",
    author: "@erisim",
  },
  {
    img: "https://www.sarfmarket.com.tr/tork-matic-hareketli-havlu-advanced-150-m-6li-fiyati-fotoselli-makine-havlulari-tork-290067-18170-38-K.jpg",
    title: "Peçete",
    author: "@erisim",
    cols: 2,
  },
];
