import React from "react";
import { Calendar as ACalendar } from "antd";
import type { CalendarProps } from "antd";
import type { Moment } from "moment";

const Calendar: React.FC<CalendarProps<Moment>> = (props) => {
  return <ACalendar {...props} />;
};

export { Calendar };
