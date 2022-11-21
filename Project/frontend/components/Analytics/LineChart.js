import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const chartOptions = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            tooltipFormat: "MMM YYYY",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const mockLabels = [
    // "1880-01-01",
    // "1890-01-01",
    // "1900-01-01",
    // "1910-01-01",
    // "1920-01-01",
    // "1930-01-01",
    // "1940-01-01",
    // "1950-01-01",
    // "1960-01-01",
    // "1970-01-01",
    // "1980-01-01",
    // "1990-01-01",
    // "2000-01-01",
    "2018-01-01",
    "2020-01-01",
  ];
  const mockDatas = [
    // 13.73,
    // 13.75,
    // 13.74,
    // 13.72,
    // 13.83,
    // 13.96,
    // 14.04,
    // 13.98,
    // 13.99,
    14.01,
    14.24,
    // 14.21,
    // 14.51,
    // 14.63,
    // 14.99,
  ];
  const getChartData = () => {
    let chartData = {
      labels: mockLabels,
      datasets: [
        {
          label: "tempeture",
          data: mockDatas,
          backgroundColor: [
            "rgba(249, 137, 61, 0.8)",
            "rgba(175, 50, 50, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(252, 196, 66, 0.8)",
            "rgba(175, 50, 50, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return chartData;
  };

  return (
    <div>
      <div
        style={{
          display: "block",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Change of Temperature Rising
      </div>
      <Line
        data={() => getChartData()}
        options={chartOptions}
        width={600}
        height={400}
      />
    </div>
  );
};

export default LineChart;
