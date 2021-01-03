export const wrapper = {
  bg: "header.bg",
  position: "relative",
  zIndex: 1,
  borderBottom: (t) => `1px solid ${t.colors.border}`,
};

export const innerContainer = {
  position: "relative",
  justifyContent: "space-between",
};

export const menuIcon = {
  display: "none",
  position: "absolute",
  top: "calc(100% + 15px)",
  left: 30,
};

export const menuButton = {
  color: "header.text",
  opacity: 0.5,
  cursor: "pointer",
};

export const headerButton = {
  outline: "none",
  p: "12px",
  border: "none",
  borderRadius: 9999,
  bg: "header.button.bg",
  color: "header.button.color",
  fontSize: 0,
  fontWeight: 600,
  cursor: "pointer",
};

export const editButton = {
  position: "absolute",
  bottom: -40,
  right: 30,
  bg: "transparent",
  color: "muted",
  fontSize: 1,
  textDecoration: "none",
  borderRadius: "radius",
};
