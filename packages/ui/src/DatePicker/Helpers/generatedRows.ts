import dayjs, { Dayjs } from "dayjs";
import times from "./times";
/**
 * This beast generates a multi-dimensional array of dates,
 * dayjs date objects to be exact.
 * It takes a date and generates
 *
 * @param [dayjs] date
 * @return Array<Array<dayjs>>
 */
const generateDateRows = (date: Dayjs) => {
  const year = date.year();
  const daysInMonth = date.daysInMonth();
  const rows: Dayjs[][] = [[]];
  let rowIndex = 0;

  // fill in initial rows
  times(daysInMonth, (num) => {
    const temp = dayjs(new Date(year, date.month(), num + 1));
    const dow = temp.day();
    rows[rowIndex].push(temp);
    if (dow === 6 && num !== daysInMonth - 1) {
      rowIndex += 1;
      rows.push([]);
    }
  });

  const rowLen = rows.length;
  const firstRow = rows[0];

  // backfill days from prev month in first week of month
  if (firstRow.length !== 7) {
    const backfillBy = 7 - firstRow.length;
    const first = firstRow[0];

    times(backfillBy, (num: number) => {
      const d = first
        .clone()
        .startOf("week")
        .add(num, "day");
      firstRow.splice(num, 0, d);
    });
  }

  // frontfill days from next month in last week of month
  const lastRow = rows[rowLen - 1];
  if (lastRow.length !== 7) {
    const fillBy = 7 - lastRow.length;
    const lastLen = lastRow.length;
    const last = lastRow[lastLen - 1];

    times(fillBy, (num: number) => {
      const d = last.clone().add(num + 1, "day");
      lastRow.push(d);
    });
  }

  return rows;
};

export default generateDateRows;
