import React, { useState } from "react";
import { useEffect } from "react";
import { axios_instance } from "../lib/axios ";
import Product_cards from "./Product_cards";

import styles from "../styles/products.module.scss";

function Products_listing(props) {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts(sort) {
    try {
      const { data } = await axios_instance()({
        method: "GET",
        url: "products?sort=" + sort,
      });
      setproducts(data.products.slice(1));
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getProducts(props.sort);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>
          <span>{props.title}</span>
        </h1>
        <p className={styles.see_more}>see more --&gt;</p>
      </div>
      {products.length === 0 && loading ? (
        <p>loading ...</p>
      ) : products.length === 0 && !loading ? (
        <p>wow such empty</p>
      ) : (
        <div className={styles.cards}>
          {products.map((el) => (
            <div key={el._id}>
              <Product_cards {...el} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products_listing;
