declare type Props = {
    variant: "contained" | "text" | "outlined";
    colorDepth?: "light" | "main" | "dark";
    size?: number;
    button?: boolean;
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
};
declare const StyledListItem: import("@emotion/styled").StyledComponent<import("react").ClassAttributes<HTMLElement> & import("react").HTMLAttributes<HTMLElement> & {
    sx?: import("@re-flex/styled/src/helpers/sx").sxType | undefined;
    as?: HTMLElementTagNameMap | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
} & Props, {}, {}>;
export default StyledListItem;
