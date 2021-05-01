import React from "react";
import { Bar, Line } from "react-chartjs-2";
function index() {
  return (
    <div>
      <Line
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          tension: 1,
          datasets: [
            {
              label: "# of Votes",
              tension: 0.3,
              data: [12, 9, 3, 5, 15, 3],

              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              // borderWidth: 1,
            },
          ],
        }}
        width={1000}
        height={400}
        options={{
          maintainAspectRatio: false,

          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default index;
