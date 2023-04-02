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
import { useEffect, useState } from "react";
import ProductsModel from "../../../models/products/ProductsModel";
import ProductsService from "../../../services/products/ProductsService";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  AddCircleOutlineIcon,
  RemoveCircleOutlineIcon,
} from "../../../components/icons/Icon";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert } from "@mui/material";

interface IPersonalProductsCard {
  progress: Boolean;
  button: Boolean;
}

export interface ProductsItem {
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

  const [products, setProducts] = useState<ProductsModel[]>();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<any>([]);
  const [count, setCount] = useState(200);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      var products = await ProductsService.getProducts();
      const data: ProductsItem[] = [];
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

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  const addClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const removeClick = () => {
    setCount(count - 1);
    console.log(count);

  };

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <ACard sx={{ marginTop: "12px"}}>
      <AGrid>
      {products?.map((row) => (
                <ATableBody>
                  {row.urunKategori === "Kişisel Bölüm" ? (
                   <AGridItem sx={{ marginLeft: "40px", maxHeight: 600, marginBottom:"30px",marginTop:"30px",marginRight: "20px" }}>
                   <ACard sx={{ maxWidth: 300, maxHeight: 600 }}>
                     <CardHeader
                       action={
                         <IconButton aria-label="settings">
                           <MoreVertIcon />
                         </IconButton>
                       }
                       title={row.urunAdi}
                       subheader="24 Mart 2023"
                     />
                     <CardMedia
                       component="img"
                       height="194"
                       image="https://www.vitateks.com/images/havlu4.jpg"
                       alt="Paella dish"
                     />
                     <CardContent>
                       <Typography variant="h6" color="text.secondary">
                         Mevcut Ürün
                       </Typography>
                     </CardContent>
                     <CardActions>
                       <IconButton onClick={addClick}>
                         <AddCircleOutlineIcon />
                       </IconButton>
                       <Typography variant="h6" color="text.secondary">
                         {row.urunAdedi}
                       </Typography>
                       <IconButton onClick={removeClick}>
                         <RemoveCircleOutlineIcon />
                       </IconButton>
                       <ExpandMore
                         expand={expanded}
                         onClick={handleExpandClick}
                         aria-expanded={expanded}
                         aria-label="show more"
                       >
                         <ExpandMoreIcon />
                       </ExpandMore>
                     </CardActions>
                     <Collapse in={expanded} timeout="auto" unmountOnExit>
                       <CardContent>
                         <Typography variant="h6" color={ColorPalette.red}>
                           Bilgi: +100
                         </Typography>
         
                         <Typography>ÜRÜN BİLGİSİ BURADA BULUNACAK</Typography>
                       </CardContent>
                     </Collapse>
                   </ACard>
                 </AGridItem>
                  ) : (
                    <AGrid></AGrid>
                  )}
                </ATableBody>
              ))}
     
        
        <AGridItem
          sx={{ overflow: "hidden" }}
          minWidth={"%60"}
          marginTop={3}
          xs={6}
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
