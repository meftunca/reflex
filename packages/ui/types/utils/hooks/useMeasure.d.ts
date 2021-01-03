export declare type UseMeasureRect = Pick<DOMRectReadOnly, "x" | "y" | "top" | "left" | "right" | "bottom" | "height" | "width">;
export declare type UseMeasureRef<E extends HTMLElement = HTMLElement> = (element: E) => void;
export declare type UseMeasureResult<E extends HTMLElement = HTMLElement> = [
    UseMeasureRef<E>,
    UseMeasureRect
];
declare const useMeasure: <E extends HTMLElement = HTMLElement>() => UseMeasureResult<E>;
export default useMeasure;
