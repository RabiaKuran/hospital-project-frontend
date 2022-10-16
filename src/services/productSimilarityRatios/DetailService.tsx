import DetailModel from "../../models/productSimilarityRatios/DetailModel";
import ApiClient from "../ApiClient";

interface IDetailService {
  getDetail(): Promise<DetailModel[]>;
}

const DETAIL_API = "api/marketBasketAnalysis/getBySimilarity";

const DetailService: IDetailService = {
  getDetail: async () => {
    const response = await ApiClient.get(DETAIL_API);
    return response.data.data;
  },
};

export default DetailService;