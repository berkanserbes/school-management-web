import CountChartUI from "./CountChart.ui";

const data = [
    {
      name: "Total",
      count: 106,
      fill: "white",
    },
    {
      name: "Girls",
      count: 53,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: 53,
      fill: "#C3EBFA",
    },
  ];

const CountChartContainer = () => {
    return(
        <CountChartUI data={data} />
    )
}

export default CountChartContainer;