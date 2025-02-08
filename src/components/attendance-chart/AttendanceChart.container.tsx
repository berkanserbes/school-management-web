import AttendanceChartUI from "./AttendanceChart.ui";

const data = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
  ];

const AttendanceChartContainer = () => {
    return <AttendanceChartUI data={data} />
}

export default AttendanceChartContainer;