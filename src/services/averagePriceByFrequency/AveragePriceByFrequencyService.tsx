import AveragePriceByFrequencyModel from "../../models/averagePriceByFrequency/AveragePriceByFrequencyModel";
import ApiClient from "../ApiClient";

interface IAveragePriceByFrequencyService {
    getAveragePriceByFrequency(): Promise<AveragePriceByFrequencyModel[]>;
}

const AVERAGE_PRICE_BY_FREQUENCY_API = "api/clusteringSegmentations/getByAveragePriceByFrequency";

const AveragePriceByFrequencyService: IAveragePriceByFrequencyService = {
    getAveragePriceByFrequency: async () => {
        const response = await ApiClient.get(AVERAGE_PRICE_BY_FREQUENCY_API);
        return response.data.data;
    },
};

export default AveragePriceByFrequencyService;