import React from "react";
import styles from "../styles/products.module.scss";
import Product_cards from "./Product_cards";

function Products_listing() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>
          <span>Best</span> Seller
        </h1>
        <p className={styles.see_more}>see more --&gt;</p>
      </div>
      <div className={styles.cards}>
        <Product_cards />
        <Product_cards />
        <Product_cards />
        <Product_cards />
      </div>
    </section>
  );
}

export default Products_listing;
