export const editor = (theme) => ({
  borderTop: 0,
  pre: {
    padding: "1rem 2rem",
  },

  // backgroundColor: "transparent",
  // background: "transparent",
  fontFamily: "monospace",
  // fontSize: 18,
  "* > textarea:focus": {
    backgroundColor: "transparent",
    background: "transparent",
    outline: "none",
  },
});

export const error = {
  margin: 0,
  padding: "16px 24px",
  bg: "#FF4757",
  fontSize: 1,
  color: "white",
  whiteSpace: "pre-wrap",
};

export const previewWrapper = (theme) => ({
  position: "relative",
  border: `1px solid ${theme.palette.action.disabled}`,
});

export const wrapper = () => ({
  height: "auto",
  display: "block",
  minHeight: "100%",
  width: "calc(100% - 2px)",
  backgroundColor: "var(--component-background)",
});

export const wrapperBorder = (content, showingCode) => {
  let borderRadius = 4;
  if (showingCode) {
    borderRadius = content === "preview" ? "4px 4px 0 0" : "0 0 4px 4px";
  }

  return {
    border: (t) => `1px solid ${t.colors.playground.border}`,
    borderTop: content === "editor" ? 0 : undefined,
    borderRadius,
  };
};

export const preview = {
  margin: 16,
};

export const buttons = {
  zIndex: 9,
  display: "flex",
  justifyContent: "flex-end",
  padding: "16px 24px",
};

export const button = {
  display: "flex",
  alignItems: "center",
  color: "muted",
};

export const link = {
  paddingTop: 0,
  paddingBottom: 0,
  marginLeft: 8,
  height: 22,
};
