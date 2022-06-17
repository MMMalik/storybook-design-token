import { Category } from '../types/category.types';
import { File } from '../types/config.types';
export declare function parseSvgFiles(files?: File[]): Promise<{
    categories: Category[];
}>;
