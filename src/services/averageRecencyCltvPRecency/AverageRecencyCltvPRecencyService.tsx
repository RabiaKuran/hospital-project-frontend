import AverageRecencyCltvPRecencyModel from "../../models/averageRecencyCltvPRecency/AverageRecencyCltvPRecencyModel";
import ApiClient from "../ApiClient";

interface IAverageRecencyCltvPRecencyService {
    getAverageRecencyCltvPRecency(): Promise<AverageRecencyCltvPRecencyModel[]>;
}

const AVERAGE_RECENCY_CLTV_P_RECENCY_API = "api/cltv/getByAverageRecencyCltvPRecency";

const AverageRecencyCltvPRecencyService: IAverageRecencyCltvPRecencyService = {
    getAverageRecencyCltvPRecency: async () => {
        const response = await ApiClient.get(AVERAGE_RECENCY_CLTV_P_RECENCY_API);
        return response.data.data;
    },
};

export default AverageRecencyCltvPRecencyService;