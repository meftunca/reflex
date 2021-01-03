import styled from "@emotion/styled";
import React from "react";

const THEADCELLSTYLED = styled.th`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.0071428571em;
  text-decoration: inherit;
  text-transform: inherit;
  text-overflow: ellipsis;
  text-align: inherit;
  overflow: hidden;
  padding: 12px 16px;
  &.th-sorting {
    position: relative;
    svg {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }
  &:hover .resizer {
    width: 4px;
    background-color: rgba(0, 0, 0, 0.14);
  }
  > .resizer {
    display: inline-block;
    background: blue;
    width: 10px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    ${"" /* prevents from scrolling while dragging on touch devices */}
    touch-action:none;
    background-color: transparent;

    &.isResizing {
      width: 4px;
      background-color: rgba(0, 0, 0, 0.14);
    }
  }
`;
const Th: React.FC = (props) => <THEADCELLSTYLED {...props} />;

export default Th;
