export interface PricingPlan {

    id: number;
    label: string;
    services: string[];
    color: string;
    price: string;
    isMain?: boolean;

}
