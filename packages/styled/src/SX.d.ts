import { DetailedHTMLProps, HTMLAttributes } from "react";
import { sxType } from "./helpers/sx";
export declare type SXBaseProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    sx?: sxType;
    as?: HTMLElementTagNameMap;
};
declare const SXBase: import("@emotion/styled").StyledComponent<import("react").ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & {
    sx?: sxType | undefined;
    as?: HTMLElementTagNameMap | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export default SXBase;
