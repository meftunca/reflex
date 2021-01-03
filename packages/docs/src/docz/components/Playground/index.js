/** @jsx jsx */
import { Box, Collapse, css, IconButton, jsx, styled } from "@re-flex/ui";
import copy from "copy-text-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import React from "react";
import * as Icons from "../Icons";
import * as styles from "./styles";

const Pre = styled.pre`
  text-align: left;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const PrismHighlighter = ({ code, language = "jsx", ...rest }) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={code}
    language={language}
    {...rest}
  >
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
const JsxString = (component, counter = 0) => {
  let type = component.props?.mdxType || "div";
  let props = component.props;
  let propsString = "";
  for (let key in props) {
    if (key !== "children") {
      let propValue = props[key];
      let value = "";
      if (propValue instanceof Object) {
        value = `{${JSON.stringify(propValue).replace(/['"]+/g, "")}}`;
      } else {
        value = `"${propValue}"`;
      }
      propsString += ` ${key}=${value}`;
    }
  }
  if (props?.children) {
    counter += 2;
    var children = JsxString(props.children, counter);
    return `<${type}${propsString}>
${Array(counter).join(" ")}  ${children}
${Array(counter).join(" ")}</${type}>`;
  }
  return `<${type}${propsString} />`;
};
export const Playground = ({ code, children: component, column = false }) => {
  // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
  const [showingCode, setShowingCode] = React.useState(false);
  const copyCode = () => copy(code);

  const toggleCode = () => setShowingCode((s) => !s);
  return (
    <Box p={0} m={[32, 0]} radius={4}>
      <Box
        p={[8, 24]}
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
            color="#454545"
            icon={<Icons.Clipboard size={16} />}
          />
          <IconButton
            css={styles.button}
            onClick={toggleCode}
            color="#454545"
            icon={<Icons.Code size={16} />}
          />
        </div>
        <Collapse open={showingCode}>
          <Box m={[4, 0, 0, 0]}>
            <pre>
              <code>{JsxString(component)}</code>
            </pre>
            {/* <PrismHighlighter
              plugins={["line-numbers"]}
              code={code}
              language={language}
            /> */}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
