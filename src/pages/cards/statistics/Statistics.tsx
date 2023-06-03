import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../../components/navbars/DashboardNavbar";
import DateHelper from "../../../helper/DateHelper";
import { ColorPalette } from "../../../theme/ColorPalette";
import ACard from "../../../components/cards/ACard";
import ACardHeader from "../../../components/cards/ACardHeader";
import InfoDialog from "../../../components/dialogs/InfoDialog";
import AGrid from "../../../components/grids/AGrid";
import AGridItem from "../../../components/grids/AGridItem";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Box, Typography } from "@mui/material";
import ProductSalesRates from "./ProductSalesRates";
import ProductChartBar from "./ProductChartBar";
import PercentageDistributionChart from "./PercentageDistributionChart";
import ProductsService from "../../../services/products/ProductsService";
import ProductsModel from "../../../models/products/ProductsModel";

interface SalesData {
  productName: string;
  salesCount: number;
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
const productSalesData: SalesData[] = [
  { productName: "Çorba", salesCount: 9000 },
  { productName: "Havlu", salesCount: 2500 },
  { productName: "Çay", salesCount: 3000 },
  { productName: "Havlu", salesCount: 3500 },
  { productName: "Kahve", salesCount: 4000 },
  { productName: "Sabun", salesCount: 4500 },
  { productName: "Peçete", salesCount: 5000 },
  { productName: "Şampuan", salesCount: 5500 },
  { productName: "Yorgan", salesCount: 6000 },
  { productName: "Alez", salesCount: 6500 },
  { productName: "Yastık kılıfı", salesCount: 7000 },
  { productName: "Şampuan", salesCount: 7500 },
];



export default function Statistics() {
  const [dataSource, setDataSource] = useState<any>([]);
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
      
      console.log("productSalesData");
  
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

  return (
    <>
      <DashboardNavbar />
      <AGrid>
            <AGridItem xs={12} lg={6}>
                <AGrid>
                    <AGridItem xs={12}>
                        <ProductSalesRates />
                    </AGridItem>
                    <AGridItem xs={12}>
                        <ProductSalesRates />
                    </AGridItem>
                </AGrid>
            </AGridItem>
            <AGridItem xs={12} lg={6}>
                <AGrid>
                    <AGridItem xs={12}>
                        <PercentageDistributionChart productsSales={productSalesData}  />
                    </AGridItem>
                    <AGridItem xs={12}>
                        <ProductSalesRates />
                    </AGridItem>
                </AGrid>
            </AGridItem>
        </AGrid>
      
    </>
  );
}
