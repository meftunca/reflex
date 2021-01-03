import React from "react";
import styled from "@emotion/styled";

const TBODYSTYLED = styled.tbody`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-decoration: inherit;
  text-transform: inherit;
`;

const Tbody: React.FC = ({ children, ...props }) => (
  <TBODYSTYLED {...props}>{children}</TBODYSTYLED>
);

export default Tbody;
