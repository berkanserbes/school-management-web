"use client";
import { Calendar, DateLocalizer, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";

const CalendarUI = ({
  localizer,
  handleViewOnChange,
  view,
}: {
  localizer: DateLocalizer;
  handleViewOnChange: (view: View) => void;
  view: View;
}) => {
  return (
    <Calendar
      localizer={localizer}
      onView={handleViewOnChange}
      startAccessor={"start"}
      endAccessor={"end"}
      view={view}
      events={calendarEvents}
      views={["work_week", "day"]}
    />
  );
};

export default CalendarUI;
