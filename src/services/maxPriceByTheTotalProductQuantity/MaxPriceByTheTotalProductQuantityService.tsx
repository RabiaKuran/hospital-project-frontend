import MaxPriceByTheTotalProductQuantityModel from "../../models/maxPriceByTheTotalProductQuantity/MaxPriceByTheTotalProductQuantityModel";
import ApiClient from "../ApiClient";

interface IMaxPriceByTheTotalProductQuantityService {
  getMaxPriceByTheTotalProductQuantity(): Promise<MaxPriceByTheTotalProductQuantityModel[]>;
}

const MAX_PRICE_API = "api/clusteringSegmentations/getByMaxPrice";

const MaxPriceByTheTotalProductQuantityService: IMaxPriceByTheTotalProductQuantityService = {
  getMaxPriceByTheTotalProductQuantity: async () => {
    const response = await ApiClient.get(MAX_PRICE_API);
    return response.data.data;
  },
};

export default MaxPriceByTheTotalProductQuantityService;