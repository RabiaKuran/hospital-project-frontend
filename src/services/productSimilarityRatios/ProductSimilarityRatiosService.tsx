import ProductSimilarityRatiosModel from "../../models/productSimilarityRatios/ProductSimilarityRatiosModel";
import ApiClient from "../ApiClient";

interface IProductSimilarityRatiosService {
  getProductSimilarityRatios(): Promise<ProductSimilarityRatiosModel[]>;
}

const PRODUCT_SIMILARITY_RATIOS_API = "api/marketBasketAnalysis/getBySimilarity";

const ProductSimilarityRatiosService: IProductSimilarityRatiosService = {
  getProductSimilarityRatios: async () => {
    const response = await ApiClient.get(PRODUCT_SIMILARITY_RATIOS_API);
    return response.data.data;
  },
};

export default ProductSimilarityRatiosService;