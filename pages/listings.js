import React from "react";
import Product_cards from "../components/Product_cards";
import styles from "../styles/listings.module.scss";

function listings() {
  return (
    <div className={styles.container}>
      <div>
        <h3>Men's Wear (113)</h3>
        <div>
          <p>Filter icon/</p>
          <p>Sort By icon/</p>
        </div>
      </div>
      <div className={styles.cards}>
        <Product_cards />
        <Product_cards />
        <Product_cards />
      </div>
    </div>
  );
}

export default listings;
