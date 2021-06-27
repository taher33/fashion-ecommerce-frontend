import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { axios_instance } from "../../lib/axios ";

import Dropdown from "../../components/Dropdown";
import Product_cards from "../../components/Product_cards";
import SortIcon from "@material-ui/icons/Sort";

import styles from "../../styles/listings.module.scss";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "new" } },
      { params: { slug: "men" } },
      { params: { slug: "women" } },
      { params: { slug: "kids" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 30,
  };
}

async function getProducts() {
  const { data } = await axios_instance()({
    method: "GET",
    url: "products",
  });

  return data.products;
}

function listings(props) {
  const { products } = props;

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Men's Wear (113)</h3>
        <div>
          {/* <p>
            <Dropdown icon={<SortIcon />} name={"Sort"} />
          </p> */}
        </div>
      </div>

      <div className={styles.cards}>
        {products.map((el) => (
          <div key={el._id}>
            <Product_cards {...el} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default listings;