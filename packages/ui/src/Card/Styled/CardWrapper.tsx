import styled from "@emotion/styled";
import { StyledBox } from "../../Box";

type Props = {};

const CardWrapper = styled(StyledBox)<Props>`
  --card-background-color: var(--component-background);
  background-color: var(--card-background-color);
`;

CardWrapper.displayName = "Card.Wrapper";
export default CardWrapper;
