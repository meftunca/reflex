/** @jsx jsx */
import { Box, Collapse, IconButton, jsx, Text } from "@re-flex/ui";
import React, { useState } from "react";
import { ChevronDown } from "../Icons";
import * as styles from "./styles";
export const getDefaultValue = ({ defaultValue, type, flowType }) => {
  const [] = React.useState("");
  const propType = flowType ? flowType : type;
  if (!defaultValue || !defaultValue.value) return null;
  if (defaultValue.value === "''") {
    return "[Empty string]";
  }
  if (propType && propType.name === "string") {
    return defaultValue.value.replace(/\'/g, '"');
  }
  if (typeof defaultValue.value === "object" && defaultValue.value.toString) {
    return defaultValue.value.toString();
  }
  return defaultValue.value;
};

export const Prop = ({ propName, prop }) => {
  const [showing, setShowing] = useState(false);
  if (!prop.type && !prop.flowType) return null;
  const toggle = () => setShowing((s) => !s);
  return (
    <>
      <div css={styles.line} data-testid="prop">
        <div css={{ ...styles.propName }}>
          <Text variant="subtitle2" css={{ textTransform: "none" }}>
            {propName}
          </Text>
        </div>
        <div css={{ ...styles.propType }}>
          <Text
            variant="body2"
            color="#1796dc"
            colorDepth="main"
            css={{ textTransform: "none" }}
          >
            {prop?.type.name}
          </Text>
        </div>
        {prop.defaultValue ? (
          <div
            css={{ ...styles.defaultValue }}
            data-testid="prop-default-value"
          >
            <Text variant="body2" css={{ textTransform: "none" }}>
              {getDefaultValue(prop)}
            </Text>
          </div>
        ) : (
          <div css={{ flexGrow: 1 }} />
        )}
        <div css={styles.right}>
          {prop.required && (
            <div css={styles.propRequired} data-testid="prop-required">
              <strong>required</strong>
            </div>
          )}
          {prop.description && (
            <IconButton
              css={styles.openDescBtn}
              onClick={toggle}
              color={showing ? "primary" : "text"}
              data-testid="prop-toggle-description"
              icon={
                <ChevronDown
                  size={20}
                  css={{
                    transform: `rotate(${showing ? 180 : 0}deg)`,
                    transition: "all .2s ease",
                  }}
                />
              }
            />
          )}
        </div>
      </div>

      <Collapse open={showing && prop.description}>
        <Box bgColor="body" p={[16, 16, 32, 16]}>
          <Text variant="body2">{prop.description}</Text>
        </Box>
      </Collapse>
    </>
  );
};

export const Props = ({ props = {}, displayName, description, ...rest }) => {
  const entries = Object.entries(rest.of?.__docgenInfo?.props || props);
  return (
    <Box
      bgColor="paper"
      shadow={1}
      radius={6}
      p={[16, 8]}
      data-testid="props"
      css={{ display: "table", maxHeight: 500, overflowY: "overlay" }}
    >
      {entries.map(([key, prop]) => (
        <Prop key={key} propName={key} prop={prop} />
      ))}
    </Box>
  );
};
