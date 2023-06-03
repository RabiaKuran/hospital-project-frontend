

export interface data {
    hId: number;
    radSoyad: string;
    adSoyad: string;
    cadSoyad: string;
    yatisSebebi: string;
    odaNo: string;
    birthDate: string,
    telefon: number,
    girisTarihi: string,
}
export default interface PatientsModel {
    data: data[];
    message: string;
    success: boolean;
}
