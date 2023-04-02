import React, { useState } from "react";
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
import PatientAddService from "../../../services/patients/PatientAddService";
import AButton from "../../../components/buttons/AButton";
export default function AddPatient() {
  const [control, setControl] = useState<Boolean>(false);

  const initialValues = {
    adSoyad: "",
    birthDate: "",
    cadSoyad: "",
    odaNo: "",
    radSoyad: "",
    telefon: "",
    girisTarihi: "",
    yatisSebebi: "",
  };
  const validationSchema = Yup.object({
    birthDate: Yup.string().required("Required Field"),
    girisTarihi: Yup.string().required("Required Field"),
    adSoyad: Yup.string().required("Required Field"),
    cadSoyad: Yup.string().required("Required Field"),
    radSoyad: Yup.string().required("Required Field"),
    odaNo: Yup.string().required("Required Field"),
    telefon: Yup.string().required("Required Field"),
    yatisSebebi: Yup.string().required("Required Field"),
  });
  const onSubmit = async (values: any, { resetForm }: any) => {
    await PatientAddService.addPersonalInfo({
      adSoyad: values.adSoyad,
      birthDate: values.birthDate,
      cadSoyad: values.cadSoyad,
      odaNo: values.odaNo,
      radSoyad: values.radSoyad,
      telefon: values.telefon,
      girisTarihi: values.girisTarihi,
      yatisSebebi: values.yatisSebebi,
    });
    setTimeout(() => {
      console.log("oldu");
      setControl(true);
      resetForm();
      setControl(false);
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
                  Hasta Bilgileri
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="adSoyad"
                      name="adSoyad"
                      label="Hasta Ad-Soyad"
                      required
                      fullWidth
                      variant="standard"
                      value={formik.values.adSoyad}
                      onChange={(e) => handleChange("adSoyad", e.target.value)}
                    />
                    {formik.errors.adSoyad && formik.touched.adSoyad && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.adSoyad}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="girisTarihi"
                      name="girisTarihi"
                      label="Giriş Tarihi"
                      required
                      fullWidth
                      variant="standard"
                      value={formik.values.girisTarihi}
                      onChange={(e) =>
                        handleChange("girisTarihi", e.target.value)
                      }
                    />
                    {formik.errors.girisTarihi &&
                      formik.touched.girisTarihi && (
                        <p style={{ color: "#C60608" }}>
                          {formik.errors.girisTarihi}
                        </p>
                      )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cadSoyad"
                      name="cadSoyad"
                      label="Doktor Ad-Soyad"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.cadSoyad}
                      onChange={(e) => handleChange("cadSoyad", e.target.value)}
                    />
                    {formik.errors.cadSoyad && formik.touched.cadSoyad && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.cadSoyad}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="rAdSoyad"
                      name="rAdSoyad"
                      label="Refakatçi Ad-Soyad"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.radSoyad}
                      onChange={(e) => handleChange("radSoyad", e.target.value)}
                    />
                    {formik.errors.radSoyad && formik.touched.radSoyad && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.radSoyad}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="odaNo"
                      name="odaNo"
                      label="Oda Numarası"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="standard"
                      value={formik.values.odaNo}
                      onChange={(e) => handleChange("odaNo", e.target.value)}
                    />
                    {formik.errors.odaNo && formik.touched.odaNo && (
                      <p style={{ color: "#C60608" }}>{formik.errors.odaNo}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="telefon"
                      name="telefon"
                      label="Telefon"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.telefon}
                      onChange={(e) => handleChange("telefon", e.target.value)}
                    />
                    {formik.errors.telefon && formik.touched.telefon && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.telefon}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="birthDate"
                      name="birthDate"
                      label="Doğum Tarihi"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.birthDate}
                      onChange={(e) =>
                        handleChange("birthDate", e.target.value)
                      }
                    />
                    {formik.errors.birthDate && formik.touched.birthDate && (
                      <p style={{ color: "#C60608" }}>
                        {formik.errors.birthDate}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="yatisSebebi"
                      name="yatisSebebi"
                      label="Yatış Sebebi"
                      fullWidth
                      required
                      variant="standard"
                      value={formik.values.yatisSebebi}
                      onChange={(e) =>
                        handleChange("yatisSebebi", e.target.value)
                      }
                    />
                    {formik.errors.yatisSebebi &&
                      formik.touched.yatisSebebi && (
                        <p style={{ color: "#C60608" }}>
                          {formik.errors.yatisSebebi}
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

                  {control === false ? (
                    <AGridItem></AGridItem>
                  ) : (
                    <Alert onClose={() => {}}>KAYIT BAŞARILI!</Alert>
                  )}
                </Grid>
              </Box>
            </>
          </ACard>
        </AGridItem>
      </AGrid>
    </>
  );
}
