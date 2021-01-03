import styled from "@emotion/styled";
import React from "react";

const TBODYCELLSTYLED = styled.td`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-decoration: inherit;
  text-transform: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 12px 16px;
  &.is-numeric {
    text-align: right;
  }
`;
const Td: React.FC = (props) => <TBODYCELLSTYLED {...props} />;

export default Td;
