/// <reference types="react" />
import { Category } from '../types/category.types';
interface TokenTableProps {
    categories: Category[];
    maxHeight?: number;
    readonly?: boolean;
    showValueColumn?: boolean;
}
export declare const TokenTable: ({ categories, maxHeight, readonly, showValueColumn }: TokenTableProps) => JSX.Element;
export {};
