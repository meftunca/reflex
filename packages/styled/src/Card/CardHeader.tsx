import styled from "@emotion/styled";
import SXBase from "../SX";

const CardHeaderBase = styled(SXBase)(
  ({ theme: { space, prefix } }) =>
    `
  display: flex;
  align-items: center;
  padding: ${space + "px"} ${space * 1.5 + "px"};
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  > .${prefix + "-card-header-text-group"} {
    width: "100%";
    flex-grow: 1;
    margin: 0 ${space + "px"};
  }
`
);

export default CardHeaderBase;
