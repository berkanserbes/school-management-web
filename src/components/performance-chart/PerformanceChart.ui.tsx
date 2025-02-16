import Image from "next/image";

const PerformanceChartUI = () => {
  return <div className="bg-white p-4 rounded-md">
    <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
    </div>
  </div>;
};

export default PerformanceChartUI;
