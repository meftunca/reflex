import React from "react";
import styled from "@emotion/styled";

const frGetter = (value: string | number) =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const formatAreas = (areas: any[]) => areas.map((area) => area).join(" ");

type RowProps = {
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
type ColProps = {
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

const RowGenerate = styled.div(
  ({
    display = "grid",
    columns = 12,
    gap,
    columnGap,
    rowGap,
    height = "auto",
    minRowHeight = "20px",
    flow,
    rows,
    areas,
    justifyContent,
    alignContent,
  }: RowProps) => {
    let obj: any = {
      display,
      height: height,
      gridAutoFlow: flow,
      gridAutoRows: `minmax(${minRowHeight}, auto)`,
      gridTemplateRows: rows && frGetter(rows),
      gridTemplateColumns: columns && frGetter(columns),
      gridTemplateAreas: areas && formatAreas(areas),
      gridGap: gap,
      columnGap: columnGap,
      rowGap: rowGap,
      justifyContent: justifyContent,
      alignContent: alignContent,
    };

    return obj;
  }
);

const ColGenerate = styled.div(
  ({
    xs,
    sm,
    md,
    lg,
    xl,
    width = 1,
    height = 1,
    top,
    left,
    middle,
    align = "left",
    area,
    theme: { breakpoints: breakpoints },
  }: ColProps | any) => {
    let obj = {
      height: "100%",
      minWidth: 0,
      gridColumnEnd: `span ${width}`,
      gridRowEnd: `span ${height}`,
      gridColumnStart: left,
      gridRowStart: top,
      textAlign: align,
      gridArea: area,
    };
    if (middle) {
      obj["display"] = "inline-flex";
      obj["flexFlow"] = "column wrap";
      obj["justifyContent"] = "center";
      obj["justifySelf"] = "stretch";
    }
    if (xs)
      obj[`@media (min-width: ${breakpoints.xs}px)`] = {
        gridColumnEnd: `span ${xs}`,
      };
    if (sm)
      obj[`@media (min-width: ${breakpoints.sm}px)`] = {
        gridColumnEnd: `span ${sm}`,
      };
    if (md)
      obj[`@media (min-width: ${breakpoints.md}px)`] = {
        gridColumnEnd: `span ${md}`,
      };
    if (lg)
      obj[`@media (min-width: ${breakpoints.lg}px)`] = {
        gridColumnEnd: `span ${lg}`,
      };
    if (xl)
      obj[`@media (min-width: ${breakpoints.xl}px)`] = {
        gridColumnEnd: `span ${xl}`,
      };
    return obj;
  }
);

type GridProps = RowProps & {};

interface GridSubComponents {
  Col: React.FC<ColProps>;
}

const Grid: React.FC<GridProps> & GridSubComponents = ({
  children,
  ...rest
}) => {
  return <RowGenerate {...rest}>{children}</RowGenerate>;
};

type GridColProps = ColProps & {};

export const Col: React.FC<GridColProps> = ({ children, ...rest }) => {
  return <ColGenerate {...rest}>{children}</ColGenerate>;
};

Grid.Col = Col;

export default Grid;
