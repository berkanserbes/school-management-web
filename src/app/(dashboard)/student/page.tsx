import Announcement from "@/components/announcement";
import Calendar from "@/components/calendar";
import EventCalendar from "@/components/event-calendar";

const StudentPage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4">
        {/* Left start */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Student)</h1>
          <Calendar />
        </div>
      </div>
      {/* Left end */}  

      {/* Right start */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
      {/*  Right end */}
    </div>
  );
};

export default StudentPage;
