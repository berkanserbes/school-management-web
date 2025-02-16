import Announcement from "@/components/announcement";
import Calendar from "@/components/calendar";

const TeacherPage = () => {
    return (<div className="flex flex-1 flex-col xl:flex-row gap-4 p-4">
        {/* Left start */}
        <div className="w-full xl:w-2/3">
            <div className="h-full bg-white rounded-md p-4">
                <h1 className="text-xl font-semibold">Schedule (Teacher)</h1>
                <Calendar />
            </div>
        </div>
        {/* Left end */}

        {/* Right start */}
        <div className="w-full xl:w-1/3 flex flex-col gap-8">
            <Announcement />
        </div>
        {/* Right end */}
    </div>)
}

export default TeacherPage;