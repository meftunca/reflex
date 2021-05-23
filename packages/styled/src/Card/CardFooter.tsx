import styled from "@emotion/styled";

const CardFooter = styled.div(
  ({ theme: { space } }) => `
  padding: ${space + "px"} ${space * 1.5 + "px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
);
CardFooter.displayName = "Card.Footer";

export default CardFooter;
