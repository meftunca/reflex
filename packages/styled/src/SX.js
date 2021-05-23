import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from "@emotion/styled";
import sxPropGenerator from "./helpers/sx";
const Inheritance = ({ as: Tag = "div", children, ...rest }) => {
    return _jsx(Tag, Object.assign({}, rest, { children: children }), void 0);
};
const SXBase = styled(Inheritance)(({ theme, sx }) => {
    return !sx ? {} : sxPropGenerator({ sx, theme });
});
export default SXBase;
