/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { Fragment } from "react";
import Box from "../Box";
import Button from "../Button";
import IconButton from "../IconButton/IconButton";
import Popper from "../Popper";
import Table from "../Table";
import Text from "../Typography";
import WeekContents from "./Content/Weeks";
import { DatePickerProps, DatePickerProvider, useDatePicker } from "./Context";
import WeekDayHeader from "./Headers/WeekDays";
// type stateType = {
//   visible: boolean;
//   activeDate: Dayjs;
//   selectedDate: Dayjs;
// };

type DatePickerBaseProps = {};

const DatePickerBase: React.FC<DatePickerBaseProps> = ({}) => {
  const {
    state: { containerProps, previewDate, mode },
    controls,
  } = useDatePicker();

  return (
    <Box
      shadow={mode === "range" ? 0 : 2}
      p={mode === "range" ? 0 : 8}
      radius={mode === "range" ? 0 : 8}
      {...containerProps}
    >
      <Box
        css={css({
          display: "flex",
          alignItems: "center",
          padding: 12,
        })}
      >
        <IconButton onClick={() => controls.prevYear(-1)} size={13}>
          <span className="material-icons">first_page</span>
        </IconButton>
        <IconButton onClick={() => controls.prevMonth(-1)} size={13}>
          <span className="material-icons">chevron_left</span>
        </IconButton>
        <div css={css({ flexGrow: 1 })} />
        <Text align="center">
          {mode === "range" && (
            <Text size={12}>{previewDate[0].format("YYYY")}</Text>
          )}
          {mode === "range"
            ? previewDate[0].format("MMM") +
              " - " +
              previewDate[1].format("MMM")
            : previewDate[0].format("MMM, YYYY")}
        </Text>
        <div css={css({ flexGrow: 1 })} />
        <IconButton onClick={() => controls.nextMonth(1)} size={13}>
          <span className="material-icons">chevron_right</span>
        </IconButton>
        <IconButton onClick={() => controls.nextYear(1)} size={13}>
          <span className="material-icons">last_page</span>
        </IconButton>
      </Box>
      <div css={css({ display: "inline-flex" })}>
        <Table
          css={css({
            minWidth: "auto",
            "th,td": { padding: 6 },
          })}
        >
          <WeekDayHeader />
          <WeekContents role={"first"} />
        </Table>
        {mode === "range" && (
          <Fragment>
            <div
              css={{
                borderLeft: "2px solid #9993",
                marginLeft: 12,
                paddingLeft: 12,
              }}
            />
            <Table
              css={css({
                minWidth: "auto",
                "th,td": { padding: 6 },
              })}
            >
              <WeekDayHeader />
              <WeekContents role={"last"} />
            </Table>
          </Fragment>
        )}
      </div>
    </Box>
  );
};
const DatePickerRange: React.FC = () => {
  const {
    /* @ts-ignore */
    state: { Trigger, containerProps, previewDate },
  } = useDatePicker();

  return (
    <Popper
      placement="left"
      content={
        <Box width="auto" css={css({ display: "flex" })} {...containerProps}>
          <DatePickerBase />
        </Box>
      }
    >
      {/* @ts-ignore */}
      <Button>Open</Button>
    </Popper>
  );
};
const DatePickerWrapper: React.FC<DatePickerProps> = (props) => (
  <DatePickerProvider {...props}>
    <DatePickerRange />
  </DatePickerProvider>
);
export default DatePickerWrapper;
