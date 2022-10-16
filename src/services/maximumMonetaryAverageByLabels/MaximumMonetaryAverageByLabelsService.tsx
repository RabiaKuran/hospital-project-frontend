import MaximumMonetaryAverageByLabelsModel from "../../models/maximumMonetaryAverageByLabels/MaximumMonetaryAverageByLabelsModel";
import ApiClient from "../ApiClient";

interface IMaximumMonetaryAverageByLabelsService {
  getMaximumMonetaryAverageByLabels(): Promise<MaximumMonetaryAverageByLabelsModel[]>;
}

const MAXIMUM_MONETARY_AVERAGE_BY_LABELS_API = "api/cltv/getByMaximumMonetaryAverage";

const MaximumMonetaryAverageByLabelsService: IMaximumMonetaryAverageByLabelsService = {
  getMaximumMonetaryAverageByLabels: async () => {
    const response = await ApiClient.get(MAXIMUM_MONETARY_AVERAGE_BY_LABELS_API);
    return response.data.data;
  },
};

export default MaximumMonetaryAverageByLabelsService;