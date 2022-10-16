export  default interface DetailModel {
    antecedents: string;
    consequents: string;
    antecedentSupport: number;
    consequentSupport: number;
    support: number;
    confidence: number;
    lift: number;
    leverage: number;
    conviction: number;
    id: number;
    combineName: string;
}