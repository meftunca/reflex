/* @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { Fragment, useCallback, useState } from "react";
import Button, { Props as ButtonProps } from "../Button";
import Text, { TextProps } from "../Typography";
import {
  StepContentBase,
  StepContentItemBase,
  StepFooterBase,
  StepHeaderBase,
  StepHeaderBaseDivider,
  StepWrapperBase,
} from "./Styled";

type HeaderItem = {
  icon: () => React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleProps?: TextProps;
  descriptionProps?: TextProps;
  buttonProps?: ButtonProps;
};

type ActionProps = {
  //   to parametresi girilirse istenilen adıma gider
  forward: (to?: number) => void;
  backward: () => void;
  currentIndex: number;
};

type contentItem = (props: ActionProps) => React.ReactNode;

type Props = {
  direction: "horizontal" | "vertical";
  contents: contentItem[];
  headers: HeaderItem[];
};

const Stepper: React.FC<Props> = ({ direction, contents, headers }) => {
  const [step, setStep] = useState(0);

  const backward = useCallback(() => {
    setStep((s) => (s === 0 ? contents.length - 1 : s - 1));
  }, []);

  const forward = useCallback((to?: number) => {
    setStep((s) =>
      to !== undefined && (to < contents.length || to >= 0)
        ? to
        : s === contents.length - 1
        ? 0
        : s + 1
    );
  }, []);

  return (
    <StepWrapperBase>
      <StepHeaderBase css={{ padding: 16 }}>
        {headers.map(
          (
            {
              icon,
              title,
              description,
              titleProps,
              descriptionProps,
              buttonProps,
            },
            k
          ) => (
            <Fragment>
              {k !== 0 && (
                <StepHeaderBaseDivider>
                  <span />
                </StepHeaderBaseDivider>
              )}
              <Button
                onClick={() => forward(k)}
                css={{ padding: 8 }}
                {...buttonProps}
              >
                <div css={{ display: "flex", alignItems: "center" }}>
                  {icon && icon()}
                  <div css={{ padding: "0 8px" }}>
                    <Text variant="subtitle1" {...titleProps}>
                      {title}
                    </Text>
                    {description && (
                      <Text variant="caption" {...descriptionProps}>
                        {description}
                      </Text>
                    )}
                  </div>
                </div>
              </Button>
            </Fragment>
          )
        )}
      </StepHeaderBase>
      <div css={css({ overflowX: "hidden", boxSizing: "content-box" })}>
        <StepContentBase css={{ transform: `translateX(-${step * 100}%)` }}>
          {contents.map((Comp, k) => (
            <StepContentItemBase key={k}>
              {/* @ts-ignore */}
              <Comp backward={backward} currentIndex={step} forward={forward} />
            </StepContentItemBase>
          ))}
        </StepContentBase>
      </div>
      <StepFooterBase></StepFooterBase>
    </StepWrapperBase>
  );
};

export default Stepper;
