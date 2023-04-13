import NotificationsGetAllModel from "../../models/notifications/NotificationsGetAllModel";
import ProductsModel from "../../models/products/ProductsModel";
import ApiClient from "../ApiClient";

interface INotificationsService {
    getNotifications(): Promise<NotificationsGetAllModel[]>;
}

const NOTIFICATIONS_API = "api/notifications/getall";

const NotificationsService: INotificationsService = {
    getNotifications: async () => {
        const response = await ApiClient.get(NOTIFICATIONS_API);
        return response.data.data;
    },
};

export default NotificationsService;