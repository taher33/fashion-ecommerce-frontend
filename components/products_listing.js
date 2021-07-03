import React, { useState } from "react";
import { useEffect } from "react";
import { axios_instance } from "../lib/axios ";
import Product_cards from "./Product_cards";

import styles from "../styles/products.module.scss";

async function getProducts(sort) {
  try {
    const { data } = await axios_instance()({
      method: "GET",
      url: "products?sort=" + sort,
    });

    return data.products.slice(1);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function Products_listing(props) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts(props.sort).then((res) => setproducts(res));
  }, []);

  if (products.length === 0) return <h3>loading ...</h3>;
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>
          <span>{props.title}</span>
        </h1>
        <p className={styles.see_more}>see more --&gt;</p>
      </div>
      <div className={styles.cards}>
        {products.map((el) => (
          <div key={el._id}>
            <Product_cards {...el} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products_listing;
