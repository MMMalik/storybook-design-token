/// <reference types="react" />
import { Category } from '../types/category.types';
import { Config } from '../types/config.types';
export declare function useTokenTabs(config?: Config): {
    activeCategory: string | undefined;
    cardView: boolean;
    setActiveCategory: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    setCardView: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    styleInjections: string;
    tabs: {
        label: string;
        categories: Category[];
    }[];
};
