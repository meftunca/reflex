import styled from "@emotion/styled";

export type AppBarBaseProps = {
  color?: string;
  colorDepth?: "light" | "dark";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  position?: "static" | "fixed" | "sticky" | "relative" | "absolute";
  shadow?: string;
  dense?: boolean;
};

/* 
  TODO Position Settings Static Sticky Fixed
*/
const AppBarBase = styled.div<AppBarBaseProps>`
  /*    | Variables |    */
  --appbar-size: 16px;
  --appbar-color: ${({ color }) => color || "var(--component-background)"};
  --appbar-bg-color: ${({ color = "black" }) => color};
  --appbar-text-color: ${({ colorDepth = "dark" }) =>
    colorDepth === "dark" ? "#fff" : "#232323"};

  /*    | Content |    */

  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: center;
  /* align-items: flex-start; */ /* TODO AppBar tipine göre hizalamayı düzenle. Örnek tipler prominent|dense vs  */
  justify-content: flex-start;

  min-width: ${({ direction = "row" }) =>
    direction.includes("row") ? "100%" : "56px"};
  min-height: ${({ direction = "row" }) =>
    direction.includes("column") ? "100%" : "56px"};

  /* | Box Design | */
  box-shadow: ${({ shadow = "none" }) => shadow};
  padding: ${({ dense }) =>
    dense ? "0" : `calc(var(--appbar-size) *3 / 4) var(--appbar-size)`};

  background-color: var(--appbar-bg-color);

  /*    | Text|Button|Icon Settings |   */
  color: var(--appbar-text-color);
  > * {
    --typography-color: var(--appbar-text-color);
  }
`;

export default AppBarBase;
