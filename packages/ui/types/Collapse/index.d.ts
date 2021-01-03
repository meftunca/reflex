import React from "react";
export declare type CollapseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    open: boolean;
    starterHeight?: number;
};
declare const Collapse: React.FC<CollapseProps>;
export default Collapse;
