import AverageLifetimeBySegmentsModel from "../../models/AverageLifetimeBySegments/AverageLifetimeBySegmentsModel";
import ApiClient from "../ApiClient";

interface IAverageLifetimeBySegmentsService {
    getAverageLifetimeBySegments(): Promise<AverageLifetimeBySegmentsModel[]>;
}

const AVERAGE_LIFETIME_BY_SEGMENTS_API = "api/cltv/getByAverageLifetime";

const AverageLifetimeBySegmentsService: IAverageLifetimeBySegmentsService = {
    getAverageLifetimeBySegments: async () => {
        const response = await ApiClient.get(AVERAGE_LIFETIME_BY_SEGMENTS_API);
        return response.data.data;
    },
};

export default AverageLifetimeBySegmentsService;