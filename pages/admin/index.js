import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Line } from "react-chartjs-2";
import { axios_instance } from "../../lib/axios ";
import CreatePost from "../../components/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../../store/actions";

export const getServerSideProps = async ({ req }) => {
  try {
    const {
      data: { user },
    } = await axios_instance(true)({
      method: "GET",
      url: "users/checkAuth",
      headers: { cookie: req.cookies.jwt },
    });

    if (!user && user.role !== "admin") {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    if (user.role !== "admin") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

function index() {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const { user, logedIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

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

    if (!logedIn) dispatch(checkAuth());
    if (user.role !== "admin") {
      console.log(user.role);
    }
  }, [logedIn]);

  return (
    <>
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
      <CreatePost />
    </>
  );
}

export default index;
