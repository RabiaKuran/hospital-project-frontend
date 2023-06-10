import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import AButton from "../../../components/buttons/AButton";
import AGridItem from "../../../components/grids/AGridItem";
import RedirectHelper from "../../../helper/RedirectHelper";
import InfoIcon from "@mui/icons-material/Info";
import React, { useEffect, useState } from "react";
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
import { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ACardHeader from "../../../components/cards/ACardHeader";
import ASearchButton from "../../../components/search/ASearchButton";
import AIconButton from "../../../components/buttons/AIconButton";
import ACardContent from "../../../components/cards/ACardContent";
import ADivider from "../../../components/divider/ADivider";
import { AddCircleOutlineIcon, RemoveCircleOutlineIcon, CloseIcon, SaveIcon, DriveFileRenameOutlineIcon } from "../../../components/icons/Icon";
import ProductUpdate from "./ProductUpdate";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface IFoodSectionCard {
  button: Boolean;
}
export interface AverageRecencyCltvPRecencyItem {
  urunId: number;
  urunKategori: string;
  urunAdi: string;
  urunAdedi: number;
  urunBilgi: string;
  urunTarih: string;
  urunResmi: string;
}

export default function FoodSectionCard(props: IFoodSectionCard) {
  const [products, setProducts] = useState<ProductsModel[]>();
  const [loading, setLoading] = React.useState(true);
  const [dataSource, setDataSource] = React.useState<any>([]);
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState<any>();
  const [productName, setProductName] = useState<any>();
  const [search, setSearch] = useState(1);
  const [count, setCount] = useState(200);
  const [expanded, setExpanded] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
          urunBilgi: item.urunBilgi,
          urunTarih: item.urunTarih,
          urunResmi: item.urunResmi,
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
          <ACardHeader title="Yiyecek ve içecek Ürünler" />
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
              {row.urunKategori === "Yemek Bölümü" && search === 1 ? (
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
