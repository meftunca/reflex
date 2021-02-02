import styled from "@emotion/styled";

export const StepWrapperBase = styled.div(({ theme }) => ({
  position: "relative",
  transition: `height ${theme.transitions.duration.complex} ${theme.transitions.easing.linear}, padding-bottom ${theme.transitions.duration.complex} ${theme.transitions.easing.linear}`,
  display: "flex",
  flexDirection: "column",
}));
export const StepHeaderBase = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "&:hover": { backgroundColor: theme.palette.background.default },
}));
export const StepHeaderBaseDivider = styled.div(({ theme }) => ({
  flex: "1 1 auto",
  display: "flex",
  marginLeft: 8,
  marginRight: 8,
  "& span": {
    width: "100%",
    height: 2,
    backgroundColor: "#0003",
  },
}));
export const StepContentBase = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  direction: "ltr",
  willChange: "transform",
  transition: `transform ${theme.transitions.duration.complex}ms cubic-bezier(0.42, 0.57, 0.76, 0.88) 0s`,
}));
export const StepContentItemBase = styled.div(({ theme }) => ({
  flexShrink: 0,
  width: "100%",
}));
export const StepFooterBase = styled.div(({}) => ({}));
