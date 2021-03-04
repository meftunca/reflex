declare type Props = {
    strong?: number;
    spacing?: number | number[];
    color?: string;
    direction?: "horizontal" | "vertical";
};
declare const Divider: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Props, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default Divider;
