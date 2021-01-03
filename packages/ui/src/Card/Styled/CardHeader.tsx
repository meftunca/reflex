import styled from "@emotion/styled";

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

CardHeader.displayName = "Card.Header";

export default CardHeader;
