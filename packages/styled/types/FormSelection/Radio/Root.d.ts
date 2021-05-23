declare const RadioStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare type RadioStyledProps = {
    defaultChecked?: boolean;
    checked?: boolean;
    onChangeState?: (e: boolean) => void;
};
export default RadioStyled;
