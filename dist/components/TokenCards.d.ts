/// <reference types="react" />
import { Category } from '../types/category.types';
interface TokenCardsProps {
    categories: Category[];
    padded?: boolean;
    readonly?: boolean;
    showValueColumn?: boolean;
}
export declare const TokenCards: ({ categories, padded, readonly, showValueColumn }: TokenCardsProps) => JSX.Element;
export {};
