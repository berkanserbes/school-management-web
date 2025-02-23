import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Event, Value } from "./EventCalendar.type";
import Image from "next/image";

const EventCalendarUI = ({
  value,
  onChange,
  events,
}: {
  value: Value;
  onChange: (value: Value) => void;
  events: Event[];
}) => {
  return (
    <div className="bg-white rounded-md">
      <Calendar value={value} onChange={onChange} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="p-5 rounded-md border-2 border-gray-100 odd:border-teal-300 even:border-violet-500"
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendarUI;
