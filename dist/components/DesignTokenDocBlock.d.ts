/// <reference types="react" />
import type { TokenViewType } from './TokenTab';
export interface DesignTokenDocBlockProps {
    categoryName: string;
    maxHeight?: number;
    showValueColumn?: boolean;
    viewType: TokenViewType;
    /**
     * @default true
     */
    showSearch?: boolean;
}
export declare const DesignTokenDocBlock: ({ categoryName, maxHeight, showValueColumn, viewType, showSearch }: DesignTokenDocBlockProps) => JSX.Element | null;
