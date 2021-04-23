const converted = {
  ".snackbar-wrapper": {
    display: "flex",
    alignItems: "center",
    margin: "8px",
    position: "fixed",
    right: "0",
    left: "0",
    zIndex: 1,
    transition: "opacity 150ms, transform 150ms",
    pointerEvents: "none",
  },
  ".snackbar-wrapper-top-left,\n.snackbar-wrapper-top-center,\n.snackbar-wrapper-top-right": {
    top: "8px",
  },
  ".snackbar-wrapper-bottom-left,\n.snackbar-wrapper-bottom-center,\n.snackbar-wrapper-bottom-right": {
    bottom: "8px",
  },
  ".snackbar-wrapper-top-left,\n.snackbar-wrapper-bottom-left": {
    justifyContent: "flex-start",
  },
  ".snackbar-wrapper-top-center,\n.snackbar-wrapper-bottom-center": {
    justifyContent: "center",
  },
  ".snackbar-wrapper-top-right,\n.snackbar-wrapper-bottom-right": {
    justifyContent: "flex-end",
  },
  ".snackbar": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "4px",
    minWidth: "334px",
    maxWidth: "672px",
    backgroundColor: "#333",
    boxShadow:
      "0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n    0 1px 18px 0 rgba(0, 0, 0, 0.12)",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.87)",
    letterSpacing: "0.25px",
    lineHeight: "20px",
    textAlign: "left",
  },
  "@media (max-width: 480px), (max-width: 344px)": {
    ".snackbar": { minWidth: "100%" },
  },
  ".snackbar__text": {
    flexGrow: 1,
    padding: "14px 16px",
    margin: "0",
    pointerEvents: "auto",
  },
  ".snackbar__close": {
    flexShrink: 0,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: ["relative", "relative"],
    width: "36px",
    height: "36px",
    padding: "8px",
    margin: "0 8px 0 0",
    cursor: "pointer",
    pointerEvents: "auto",
    WebkitTapHighlightColor: "transparent",
    outline: "none",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.87)",
  },
  ".snackbar__close:before": {
    content: "''",
    backgroundColor: "#fff",
    borderRadius: "50%",
    opacity: 0,
    position: "absolute",
    transition: "opacity 120ms linear",
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
  },
  "@media (hover: hover)": {
    ".snackbar__close:hover:before": { opacity: 0.08 },
  },
  ".snackbar-enter,\n.snackbar-exit-active": { opacity: 0 },
  ".snackbar-enter-active": { opacity: 1 },
  ".snackbar-enter-top-left,\n.snackbar-enter-top-center,\n.snackbar-enter-top-right,\n.snackbar-exit-active-top-left,\n.snackbar-exit-active-top-center,\n.snackbar-exit-active-top-right": {
    transform: "translateY(-16px)",
  },
  ".snackbar-enter-bottom-left,\n.snackbar-enter-bottom-center,\n.snackbar-enter-bottom-right,\n.snackbar-exit-active-bottom-left,\n.snackbar-exit-active-bottom-center,\n.snackbar-exit-active-bottom-right": {
    transform: "translateY(16px)",
  },
  ".snackbar-enter-active-top-left,\n.snackbar-enter-active-top-center,\n.snackbar-enter-active-top-right,\n.snackbar-enter-active-bottom-left,\n.snackbar-enter-active-bottom-center,\n.snackbar-enter-active-bottom-right": {
    transform: "translateY(0px)",
  },
};

export default converted;
