export const line = (theme) => {
  return {
    paddingTop: 8,
    borderBottom: "1px solid #f9f9f9",
    position: "relative",
    display: "table-row",
  };
};

const column = {
  minWidth: 0,
  padding: "16px",
  display: "table-cell",
  "& ~ &": {
    bg: "red",
  },
};

export const propName = {
  ...column,
  color: "#1c445a",
  flex: "1 1 100%",
  alignItems: "center",
};

export const propType = (theme) => ({
  ...column,
  color: theme.palette.text.secondary,
  flex: "1 1 100%",
  alignItems: "center",
});

export const defaultValue = {
  ...column,
  color: "#1c445a",
  flex: "1 1 100%",
  alignItems: "center",
};

export const right = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 24px 0 0",
  flex: 1,
};

export const propRequired = {
  color: "props.text",
  fontSize: 1,
  opacity: 0.5,
};

export const openDescBtn = {
  marginTop: 0,
  marginLeft: 12,
  color: "props.defaultValue",
};

export const description = (theme) => ({
  margin: 0,
  padding: "12px 18px",
  borderTop: `1px solid ${theme.palette.action.disabled}`,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
});
