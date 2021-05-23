export declare type ButtonRootProps = {
    colorDepth?: "light" | "main" | "dark";
    color?: "common" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | "grey" | "text" | "background" | "action" | string;
    variant?: "contained" | "outlined" | "text";
    size?: number;
    fullWidth?: boolean;
    rounded?: boolean;
};
declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ButtonRootProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export default StyledButton;
