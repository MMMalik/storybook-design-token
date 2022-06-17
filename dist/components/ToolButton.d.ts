import { MouseEventHandler, ReactNode } from 'react';
interface ToolButtonProps {
    children: ReactNode | ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export declare const ToolButton: ({ children, onClick }: ToolButtonProps) => JSX.Element;
export {};
