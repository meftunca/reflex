/* eslint react/jsx-key: 0 */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { mdx } from "@mdx-js/react";
import * as Reflex from "@re-flex/ui";
import { image } from "faker/locale/en";
import Highlight, { defaultProps } from "prism-react-renderer";
import ultramin from "prism-react-renderer/themes/palenight";
import React, { useEffect } from "react";
import * as FICons from "react-icons/fi";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
export default ({
  children,
  column = false,
  className,
  live,
  render,
  ...rest
}) => {
  const [] = React.useState();
  const language = className.replace(/language-/, "");
  useEffect(() => {
    if (rest.path) {
      fetch(rest.path)
        .then((d) => d.text())
        .then(console.log);
    }
  }, []);
  if (live) {
    return (
      <>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => {
            return `
            /** @jsx mdx */ 
            /** @jsx jsx */ 
             ${code}
            `;
          }}
          scope={{
            mdx,
            ...Reflex,
            ...FICons,
            image,
          }}
          theme={ultramin}
        >
          <Reflex.Box
            m={[40, 0]}
            radius={8}
            bgColor="paper"
            css={{
              display: "flex",
              flexDirection: column ? "column" : "row-reverse",
              border: "1px solid #99999999",
              "@media screen and (max-width:1336px)": {
                flexDirection: "column",
              },
            }}
            style={{ border: "1px solid #00000010" }}
          >
            <Reflex.Box p={[40, 16]} mb={16}>
              <LivePreview
                css={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  overflow: "hidden",
                  alignItems: "center",
                  "> *": {
                    margin: 4,
                  },
                }}
              />
            </Reflex.Box>
            <Reflex.Box>
              <LiveEditor
                css={{
                  height: "100%",
                }}
              />
            </Reflex.Box>
          </Reflex.Box>
          <LiveError />
        </LiveProvider>
      </>
    );
  }
  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
