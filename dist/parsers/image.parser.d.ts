import { Category } from '../types/category.types';
import { File } from '../types/config.types';
export declare function parsePngFiles(files?: File[]): Promise<{
    categories: Category[];
}>;
