import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { axios_instance } from "../../lib/axios ";
function index() {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const call_api = async () => {
    try {
      const { data } = await axios_instance(true)({
        url: "/products/admin",
        method: "GET",
      });

      const total = data.model.map((el) => el.total * 1);
      const date = data.model.map((el) => el._id);
      setData(total);
      setDates(date);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    call_api();
  }, []);
  return (
    <div>
      <Line
        data={{
          labels: dates,
          tension: 1,
          datasets: [
            {
              label: "# of Votes",
              tension: 0.3,
              data: data,

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
