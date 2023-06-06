import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import ACard from "../../../components/cards/ACard";
import ACardContent from "../../../components/cards/ACardContent";
import AGrid from "../../../components/grids/AGrid";
import AGridItem from "../../../components/grids/AGridItem";
import AButton from "../../../components/buttons/AButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { EditIcon } from "../../../components/icons/Icon";
import { ColorPalette } from "../../../theme/ColorPalette";
import ProductAddService from "../../../services/products/ProductAddService";
import ProductsService from "../../../services/products/ProductsService";
import ProductUpdateService from "../../../services/products/ProductUpdateService";
import ShadowButton from "../../../components/buttons/shadowButton";
import ProductDeleteService from "../../../services/products/ProductDeleteService";

interface IProductUpdateProps {
  dataSource?: any;
  edit?: any;
  controlButton?: any;
}

export default function ProductUpdate(props: IProductUpdateProps) {
  const { dataSource, edit, controlButton } = props;
  const [control, setControl] = useState<any>(0);
  const [dataPersonal, setDataPersonal] = useState<any>(dataSource);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [editMode, setEditMode] = useState<boolean>(edit);
  const [check, setCheck] = useState<boolean>(false);
  const [urunId, setUrunId] = useState<string>("");
  const [urunKategori, setUrunKategori] = useState<string>("");
  const [urunAdi, setUrunAdi] = useState<string>("");
  const [urunBilgi, setUrunBilgi] = useState<string>("");
  const [urunAdedi, setUrunAdedi] = useState<string>("");
  const [urunTarih, setUrunTarih] = useState<string>("");
  const [urunResmi, setUrunResmi] = useState<string>("");
  const [controlEdit, setControlEdit] = useState<number>(controlButton);
  

  useEffect(() => {
    setDataPersonal(dataSource);
  }, [dataSource]);

  const onEdit = async (id: any) => {
    setEditMode(true);
    console.log("dataPersonal");
    console.log(dataPersonal);
    dataPersonal?.map(
      (item: any, i: any) =>
        item?.id === id &&
        (setUrunId(item?.urunId),
        setUrunKategori(item?.urunKategori),
        setUrunAdi(item?.urunAdi),
        setUrunAdedi(item?.urunAdedi),
        setUrunBilgi(item?.urunBilgi),
        setUrunTarih(item?.urunTarih),
        setUrunResmi(item?.urunResmi))
    );
  };

  const handleOnCancel = () => {
    setEditMode(false);
  };


  const handleDelete = async () => {
    var id = 0;
    var products = await ProductsService.getProducts();
    products?.map(
      (row: any, i: any) =>
        row?.urunId === urunId &&
        row?.urunKategori === urunKategori &&
        row.urunAdi === urunAdi &&
        row.urunAdedi === urunAdedi &&
        row.urunBilgi === urunBilgi &&
        row.urunTarih === urunTarih &&
        row.urunResmi === urunResmi &&
        (id = row?.id)
    );
    await ProductDeleteService.deleteProduct(id);

    var allDetailResume = await ProductsService.getProducts();
    setDataPersonal(allDetailResume);
    setEditMode(false);
  };

  const addEducation = async () => {
    setUrunId("");
    setUrunKategori("");
    setUrunAdi("");
    setUrunAdedi("");
    setUrunBilgi("");
    setUrunTarih("");
    setUrunResmi("");
    setEditMode(true);
    setControlEdit(2);
  };

  useEffect(() => {
    if (
      urunId !== "" &&
      urunKategori !== "" &&
      urunAdi !== "" &&
      urunAdedi !== "" &&
      urunBilgi !== "" &&
      urunTarih !== "" &&
      urunResmi !== ""
    ) {
      setControlEdit(1);
    }
  }, [
    urunId,
    urunKategori,
    urunAdi,
    urunAdedi,
    urunBilgi,
    urunTarih,
    urunResmi,
  ]);

  var initialValues = {
    urunId: urunId,
    urunKategori: urunKategori,
    urunAdi: urunAdi,
    urunAdedi: urunAdedi,
    urunBilgi: urunBilgi,
    urunTarih: urunTarih,
    urunResmi: urunResmi,
  };

  const validationSchema = Yup.object({
    urunId: Yup.string().required("Required Field"),
    urunKategori: Yup.string().required("Required Field"),
    urunAdi: Yup.string().required("Required Field"),
    urunAdedi: Yup.string().required("Required Field"),
    urunBilgi: Yup.string().required("Required Field"),
    urunTarih: Yup.string().required("Required Field"),
    urunResmi: Yup.string().required("Required Field"),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    var id = 0;
    var educationGetAll;
    controlEdit === 1
      ? ((educationGetAll = await ProductsService.getProducts()),
        educationGetAll?.map(
          (row: any, i: any) =>
            row?.id === row?.id &&
            row?.urunKategori === urunKategori &&
            row?.urunKategori === urunKategori &&
            row.urunAdi === urunAdi &&
            row.urunAdedi === urunAdedi &&
            row.urunBilgi === urunBilgi &&
            row.urunTarih === urunTarih &&
            row.urunResmi === urunResmi &&
            (id = row?.id)
        ),
        await ProductUpdateService.updateProduct({
          id: id,
          urunId: values.urunId,
          urunKategori: values.urunKategori,
          urunAdi: values.urunAdi,
          urunAdedi: values.urunAdedi,
          urunBilgi: values.urunBilgi,
          urunTarih: values.urunTarih,
          urunResmi: values.urunResmi,
        }))
      : await ProductAddService.addProductInfo({
          urunId: values.urunId,
          urunKategori: values.urunKategori,
          urunAdi: values.urunAdi,
          urunAdedi: values.urunAdedi,
          urunBilgi: values.urunBilgi,
          urunTarih: values.urunTarih,
          urunResmi: values.urunResmi,
        });

    setEditMode(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleChange = (fieldName: any, value: any) => {
    formik.setFieldValue(fieldName, value);
  };

  const handle =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ACard>
      <ACardContent>
        {editMode ? (
          <>
            <AGrid>
              <AGridItem xs={12}>
                <Box
                  onSubmit={formik.handleSubmit}
                  component="form"
                  noValidate
                  sx={{ mt: 2, margin: "8px" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Add Product
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="urunId"
                        name="urunId"
                        label="Ürün Id"
                        fullWidth
                        placeholder="Ürün Id"
                        variant="standard"
                        value={formik.values.urunId}
                        onChange={(e) => handleChange("urunId", e.target.value)}
                      />
                      {formik.errors.urunId && formik.touched.urunId && (
                        <p
                          style={{
                            color: "#C60608",
                          }}
                        >
                          {formik.errors.urunId}
                        </p>
                      )}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        required
                        id="urunKategori"
                        name="urunKategori"
                        label="Ürün Kategori"
                        fullWidth
                        variant="standard"
                        value={formik.values.urunKategori}
                        onChange={(e) =>
                          handleChange("urunKategori", e.target.value)
                        }
                      />
                      {formik.errors.urunKategori &&
                        formik.touched.urunKategori && (
                          <p
                            style={{
                              color: "#C60608",
                            }}
                          >
                            {formik.errors.urunKategori}
                          </p>
                        )}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        required
                        id="urunAdi"
                        name="urunAdi"
                        label="Ürün Adı"
                        fullWidth
                        variant="standard"
                        value={formik.values.urunAdi}
                        onChange={(e) =>
                          handleChange("urunAdi", e.target.value)
                        }
                      />
                      {formik.errors.urunAdi && formik.touched.urunAdi && (
                        <p
                          style={{
                            color: "#C60608",
                          }}
                        >
                          {formik.errors.urunAdi}
                        </p>
                      )}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        required
                        id="urunAdedi"
                        name="urunAdedi"
                        label="Ürün Adedi"
                        fullWidth
                        variant="standard"
                        value={formik.values.urunAdedi}
                        onChange={(e) =>
                          handleChange("urunAdedi", e.target.value)
                        }
                      />
                      {formik.errors.urunAdedi && formik.touched.urunAdedi && (
                        <p
                          style={{
                            color: "#C60608",
                          }}
                        >
                          {formik.errors.urunAdedi}
                        </p>
                      )}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        required
                        id="urunResmi"
                        name="urunResmi"
                        label="Ürün Resmi"
                        fullWidth
                        variant="standard"
                        value={formik.values.urunResmi}
                        onChange={(e) =>
                          handleChange("urunResmi", e.target.value)
                        }
                      />
                      {formik.errors.urunResmi && formik.touched.urunResmi && (
                        <p
                          style={{
                            color: "#C60608",
                          }}
                        >
                          {formik.errors.urunResmi}
                        </p>
                      )}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        required
                        id="urunTarih"
                        name="urunTarih"
                        label="Ürün Tarih"
                        autoComplete="cc-csc"
                        fullWidth
                        placeholder="YYYY-MM-DD"
                        variant="standard"
                        value={formik.values.urunTarih}
                        onChange={(e) =>
                          handleChange("urunTarih", e.target.value)
                        }
                      />
                      {formik.errors.urunTarih && formik.touched.urunTarih && (
                        <p
                          style={{
                            color: "#C60608",
                          }}
                        >
                          {formik.errors.urunTarih}
                        </p>
                      )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="urunBilgi"
                        name="urunBilgi"
                        label="Ürün Bilgi"
                        fullWidth
                        variant="standard"
                        value={formik.values.urunBilgi}
                        onChange={(e) =>
                          handleChange("urunBilgi", e.target.value)
                        }
                      />
                      {formik.errors.urunBilgi && formik.touched.urunBilgi && (
                        <p
                          style={{
                            color: "#C60608",
                          }}
                        >
                          {formik.errors.urunBilgi}
                        </p>
                      )}
                    </Grid>

                    {controlEdit === 1 ? (
                      <>
                        <AGridItem
                          xs={12}
                          sm={0.01}
                          md={6.3}
                          lg={7.9}
                          xl={9.5}
                          marginTop={1.9}
                          marginBottom={-1}
                        >
                          <DeleteIcon
                            color="action"
                            sx={{
                              cursor: "pointer",
                            }}
                            onClick={handleDelete}
                          />
                        </AGridItem>

                        <AGridItem xs={12} sm={6.3} md={2.8} lg={2} xl={1.2}>
                          <ShadowButton
                            text="Cancel"
                            onClick={handleOnCancel}
                          />
                        </AGridItem>
                        <AGridItem xs={12} sm={1}>
                          <AButton
                            type={"submit"}
                            text="Save"
                            gradient
                            style={{
                              width: 95,
                              height: 36,
                              borderRadius: 1.5,
                              fontWeight: "bold",
                            }}
                          />
                        </AGridItem>
                      </>
                    ) : controlEdit === 2 ? (
                      <>
                        <AGridItem
                          xs={12}
                          sm={0.01}
                          md={6.3}
                          lg={7.9}
                          xl={9.5}
                        />
                        <AGridItem xs={12} sm={6.3} md={2.8} lg={2} xl={1.2}>
                          <ShadowButton
                            text="Cancel"
                            onClick={handleOnCancel}
                          />
                        </AGridItem>
                        <AGridItem xs={12} sm={1}>
                          <AButton
                            type={"submit"}
                            text="Save"
                            gradient
                            style={{
                              width: 95,
                              height: 36,
                              borderRadius: 1.5,
                              fontWeight: "bold",
                            }}
                          />
                        </AGridItem>
                      </>
                    ) : (
                      <>
                        <AGridItem
                          xs={10.7}
                          sm={6.5}
                          md={9.2}
                          lg={9.87}
                          xl={10.7}
                        />
                        <AGridItem xs={1}>
                          <AButton
                            type={"submit"}
                            text="Save"
                            gradient
                            style={{
                              width: 95,
                              height: 36,
                              borderRadius: 1.5,
                              fontWeight: "bold",
                            }}
                          />
                        </AGridItem>
                      </>
                    )}
                  </Grid>
                </Box>
              </AGridItem>
            </AGrid>
          </>
        ) : (
          <>
            <AGrid
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1.3,
              }}
            >
              <AGridItem xs={6} md={2.1} lg={1.7} xl={1} marginLeft={0.8}>
                <Typography variant="h6" gutterBottom>
                  Edit Product
                </Typography>
              </AGridItem>
              <AGridItem xs={8} md={9} lg={9} xl={10}>
                <AButton
                  text="+ Add Product"
                  gradient
                  style={{
                    height: 36,
                    borderRadius: 1,
                    fontWeight: "bold",
                  }}
                  onClick={addEducation}
                />
              </AGridItem>
              <AGridItem xs={12} paddingRight={6}>
                {dataPersonal?.map((item: any, i: any) => (
                  <Accordion expanded={expanded === i} onChange={handle(i)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      style={{ marginLeft: 15 }}
                    >
                      <AGrid>
                        <AGridItem xs={12} lg={3}>
                          Ürün Kategori : {item?.urunKategori}
                        </AGridItem>
                        <AGridItem xs={12} lg={3}>
                          Ürün Id : {item?.urunId}
                        </AGridItem>

                        <AGridItem xs={12} lg={3}>
                          Ürün Adi: {item?.urunAdi}
                        </AGridItem>
                      </AGrid>
                    </AccordionSummary>
                    <AccordionDetails>
                      <AccordionSummary
                        onMouseOver={() => setCheck(true)}
                        onMouseLeave={() => setCheck(false)}
                      >
                        <AGrid>
                          <AGridItem xs={12} lg={3}>
                            Ürün Bilgi: {item?.urunBilgi}
                          </AGridItem>
                          <AGridItem xs={12} lg={3}>
                            Ürün Adedi : {item?.urunAdedi}
                          </AGridItem>
                          <AGridItem xs={12} lg={3}>
                            Ürün Tarihi : {item?.urunTarih}
                          </AGridItem>
                          <AGridItem xs={12} lg={11}>
                            Ürün Resmi : {item?.urunResmi}
                          </AGridItem>
                          <AGridItem xs={12} sm={0.3} md={0.3} lg={0.3}>
                            {check && (
                              <EditIcon
                                sx={{
                                  color: ColorPalette.blue,
                                  cursor: "pointer",
                                  mr: 3,
                                }}
                                fontSize="medium"
                                onClick={() => onEdit(item?.id)}
                              />
                            )}{" "}
                          </AGridItem>
                        </AGrid>
                      </AccordionSummary>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AGridItem>
            </AGrid>
          </>
        )}
      </ACardContent>
    </ACard>
  );
}
