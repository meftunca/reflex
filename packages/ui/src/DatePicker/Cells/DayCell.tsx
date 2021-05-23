/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import dayjs, { Dayjs } from "dayjs";
import React, { useCallback, useMemo } from "react";
import Button from "../../IconButton/IconButton";
import { useDatePicker } from "../Context";

export type CellProps = {
  day: Dayjs;
  role: "first" | "last";
};

const DayCell: React.FC<CellProps> = ({ day, role }) => {
  const {
    state: { selectedDate, previewDate, mode, today },
    onChangeSelectedDate,
  } = useDatePicker();
  const theme = useTheme();

  const isSelected = useMemo(() => {
    return selectedDate.some(
      (d) => day.format("YYYY-MM-DD") === d.format("YYYY-MM-DD")
    );
  }, [selectedDate, day]);

  const isBetween = useMemo(() => {
    if (mode === "range" && selectedDate.length === 2) {
      let query1 = false,
        query2 = false;
      if (role === "first") {
        query1 = day.isAfter(selectedDate[0]);
      } else if (role === "last") {
        query2 = day.isBefore(selectedDate[1]);
      }
      return query1 || query2;
    }
    return false;
  }, [selectedDate, day]);

  const selectedColor = useMemo(() => {
    return isSelected
      ? theme.palette.success.main
      : // : day.month() !== previewDate[role === "first" ? 0 : 1].month()
        // ? theme.palette.secondary
        theme.palette.text.primary;
  }, [isSelected]);

  const onClick = () => onChangeSelectedDate(day);
  return (
    <div
      css={{
        display:
          day.month() !== previewDate[role === "first" ? 0 : 1].month()
            ? "none"
            : "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: isSelected
          ? "#0001"
          : isBetween
          ? "#0001"
          : "transparent",
        borderRadius:
          (role === "first" && isSelected && selectedDate.length === 2) ||
          day.date() === 1
            ? "30px 0 0 30px"
            : (role === "last" && isSelected && selectedDate.length === 2) ||
              day.endOf("month").date() === day.date()
            ? "0 30px  30px 0"
            : "0",
        padding: 4,
      }}
    >
      <Button
        size={1}
        onClick={onClick}
        variant={
          isSelected ? "contained" : dayjs().isSame(day) ? "outlined" : "text"
        }
        color={selectedColor}
        css={{ fontSize: 14 }}
      >
        {day.format("DD")}
      </Button>
    </div>
  );
};

export default DayCell;
