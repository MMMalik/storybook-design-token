import { Category } from '../types/category.types';
import { File } from '../types/config.types';
import { TokenSourceType } from '../types/token.types';
export declare function parseCssFiles(files: File[] | undefined, sourceType: TokenSourceType, injectVariables?: boolean, preserveCSSVars?: boolean): Promise<{
    categories: Category[];
    injectionStyles: string;
}>;
