/** @jsx jsx */
import { Box, jsx } from "@re-flex/ui";
import { useConfig } from "docz";
import { useState } from "react";
import Iframe from "react-frame-component";
import ReactResizeDetector from "react-resize-detector";
import * as styles from "./styles";

const CLEAR_PADDING = `<style> body { padding: 0; margin: 0; }  </style>`;
const INITIAL_IFRAME_CONTENT = `<!DOCTYPE html><html><head> ${CLEAR_PADDING} </head><body><div></div></body></html>`;

const IframeWrapper = ({ children, style }) => {
  const [containerHeight, setHeight] = useState();
  return (
    <Iframe
      initialContent={INITIAL_IFRAME_CONTENT}
      css={{
        ...styles.wrapper(),
        style,
        backgroundColor: "transparent",
        height: containerHeight,
      }}
    >
      {children}
      <ReactResizeDetector
        handleHeight
        onResize={({ height }) => {
          setHeight(height);
        }}
      />
    </Iframe>
  );
};

const NormalWrapper = ({ children, style }) => {
  return (
    <Box
      radius={4}
      css={{
        ...styles.wrapper(),
        ...style,
        backgroundColor: "transparent",
      }}
    >
      {children}
    </Box>
  );
};

export const Wrapper = ({
  children,
  content,
  useScoping,
  showingCode,
  codeText,
}) => {
  const {
    themeConfig: { useScopingInPlayground },
  } = useConfig();

  const Element =
    useScoping || useScopingInPlayground ? IframeWrapper : NormalWrapper;

  return (
    <Element style={styles.wrapperBorder(content, showingCode)}>
      {children}
    </Element>
  );
};
