export declare function useRanger({ interpolator, tickSize, values, min, max, ticks: controlledTicks, steps, onChange, onDrag, stepSize, }: any): {
    activeHandleIndex: null;
    getTrackProps: ({ style, ref, ...rest }?: {
        style?: {} | undefined;
        ref: any;
    }) => {
        ref: (el: any) => void;
        style: {
            position: string;
            userSelect: string;
        };
    };
    ticks: any;
    segments: {
        value: any;
        getSegmentProps: ({ key, style, ...rest }?: {
            key?: number | undefined;
            style?: {} | undefined;
        }) => {
            key: number;
            style: {
                position: string;
                left: string;
                width: string;
            };
        };
    }[];
    handles: any;
};
