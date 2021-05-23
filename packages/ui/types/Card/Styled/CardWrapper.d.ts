/// <reference types="react" />
declare const CardWrapper: import("@emotion/styled").StyledComponent<import("react").ClassAttributes<HTMLElement> & import("react").HTMLAttributes<HTMLElement> & {
    sx?: import("../../utils/theme/sx").sxType;
    as?: HTMLElementTagNameMap;
} & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme;
} & import("../../Box").BoxProps, {}, {}>;
export default CardWrapper;
