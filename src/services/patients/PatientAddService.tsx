import PatientAddModel from "../../models/patients/PatientAddModel";
import ApiClient from "../ApiClient";

interface IPatientAddService {
  addPersonalInfo(values: any): Promise<PatientAddModel>;
}

const ADD_PERSONAL_INFO = "api/patient/add";

const PatientAddService: IPatientAddService = {
  addPersonalInfo: async (values: any) => {
    const response = await ApiClient.post(ADD_PERSONAL_INFO, values);

    return response.data;
  },
};

export default PatientAddService;