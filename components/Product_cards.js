import React from "react";
import Link from "next/link";

import styles from "../styles/card.module.scss";

function Product_cards() {
  return (
    <>
      <div className={styles.card}>
        <Link href="product/23">
          <img
            src="/alex-hddife-6wWiZlA2n0Q-unsplash-removebg-preview.png"
            alt=""
          />
        </Link>
        <h4>Nike Geforce</h4>
        <p>men's shoe</p>
        <h4>$599</h4>
      </div>
    </>
  );
}

export default Product_cards;
