export interface ProductVolumeTrendData {
    date: string;
    balance: string;
}
export default interface ProductVolumeTrendModel {
    volumeTrends: ProductVolumeTrendData[];
    dataDate: Date;
}