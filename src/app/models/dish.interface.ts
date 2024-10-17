export interface IDish {
    id: number;
    title: string;
    description: string;
    price: number;
    priceOutdated: number | null;
    avatar: string;
    categoryId: number;
    quantity: number;
    status: EDishStatusEnum;
}

export enum EDishStatusEnum {
    AVAILABLE = 'AVAILABLE',
    UNAVAILABLE = 'UNAVAILABLE'
}