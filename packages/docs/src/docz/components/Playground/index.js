/** @jsx jsx */
import {
  Box,
  Collapse,
  css,
  IconButton,
  jsx,
  styled,
  useTheme,
} from "@re-flex/ui";
import copy from "copy-text-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/palenight";
import React, { useEffect, useState } from "react";
import * as Icons from "../Icons";
import * as styles from "./styles";
const Pre = styled.pre`
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div``;

const LineNo = styled.span`
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  font-size: 12px;
`;

const PrismHighlighter = ({ code, language = "jsx", ...rest }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export const Playground = ({ children, column = false, file }) => {
  // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
  const [fileText, setFileText] = useState("");
  const theme = useTheme();
  const [showingCode, setShowingCode] = React.useState(false);
  const copyCode = () => copy(fileText);

  useEffect(() => {
    file()?.then((a) => {
      console.log(a?.default);

      if (a?.default) setFileText(a?.default);
    });
  }, [file]);
  const toggleCode = () => setShowingCode((s) => !s);
  return (
    <Box p={0} m={[32, 0]} radius={4}>
      <Box
        p={[16, 24]}
        radius={8}
        css={css`
          > {
            margin: 4px;
          }
          > div {
            align-items: "center";
          }
        `}
      >
        {children}
        {/* {typeof component === "function" ? component() : component} */}
      </Box>

      <Box
        bgColor="paper"
        shadow={showingCode ? 2 : 0}
        overflow="visible"
        radius={6}
        m={[16, 0]}
      >
        <div css={styles.buttons}>
          <IconButton
            css={styles.button}
            onClick={copyCode}
            color={theme.palette.text.primary}
            icon={<Icons.Clipboard size={16} />}
          />
          <IconButton
            css={styles.button}
            onClick={toggleCode}
            color={theme.palette.text.primary}
            icon={<Icons.Code size={16} />}
          />
        </div>
        <Collapse open={showingCode}>
          <Box m={[4, 0, 0, 0]} style={{ maxHeight: 500, overflow: "auto" }}>
            <PrismHighlighter code={fileText} />
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
