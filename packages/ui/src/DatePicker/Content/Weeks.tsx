/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import Table from "../../Table";
import DayCell from "../Cells/DayCell";
import { useDatePicker } from "../Context";

type weekProps = {
  role: "first" | "last";
};

const WeekContents: React.FC<weekProps> = ({ role }) => {
  const {
    state: { cells, mode, selectedDate },
    dateLists,
  } = useDatePicker();
  const Day = cells?.WeekDay || DayCell;

  return (
    <Table.TBody>
      {dateLists.weekList[role].map((week, weekIndex) => (
        <Table.Tr key={weekIndex} css={css({ padding: "4px 0" })}>
          {week.map((day, dayIndex) => (
            <Table.Td
              key={dayIndex}
              css={css({
                padding: "4px 0 !important",
                textAlign: "center",
              })}
            >
              {/* @ts-ignore */}
              <Day day={day} role={role} />
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.TBody>
  );
};

export default WeekContents;
