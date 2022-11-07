import EmployeeModel from "../../models/employee/EmployeeModel";
import ApiClient from "../ApiClient";

interface IEmployeeService {
    getEmployee(): Promise<EmployeeModel[]>;
}

const EMPLOYEE_API = "api/employees/getall";

const EmployeeService: IEmployeeService = {
    getEmployee: async () => {
        const response = await ApiClient.get(EMPLOYEE_API);
        return response.data.data;
    },
};

export default EmployeeService;