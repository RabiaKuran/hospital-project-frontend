import NotificationsModel from "../../models/notifications/NotificationsModel"
import ApiClient from "../ApiClient"

interface INotificationsUpdateService {
    updateNotifications(values: any): Promise<NotificationsModel>
}

const UPDATE_PRODUCT_API = "api/notifications/update"

const NotificationsUpdateService: INotificationsUpdateService = {
    updateNotifications: async (values: any) => {
        const response = await ApiClient.put(UPDATE_PRODUCT_API, values)
        return response.data
    },
}

export default NotificationsUpdateService
