import * as React from "react";
import IconButton from "@mui/material/IconButton";
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
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TablePagination, TextField } from "@mui/material";
import ADivider from "../../../components/divider/ADivider";
import AIconButton from "../../../components/buttons/AIconButton";
import AButton from "../../../components/buttons/AButton";
import ProductUpdate from "./ProductUpdate";
import ASearchButton from "../../../components/search/ASearchButton";
import ACardContent from "../../../components/cards/ACardContent";
import ACardHeader from "../../../components/cards/ACardHeader";


interface IPersonalProductsCard {
  
  button: Boolean;
}

export interface ProductsItem {
  urunId: number;
  urunKategori: string;
  urunAdi: string;
  urunAdedi: number;
  urunBilgi: string;
  urunTarih: string;
  urunResmi: string;
}

export default function PersonalProductsCard(props: IPersonalProductsCard) {
  const [products, setProducts] = useState<ProductsModel[]>();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<any>([]);
  const [count, setCount] = useState(200);
  const [expanded, setExpanded] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState<any>();
  const [productName, setProductName] = useState<any>();
  const [search, setSearch] = useState(1);

  const requestSearch = (searchedVal: any) => {
    setProductName(searchedVal);
  };
  const handleClick = () => {
    console.log("button");
    setSearch(2);
  };
  const handleChange = (fieldName: any, value: any) => {};

  const handleExpandClick = (urunId: any) => {
    setExpanded(!expanded);
    console.log(urunId);
  };

  useEffect(() => {
    getProducts();
  }, [productName]);
  const addPatient = () => {
    RedirectHelper.redirect("/add-product");
  };
  const updatePatient = () => {
    RedirectHelper.redirect("/update-product");
  };
  const notifications = () => {
    RedirectHelper.redirect("/notifications");
  };
  const statistics = () => {
    RedirectHelper.redirect("/statistics");
  };
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
          urunBilgi: item.urunBilgi,
          urunTarih: item.urunTarih,
          urunResmi: item.urunResmi,
        });
      });
      console.log(dataSource);
      setDataSource(data);
      console.log(dataSource);

      setProducts(products);
      console.log(products);
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
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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

  function handleToggleYourList(artworkId: number) {
    console.log(artworkId);
  }

  return (
    <ACard sx={{ marginTop: "12px" }}>
      <AGrid>
        <AGridItem xs={6}>
          <ACardHeader title="Kişisel Ürünler" />
        </AGridItem>
        <AGridItem xs={1} sx={{ marginTop: "20px" }}>
          <AButton
            text="Bildirimler"
            gradient
            style={{
              height: 36,
              borderRadius: 1,
              fontWeight: "bold",
            }}
            className="red-button"
            onClick={notifications}
          />
        </AGridItem>
        <AGridItem xs={1} sx={{ marginTop: "20px" }}>
          <AButton
            text="İstatistik"
            gradient
            style={{
              height: 36,
              borderRadius: 1,
              fontWeight: "bold",
            }}
            className="red-button"
            onClick={statistics}
          />
        </AGridItem>
        <AGridItem xs={4} sx={{ marginTop: "20px" }}>
          <ASearchButton
            onClick={handleClick}
            onChange={(e: any) => requestSearch(e.target.value)}
            placeholder={"Ürün Adı"}
          ></ASearchButton>
        </AGridItem>
      </AGrid>

      <ACardContent>
        <AGrid>
          {products?.map((row) => (
            <ATableBody>
              {row.urunKategori === "Kişisel Bölüm" && search === 1 ? (
                <AGridItem
                  sx={{
                    marginLeft: "60px",
                    maxHeight: 600,
                    marginBottom: "30px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  <ACard sx={{ maxWidth: 260, maxHeight: 600, minWidth: 260 }}>
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={row.urunAdi}
                      subheader={row.urunTarih}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={row.urunResmi}
                    />
                    <CardContent>
                      {row.urunAdedi === 0 ? (
                        <Typography variant="h6" color={ColorPalette.red}>
                          Ürün Mevcut Değil
                        </Typography>
                      ) : (
                        <Typography variant="h6" color={ColorPalette.green}>
                          Mevcut Ürün
                        </Typography>
                      )}
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
                        itemID="urunId"
                        expand={expanded}
                        onClick={() => handleExpandClick(row?.urunId)}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="h6" color={ColorPalette.red}>
                          Ürün ile ilgili bilgiler:
                        </Typography>
                        <Typography color={ColorPalette.black}>
                          {row.urunBilgi}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </ACard>
                </AGridItem>
              ) : row.urunAdi === productName ? (
                <AGridItem
                  sx={{
                    marginLeft: "60px",
                    maxHeight: 500,
                    marginBottom: "30px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  <ACard sx={{ maxWidth: 280, maxHeight: 600, minWidth: 280 }}>
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={row.urunAdi}
                      subheader={row.urunTarih}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={row.urunResmi}
                    />
                    <CardContent>
                      {row.urunAdedi === 0 ? (
                        <Typography variant="h6" color={ColorPalette.red}>
                          Ürün Mevcut Değil
                        </Typography>
                      ) : (
                        <Typography variant="h6" color={ColorPalette.green}>
                          Mevcut Ürün
                        </Typography>
                      )}
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
                        itemID="urunId"
                        expand={expanded}
                        onClick={() => handleExpandClick(row?.urunId)}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="h6" color={ColorPalette.red}>
                          Ürün ile ilgili bilgiler:
                        </Typography>
                        <Typography color={ColorPalette.black}>
                          {row.urunBilgi}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </ACard>
                </AGridItem>
              ) : (
                <AGridItem></AGridItem>
              )}
            </ATableBody>
          ))}

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
                        Ürün Bilgi
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Ürün Tarihi
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                    <HoverStyledTableCell>
                      <AHeaderLabel size={5} color={ColorPalette.black}>
                        Ürün Düzenleme
                      </AHeaderLabel>
                    </HoverStyledTableCell>
                  </ATableRow>
                </ATableHead>

                {products
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                          {row.urunBilgi}
                        </HoverStyledTableCell>
                        <HoverStyledTableCell>
                          {edit === row?.urunId ? (
                            <TextField
                              id="urunTarih"
                              name="urunTarih"
                              variant="standard"
                              style={{ minWidth: "160px" }}
                              value={row.urunTarih}
                              onChange={(e) =>
                                handleChange("urunTarih", e.target.value)
                              }
                            />
                          ) : (
                            <AGridItem>{row.urunTarih}</AGridItem>
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
              <AGrid>
                <AButton
                  className="b-button"
                  text="YENI ÜRÜN KAYIT"
                  fullWidth
                  onClick={addPatient}
                ></AButton>
              </AGrid>
            </AGrid>
            <ProductUpdate
              dataSource={products}
              edit={false}
              controlButton={1}
            />
          </AGridItem>
        </AGrid>
      </ACardContent>
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
