"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

interface DataItem {
  name: string;
  count: number;
  fill: string;
}

const CountChartUI = ({ data }: { data: DataItem[] }) => {
  return (
    <div className="bg-white border border-1 border-gray-300 rounded-xl w-full h-full p-4">
      {/* Title Start */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Title End */}

      {/* Chart Start */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            data={data}
            barSize={32}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
          >
            <RadialBar background dataKey="count" fill="#8884d8" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Chart End */}

      {/* Bottom Start */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-[#C3EBFA]" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-[#FAE27C]" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
      {/* Bottom End */}
    </div>
  );
};

export default CountChartUI;
