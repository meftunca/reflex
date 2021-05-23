import styled from "@emotion/styled";

const CardContent = styled.div(
  ({ theme: { space } }) => `
  padding: ${space * 2 + "px"} ${space * 2 + "px"};
  display: flex;
  flex-direction: column;
`
);

CardContent.displayName = "Card.Content";

export default CardContent;
