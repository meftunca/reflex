export default function dotNotation(target: {
    [key: string]: any;
}, path: string): {
    [key: string]: any;
} | undefined;
