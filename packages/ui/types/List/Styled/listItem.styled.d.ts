declare type Props = {
    variant: "contained" | "text" | "outlined";
    colorDepth?: "light" | "main" | "dark";
    size?: number;
    button?: boolean;
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
};
declare const StyledListItem: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Props, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default StyledListItem;
