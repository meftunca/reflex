import styled from "@emotion/styled";
import React from "react";

const TRSTYLED = styled.tr`
  border-top-color: #0000001f;
  border-top-width: 1px;
  border-top-style: solid;
  &.table-body-row:hover {
    background-color: #0000000a;
  }
`;

const Tr: React.FC = (props) => <TRSTYLED {...props} />;

export default Tr;
