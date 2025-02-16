import Announcement from "@/components/announcement";
import Calendar from "@/components/calendar";

const ParentPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 xl:flex-row p-4">
      {/* Left start */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md">
            <h1 className="text-xl font-semibold">Schedule (Berkan Serbes)</h1>
            <Calendar />
        </div>
      </div>
      {/* Left end */}

      {/* Right start */}
      <div className="flex flex-col gap-8 w-full xl:w-1/3 ">
        <Announcement />
      </div>
      {/* Right End  */}
    </div>
  );
};

export default ParentPage;
