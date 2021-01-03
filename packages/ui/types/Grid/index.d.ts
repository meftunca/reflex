import React from "react";
declare type RowProps = {
    columns?: string | number;
    gap?: number | string;
    columnGap?: number | string;
    rowGap?: number | string;
    height?: number | string;
    minRowHeight?: number | string;
    flow?: string;
    rows?: string | number;
    areas?: string[];
    justifyContent?: string;
    alignContent?: string;
    display?: "grid" | "flex";
};
declare type ColProps = {
    width?: number;
    height?: number;
    top?: number | string;
    left?: number | string;
    middle?: boolean;
    align?: "left" | "center" | "right";
    area?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
declare type GridProps = RowProps & {};
interface GridSubComponents {
    Col: React.FC<ColProps>;
}
declare const Grid: React.FC<GridProps> & GridSubComponents;
declare type GridColProps = ColProps & {};
export declare const Col: React.FC<GridColProps>;
export default Grid;
