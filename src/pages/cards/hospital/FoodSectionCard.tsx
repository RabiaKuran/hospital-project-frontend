import { Stack, LinearProgress, Alert, AlertTitle, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
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

interface IFoodSectionCard {
    
    progress: Boolean;
    button: Boolean;
}
export interface AverageRecencyCltvPRecencyItem {
    urunId: number;
    urunKategori: string;
    urunAdi: string;
    urunAdedi: number;
  }

export default function FoodSectionCard(props: IFoodSectionCard) {
    const {  progress, button } = props;

    const explore = () => {
        RedirectHelper.redirect("/dashboard");
    }
    const [products, setProducts] =useState<ProductsModel[]>();
  const [loading, setLoading] = React.useState(true);
  const [dataSource, setDataSource] = React.useState<any>([]);

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      var products = await ProductsService.getProducts();
      const data: AverageRecencyCltvPRecencyItem[] = [];
      products.forEach((item) => {
        data.push({
          urunId: item.urunId,
          urunKategori: item.urunKategori,
          urunAdi: item.urunAdi,
          urunAdedi: item.urunAdedi,
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


  return (
    <ACard sx={{ marginTop: "12px" }}>
      <AGrid>
        <AGridItem xs={9} sm={12} md={6} xl={6} minWidth={1400}>
          <ImageList sx={{ margin: "12px" }}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">
                Yiyecek-İçecek Listesi
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

              {products?.map((row) => (
                <ATableBody>
                  {row.urunKategori === "Yemek Bölümü" ? (
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
      img: "https://cdn.create.vista.com/api/media/medium/145612497/stock-photo-cups-of-fresh-made-coffee?token=",
      title: "Kahve",
      author: "@erisim",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/180340334/stock-photo-flat-lay-tasty-healthy-breakfast?token=",
      title: "Kahvaltılık",
      author: "@erisim",
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/82344084/stock-photo-cream-soup?token=",
      title: "Mercimek",
      author: "@erisim",
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/198020482/stock-photo-top-view-arranged-vegetarian-cream?token=",
      title: "Vejetaryen Çorbası",
      author: "@erisim",
      cols: 2,
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/200130718/stock-photo-solyanka-soup-cream?token=",
      title: "Çorba",
      author: "@erisim",
      cols: 2,
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/1651806/stock-photo-bean-soup?token=",
      title: "Fasulye Çorbası",
      author: "@erisim",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/5005345/stock-photo-conceptual-image-fresh-juice-pours?token=",
      title: "Meyve Suyu",
      author: "@erisim",
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/173892782/stock-photo-pouring-water?token=",
      title: "Su",
      author: "@erisim",
    }, 
    {
      img: "https://cdn.create.vista.com/api/media/medium/174635602/stock-photo-cups-of-tea?token=",
      title: "Çay",
      author: "@erisim",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/162338786/stock-photo-collage-with-various-fresh-fruits?token=",
      title: "Meyve",
      author: "@erisim",
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/406294672/stock-photo-bowl-spicy-king-oyster-mushroom?token=",
      title: "Pirinç Pilavı",
      author: "@erisim",
    },
    {
      img: "https://cdn.create.vista.com/api/media/medium/543324666/stock-photo-traditional-turkish-bulgur-pilaf-tomato?token=",
      title: "Bulgur Pilavı",
      author: "@erisim",
      cols: 2,
    },
  ];
  