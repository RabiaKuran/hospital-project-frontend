import { useState } from "react";
import ACard from "../../../components/cards/ACard";
import AGrid from "../../../components/grids/AGrid";
import AGridItem from "../../../components/grids/AGridItem";
import DashboardNavbar from "../../../components/navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { Alert, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import AButton from "../../../components/buttons/AButton";
import ProductAddService from "../../../services/products/ProductAddService";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import RedirectHelper from "../../../helper/RedirectHelper";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default function AddProduct() {
  const [open, setOpen] = useState(false);

  const initialValues = {
    urunId: "",
    urunKategori: "",
    urunAdi: "",
    urunAdedi: "",
    urunBilgi: "",
    urunTarih: "",
    urunResmi: "",
  };
  const validationSchema = Yup.object({
    urunId: Yup.number().required("Required Field"),
    urunTarih: Yup.string().required("Required Field"),
    urunAdi: Yup.string().required("Required Field"),
    urunBilgi: Yup.string().required("Required Field"),
    urunAdedi: Yup.number().required("Required Field"),
    urunResmi: Yup.string().required("Required Field"),
    urunKategori: Yup.string().required("Required Field"),
  });
  const onSubmit = async (values: any, { resetForm }: any) => {
    await ProductAddService.addProductInfo({
      urunId: values.urunId,
      urunKategori: values.urunKategori,
      urunAdi: values.urunAdi,
      urunAdedi: values.urunAdedi,
      urunBilgi: values.urunBilgi,
      urunTarih: values.urunTarih,
      urunResmi: values.urunResmi,
    });
    setTimeout(() => {
      console.log("oldu");
      setOpen(true);
      resetForm();
    }, 100);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  const handleChange = (fieldName: any, value: any) => {
    formik.setFieldValue(fieldName, value);
  };

  const getProducts = () => {
    RedirectHelper.redirect("/hospitalInformation");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DashboardNavbar />
      <AGrid sx={{ padding: 3 }}>
        {/* 1.row */}

        <AGridItem xs={12} sm={12} md={12} xl={12} minHeight={750}>
          <ACard>
            <>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                sx={{ mt: 2, margin: "8px" }}
              >
                <Typography variant="h6" gutterBottom>
                  Ürün Bilgileri
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="urunId"
                      name="urunId"
                      label="Ürün Id"
                      required
                      fullWidth
                      variant="standard"
                      value={formik.values.urunId}
                      onChange={(e) => handleChange("urunId", e.target.value)}
                    />
                    {formik.errors.urunId && formik.touched.urunId && (
                      <p style={{ color: "#C60608" }}>{formik.errors.urunId}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="urunKategori"
                      name="urunKategori"
                      label="Ürün Kategori"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.urunKategori}
                      onChange={(e) =>
                        handleChange("urunKategori", e.target.value)
                      }
                    />
                    {formik.errors.urunKategori &&
                      formik.touched.urunKategori && (
                        <p style={{ color: "#C60608" }}>
                          {formik.errors.urunKategori}
                        </p>
                      )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="urunTarih"
                      name="urunTarih"
                      label="Ürün Giriş Tarihi"
                      required
                      fullWidth
                      variant="standard"
                      value={formik.values.urunTarih}
                      onChange={(e) =>
                        handleChange("urunTarih", e.target.value)
                      }
                    />
                    {formik.errors.urunTarih && formik.touched.urunTarih && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.urunTarih}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="urunAdi"
                      name="urunAdi"
                      label="Ürün Adı"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.urunAdi}
                      onChange={(e) => handleChange("urunAdi", e.target.value)}
                    />
                    {formik.errors.urunAdi && formik.touched.urunAdi && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.urunAdi}
                      </p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="urunAdedi"
                      name="urunAdedi"
                      label="Ürün Adedi"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="standard"
                      value={formik.values.urunAdedi}
                      onChange={(e) =>
                        handleChange("urunAdedi", e.target.value)
                      }
                    />
                    {formik.errors.urunAdedi && formik.touched.urunAdedi && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.urunAdedi}
                      </p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="urunResmi"
                      name="urunResmi"
                      label="Ürün Fotoğrafı"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.urunResmi}
                      onChange={(e) =>
                        handleChange("urunResmi", e.target.value)
                      }
                    />
                    {formik.errors.urunResmi && formik.touched.urunResmi && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.urunResmi}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="urunBilgi"
                      name="urunBilgi"
                      label="Ürün Bilgi"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.urunBilgi}
                      onChange={(e) =>
                        handleChange("urunBilgi", e.target.value)
                      }
                    />
                    {formik.errors.urunBilgi && formik.touched.urunBilgi && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.urunBilgi}
                      </p>
                    )}
                  </Grid>
                  <AGrid>
                    {" "}
                    <AButton
                      className="b-button"
                      text="KAYDET"
                      type="submit"
                      fullWidth
                    ></AButton>
                  </AGrid>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                  >
                    <DialogTitle
                      style={{ cursor: "move" }}
                      id="draggable-dialog-title"
                    >
                      Ürün Kayıt
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Ürün kayıt başarılı. Ürünleri görmek için ürün listesine gidin
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button onClick={getProducts}>Ürün Listesi</Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Box>
            </>
          </ACard>
        </AGridItem>
      </AGrid>
    </>
  );
}


