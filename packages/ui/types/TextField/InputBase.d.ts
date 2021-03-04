declare const InputBase: import("@emotion/styled").StyledComponent<{
    as: "div" | "textarea" | "input";
    variant?: "outlined" | "filled" | undefined;
    className: string;
    placeholder: string;
    theme: any;
} & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export default InputBase;
