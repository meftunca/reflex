import styled from "@emotion/styled";
import StyledButtonRoot, { ButtonRootProps } from "./Button/Root";

interface Props extends ButtonRootProps {
  isImgButton?: boolean;
}
const StyledButton = styled(StyledButtonRoot)<Props>(
  ({ theme, isImgButton }) => {
    const { palette, space } = theme;
    const obj = {
      padding: isImgButton ? 0 : 8,
      borderRadius: "50%",
      fontSize: 20,
      backgroundColor: "transparent",
      width: isImgButton ? 24 : 36,
      height: isImgButton ? 24 : 36,
      margin: 4,
    };
    return obj;
  }
);
export default StyledButton;
