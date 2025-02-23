import Calendar from "react-calendar";
import { Value } from "./EventCalendar.type";

const EventCalendarUI = ({
  value,
  onChange,
}: {
  value: Value;
  onChange: (value: Value) => void;
}) => {
  return (
    <div>
      <Calendar value={value} onChange={onChange} />
    </div>
  );
};

export default EventCalendarUI;
