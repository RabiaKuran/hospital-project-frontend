import PatientsModel from "../../models/patients/PatientsModel";
import ApiClient from "../ApiClient";

interface IPatientsService {
    getPatients(): Promise<PatientsModel>;
}

const PATIENTS_API = "api/patient/getall";

const PatientsService: IPatientsService = {
    getPatients: async () => {
        const response = await ApiClient.get(PATIENTS_API);
        return response.data;
    },
};

export default PatientsService;