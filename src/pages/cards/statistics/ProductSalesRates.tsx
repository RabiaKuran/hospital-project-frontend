import React, { useEffect, useState } from "react";
import DateHelper from "../../../helper/DateHelper";
import { ColorPalette } from "../../../theme/ColorPalette";
import ACard from "../../../components/cards/ACard";
import ACardHeader from "../../../components/cards/ACardHeader";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import AGrid from "../../../components/grids/AGrid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Typography } from "@mui/material";
import ProductsModel from "../../../models/products/ProductsModel";
import ProductsService from "../../../services/products/ProductsService";

export interface ProductsItem {
  urunId: number;
  urunKategori: string;
  urunAdi: string;
  urunAdedi: number;
  urunBilgi: string;
  urunTarih: string;
  urunResmi: string;
}

export default function ProductSalesRates() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductsModel[]>();
  const [productName, setProductName] = useState<any>();
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

      setProducts(products);
      console.log(products);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [productName]);
  
  const SalesChart = () => {
    return (
      <LineChart width={600} height={300} data={products}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="urunAdi" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="urunAdedi" stroke="#8884d8" />
      </LineChart>
    );
  };


  return (
    <>
      <ACard>
        <ACardHeader
          title="Ürün Satış Oranları"
          rightTitle={DateHelper.getCurrentDate()}
          action={
            <InfoDialog headerText={"Bilgi"}>
              <p style={{ fontSize: 20, color: ColorPalette.gray }}>
                Burası her ürün için satış oranını içerir.
              </p>
            </InfoDialog>
          }
        />
        <AGrid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              height: "30%",
              marginTop: 4,
              position: "relative",
            }}
          >
            <SalesChart />
          </Box>
        </AGrid>
      </ACard>
    </>
  );
}
