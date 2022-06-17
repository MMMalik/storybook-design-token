/// <reference types="react" />
import { Category } from '../types/category.types';
export declare type TokenViewType = 'card' | 'table';
interface TokenTabProps {
    categories: Category[];
    viewType?: TokenViewType;
    /**
     * @default true
     */
    showSearch?: boolean;
}
export declare function TokenTab({ categories: categoriesProp, viewType, showSearch }: TokenTabProps): JSX.Element;
export {};
