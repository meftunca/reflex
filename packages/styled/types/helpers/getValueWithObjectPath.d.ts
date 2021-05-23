declare type anyObject = {
    [key: string]: any;
};
declare function getValueWithObjectPath(obj: anyObject, path: string, defaultValue?: string | number, delimiter?: string): any;
export default getValueWithObjectPath;
