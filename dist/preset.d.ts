declare type Options = {
    presets: any;
    preserveCSSVars?: boolean;
};
export declare function managerEntries(entry?: never[]): string[];
export declare function webpackFinal(config: any, { presets, preserveCSSVars }: Options): Promise<any>;
export {};
