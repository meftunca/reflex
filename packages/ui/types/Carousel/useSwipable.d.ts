declare type props = {
    axis?: "x" | "y";
    onSwipe?: (element: HTMLElement, x: number, y: number) => void;
    onSwipeEnd: (element: HTMLElement, x: number, y: number) => void;
};
export declare type useSwipeableRef<E extends HTMLElement = HTMLElement> = (element: E) => void;
export declare type useSwipeableResult<E extends HTMLElement = HTMLElement> = [
    useSwipeableRef<E>,
    E | undefined
];
declare const useSwipeable: <E extends HTMLElement>({ axis, onSwipe, onSwipeEnd, }: props) => useSwipeableResult<E>;
export default useSwipeable;
