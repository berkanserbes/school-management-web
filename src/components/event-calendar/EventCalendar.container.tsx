"use client";
import { useState } from "react";
import EventCalendarUI from "./EventCalendar.ui";
import { Value } from "./EventCalendar.type";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendarContainer = () => {
  const [value, onChange] = useState<Value>(new Date());

  return <EventCalendarUI value={value} onChange={onChange} events={events} />;
};

export default EventCalendarContainer;
