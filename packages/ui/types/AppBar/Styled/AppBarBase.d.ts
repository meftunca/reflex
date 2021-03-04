export declare type AppBarBaseProps = {
    color?: string;
    colorDepth?: "light" | "dark";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    position?: "static" | "fixed" | "sticky" | "relative" | "absolute";
    shadow?: string;
    dense?: boolean;
};
declare const AppBarBase: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & AppBarBaseProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default AppBarBase;
