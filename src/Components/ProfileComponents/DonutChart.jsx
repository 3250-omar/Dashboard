import Chart from "react-apexcharts";

const DonutChart = (darkMode) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 350,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="bg-white rounded-lg px-4 py-5 flex items-center justify-center dark:bg-gray-600">
      <Chart
        options={options.options}
        series={options.series}
        type="donut"
        height={300}
      />
    </div>
  );
};

export default DonutChart;
