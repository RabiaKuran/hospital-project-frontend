export default interface ProductSimilarityRatiosModel {
    id: number;
    antecedents: string;
    consequents: string;
    support: number;
    confidence: number;
}