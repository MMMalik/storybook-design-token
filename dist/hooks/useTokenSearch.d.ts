/// <reference types="react" />
import { Category } from '../types/category.types';
export declare function useTokenSearch(categories: Category[]): {
    categories: Category[];
    searchText: string;
    setSearchText: import("react").Dispatch<import("react").SetStateAction<string>>;
};
