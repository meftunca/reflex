import React from "react";
export declare type RadioProps = {
    defaultChecked?: boolean;
    checked?: boolean;
    onChangeState?: (e: boolean) => void;
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
