import AverageChurnByClusterNamesModel from "../../models/averageChurnByClusterNames/AverageChurnByClusterNamesModel";
import ApiClient from "../ApiClient";

interface IAverageChurnByClusterNamesService {
    getAverageChurnByClusterNames(): Promise<AverageChurnByClusterNamesModel[]>;
}

const AVERAGE_CHURN_BY_CLUSTER_NAMES_API = "api/churns/getByChurnByPrediction";

const AverageChurnByClusterNamesService: IAverageChurnByClusterNamesService = {
    getAverageChurnByClusterNames: async () => {
        const response = await ApiClient.get(AVERAGE_CHURN_BY_CLUSTER_NAMES_API);
        return response.data.data;
    },
};

export default AverageChurnByClusterNamesService;