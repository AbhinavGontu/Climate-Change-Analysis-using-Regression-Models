import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const labels = [
    "Height",
    "Humidity",
    "Pressure",
    "Latitude",
    "Longtitude",
    "Wind Speed",
  ];
  const datas = [
    4.811379e9,
    7.596272e6,
    3.99896e6,
    6.446894e5,
    4.545948e5,
    2.175042e4,
  ];
  const getChartData = () => {
    let chartData = {
      labels: labels,
      datasets: [
        {
          label: "Factor Change",
          data: datas,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(175, 50, 50, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(238, 147, 248, 0.8)",
            "rgba(0, 0, 0, 0.8)",

          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(175, 50, 50, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(237, 81, 253, 1)",
          ],
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
        Factor Weight
      </div>
      <Pie
        data={() => getChartData()}
        options={chartOptions}
        width={600}
        height={400}
      />
    </div>
  );
};

export default PieChart;
