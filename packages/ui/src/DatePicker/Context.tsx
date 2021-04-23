import dayjs, { Dayjs } from "dayjs";
import React, { createContext, MouseEvent, useContext, useMemo } from "react";
import { BoxProps } from "../Box";
import useSetState from "../utils/hooks/useSetState";
import DayCell, { CellProps } from "./Cells/DayCell";
import HeaderCells from "./Cells/HeaderCells";
import generateDateRows from "./Helpers/generatedRows";
export type Locale = {
  locale: string;

  // ===================== Date Panel =====================
  /** Display month before year in date panel header */
  monthBeforeYear?: boolean;
  yearFormat: string;
  monthFormat?: string;
  quarterFormat?: string;

  today: string;
  now: string;
  backToToday: string;
  ok: string;
  timeSelect: string;
  dateSelect: string;
  weekSelect?: string;
  clear: string;
  month: string;
  year: string;
  previousMonth: string;
  nextMonth: string;
  monthSelect: string;
  yearSelect: string;
  decadeSelect: string;

  dayFormat: string;
  dateFormat: string;
  dateTimeFormat: string;
  previousYear: string;
  nextYear: string;
  previousDecade: string;
  nextDecade: string;
  previousCentury: string;
  nextCentury: string;

  shortWeekDays?: string[];
  shortMonths?: string[];
};

export type DatePickerProps = {
  locale?: Locale;
  containerProps?: BoxProps;
  Trigger?: (props?: {
    onClick: (events: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void;
  }) => React.ReactNode;
  embed?: boolean;
  panelType?:
    | "time"
    | "date"
    | "week"
    | "month"
    | "quarter"
    | "year"
    | "decade";
  type?: "calendar" | "picker";
  mode?: "range" | "default";
  onSelectDate?: (
    date: Dayjs | Dayjs[],
    events: MouseEvent<HTMLButtonElement>
  ) => void;
  today?: Dayjs;
  previewDate: Dayjs[];
  selectedDate: Dayjs[];
  /*
    @dateMarks new Map("2020.11.24",[]) gibi
  */
  dateMarks?: Map<string, Dayjs[]>;
  cells: {
    Header: () => React.ReactNode;
    WeekDay: (cellProps: CellProps) => React.ReactNode;
  };
};

type dateLists = {
  dayNames: string[];
  weekList: { first: Dayjs[][]; last: Dayjs[][] };
  monthList: string[];
  yearList: number[];
};

type controlTypes = {
  prevWeek: (index: number) => void;
  nexvWeek: (index: number) => void;
  prevMonth: (index: number) => void;
  nextMonth: (index: number) => void;
  prevYear: (index: number) => void;
  nextYear: (index: number) => void;
};

const DatePickerContext = createContext<{
  dateLists: dateLists;
  controls: controlTypes;
  state: DatePickerProps;
  onChangeSelectedDate: (day1: Dayjs) => void;
  setState: (f: any) => void;
}>({
  dateLists: {
    dayNames: [],
    weekList: { first: [], last: [] },
    monthList: [],
    yearList: [],
  },
  onChangeSelectedDate: (d: Dayjs) => null,
  controls: {
    prevWeek: (index: number) => null,
    nexvWeek: (index: number) => null,
    prevMonth: (index: number) => null,
    nextMonth: (index: number) => null,
    prevYear: (index: number) => null,
    nextYear: (index: number) => null,
  },
  setState: (f: any) => null,
  state: {
    today: dayjs(),
    previewDate: [dayjs()],
    dateMarks: new Map(),
    selectedDate: [],
    cells: {
      Header: () => <HeaderCells />,
      WeekDay: (props) => <DayCell {...props} />,
    },
    panelType: undefined,
    embed: false,
    type: "picker",
    mode: "default",
    onSelectDate: undefined,
    containerProps: { shadow: 2, p: 8, radius: 8 },
    Trigger: () => <></>,
    locale: undefined,
  },
});

export const DatePickerProvider: React.FC<DatePickerProps> = ({
  today = dayjs(),
  previewDate,
  dateMarks = new Map(),
  selectedDate = [],
  cells = {
    Header: () => <HeaderCells />,
    WeekDay: (props) => <DayCell {...props} />,
  },
  panelType = undefined,
  embed = false,
  type = "picker",
  mode = "default",
  onSelectDate = undefined,
  containerProps = {},
  Trigger = () => <></>,
  locale = undefined,
  children,
}) => {
  const [state, setState] = useSetState<DatePickerProps>({
    today,
    previewDate: mode === "range" ? [today, today.add(1, "month")] : [today],
    dateMarks,
    selectedDate,
    cells,
    panelType,
    embed,
    type,
    mode,
    onSelectDate,
    containerProps,
    Trigger,
    locale,
  });

  const changePreviewDate = (
    selectedTypeIndex: number,
    selectedType: "month" | "year" | "day"
  ) => {
    setState({
      previewDate:
        mode === "range"
          ? [
              dayjs(state.previewDate[0].set(selectedType, selectedTypeIndex)),
              dayjs(
                state.previewDate[0]
                  .set(selectedType, selectedTypeIndex)
                  .add(1, "month")
              ),
            ]
          : [dayjs(state.previewDate[0].set(selectedType, selectedTypeIndex))],
    });
  };

  const dateLists = useMemo(() => {
    const dayNames = Array(7)
      .fill("")
      .map((_, k) =>
        dayjs()
          .day(k)
          .format("ddd")
      );
    const monthList = Array(12)
      .fill("")
      .map((_, k) =>
        dayjs()
          .set("month", k)
          ?.format("MMM")
      );
    const weekList = {
      first: generateDateRows(state.previewDate[0]),
      last: generateDateRows(state.previewDate[1] || dayjs()),
    };
    const yearList = Array(150)
      .fill("")
      .map((_, k) => 1970 + k);
    return { dayNames, monthList, weekList, yearList };
  }, [state.previewDate]);

  const controls = useMemo(() => {
    return {
      prevWeek: (index: number) => changePreviewDate(index, "day"),
      nexvWeek: (index: number) => changePreviewDate(index, "day"),
      prevMonth: (index: number) =>
        changePreviewDate(state.previewDate[0].month() - 1, "month"),
      nextMonth: (index: number) =>
        changePreviewDate(state.previewDate[0].month() + 1, "month"),
      prevYear: (index: number) =>
        changePreviewDate(state.previewDate[0].year() - 1, "year"),
      nextYear: (index: number) =>
        changePreviewDate(state.previewDate[0].year() + 1, "year"),
    };
  }, [state.previewDate]);

  const onChangeSelectedDate = (day: Dayjs) => {
    let selectedDates = state.selectedDate;
    if (mode === "range") {
      if (selectedDates.length === 1) {
        // if (selectedDates[0].month() === day.month()) day.add(1, "month");
        selectedDates[1] = day;
      } else if (selectedDates.length === 2) {
        selectedDates = [day];
      } else {
        selectedDates = [day];
      }
    } else {
      selectedDates = [day];
    }
    setState({ selectedDate: selectedDates });
  };

  return (
    <DatePickerContext.Provider
      value={{
        state,
        controls,
        dateLists,
        setState,
        onChangeSelectedDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => {
  const docPicker = useContext(DatePickerContext);

  return docPicker;
};
