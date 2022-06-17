/// <reference types="react" />
import { Token } from '../types/token.types';
interface TokenValueProps {
    onValueChange: (newValue: any) => void;
    readonly?: boolean;
    token: Token;
}
export declare const TokenValue: ({ onValueChange, readonly, token }: TokenValueProps) => JSX.Element;
export {};
