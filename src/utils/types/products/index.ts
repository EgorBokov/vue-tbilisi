import type { CategoryID } from '@/utils/types/categories';

export type ProductType = {
    id: number;
    name: string;
    imageUrl: string;
    defaultDisplayedPrice: number;
    defaultDisplayedPriceFormatted: string;
    description: string;
    categoryIds: Array<CategoryID>;
};