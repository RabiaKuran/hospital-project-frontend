
import ProductVolumeTrendModel from "../../../models/customers/productVolumeTrend/ProductVolumeTrendModel";
import ApiClient from "../../ApiClient";

interface IProductVolumeTrendService {
  getProductVolumeTrends(CustomerNo:number,VolumeProductId:string, TrendPeriod: string ): Promise<ProductVolumeTrendModel>;

}
const PRODUCT_VOLUME_TREND = "customers/product-volume-trend";

const ProductVolumeTrendService: IProductVolumeTrendService = {

  getProductVolumeTrends: async (CustomerNo:number,VolumeProductId:string, TrendPeriod: string) => {

    const response = await ApiClient.get(`${PRODUCT_VOLUME_TREND}?CustomerNo=${CustomerNo}&VolumeProductId=${VolumeProductId}&TrendPeriod=${TrendPeriod}`);
    return response.data;
  },
};
export default ProductVolumeTrendService