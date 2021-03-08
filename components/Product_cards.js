import React from "react";
import { axios_instance } from "../lib/axios ";
import styles from "../styles/card.module.scss";
import { useDispatch, useSelector } from "react-redux";

function Product_cards() {
  //   axios_instance(true)({
  //     url: "/products",
  //     method: "GET",
  //   }).then(() => {
  //     console.log("we called the api ");
  //   });
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className={styles.card}>
      <img
        src="/alex-hddife-6wWiZlA2n0Q-unsplash-removebg-preview.png"
        alt=""
      />
      <h4>Nike Geforce</h4>
      <p>men's shoe</p>
      <h4>$599</h4>
    </div>
  );
}

export default Product_cards;
