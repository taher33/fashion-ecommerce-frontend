import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../components/Dropdown";
import Product_cards from "../components/Product_cards";
import SortIcon from "@material-ui/icons/Sort";
import { checkAuth, getProducts } from "../store/actions";

import styles from "../styles/listings.module.scss";

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {},
  };
}

function listings() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products = [] } = state;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Men's Wear (113)</h3>
        <div>
          <p>
            <Dropdown icon={<SortIcon />} name={"Sort"} />
          </p>
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
