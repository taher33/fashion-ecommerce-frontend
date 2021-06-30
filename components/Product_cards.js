import React from "react";
import Link from "next/link";

import styles from "../styles/card.module.scss";

function Product_cards(props) {
  return (
    <>
      <div className={styles.card}>
        <Link href={"/product/" + props._id}>
          <img
            src={"https://fashion-app-taher.herokuapp.com/" + props.image}
            alt=""
          />
        </Link>
        <h4>{props.title}</h4>
        <p>{props.details}</p>
        <h4>{props.price + "$"}</h4>
      </div>
    </>
  );
}

export default Product_cards;
