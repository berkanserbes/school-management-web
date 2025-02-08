import AttendanceChart from "@/components/attendance-chart";
import CountChart from "@/components/count-chart";
import FinanceChart from "@/components/finance-chart";
import UserCard from "@/components/user-card";

const AdminPage = () => {
  return (
    <div className="p-4">
      {/* Left Start */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex flex-row gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>

      </div>
      {/* Left End */}

      {/* Right Start */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      
      </div>
      {/* Right End */}
    </div>
  );
};

export default AdminPage;
