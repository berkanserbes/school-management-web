"use client";
import { useState } from "react";
import EventCalendarUI from "./EventCalendar.ui";
import { Value } from "./EventCalendar.type";

const EventCalendarContainer = () => {
  const [value, onChange] = useState<Value>(new Date());

  return <EventCalendarUI value={value} onChange={onChange} />;
};

export default EventCalendarContainer;
