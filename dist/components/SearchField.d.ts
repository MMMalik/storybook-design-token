import React from 'react';
interface SearchFieldProps {
    style?: React.CSSProperties;
    value: string;
    onChange: (value: string) => void;
}
export declare function SearchField({ value, onChange, style }: SearchFieldProps): JSX.Element;
export {};
