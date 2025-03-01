"use client";
import CalendarUI from "./Calendar.ui";
import moment from "moment";
import { useState } from "react";
import { momentLocalizer, View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const CalendarContainer = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewOnChange = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <CalendarUI
      localizer={localizer}
      view={view}
      handleViewOnChange={handleViewOnChange}
    />
  );
};

export default CalendarContainer;
