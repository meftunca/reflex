import styled from "@emotion/styled";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import sxPropGenerator, { sxType } from "./helpers/sx";

export type SXBaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  sx?: sxType;
  as?: HTMLElementTagNameMap;
};

const Inheritance: FC<SXBaseProps> = ({
  as: Tag = "div",
  children,
  ...rest
}) => {
  //@ts-ignore
  return <Tag {...rest}>{children}</Tag>;
};

const SXBase = styled(Inheritance)(({ theme, sx }) => {
  return !sx ? {} : sxPropGenerator({ sx, theme });
});

export default SXBase;
