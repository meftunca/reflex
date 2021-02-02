import React from "react";
import Table from "../../Table";
import Text from "../../Typography";
import { useDatePicker } from "../Context";

type WeekDayHeaderProps = {};

const WeekDayHeader: React.FC<WeekDayHeaderProps> = ({}) => {
  const {
    /* @ts-ignore */
    dateLists: { dayNames },
  } = useDatePicker();
  return (
    <Table.THead>
      {dayNames.map((i: string, k: number) => (
        <Table.Th key={k}>
          <Text variant="caption" align="center" weight="bold">
            {i}
          </Text>
        </Table.Th>
      ))}
    </Table.THead>
  );
};

export default WeekDayHeader;
