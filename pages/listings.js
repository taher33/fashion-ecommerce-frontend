import React, { useState } from "react";
import { useRouter } from "next/router";
import { initializeStore } from "../store/init_store";
import { login } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../components/Dropdown";
import Product_cards from "../components/Product_cards";
import styles from "../styles/listings.module.scss";
import SortIcon from "@material-ui/icons/Sort";

export const getServerSideProps = ({ req, query }) => {
  // const dispatch = useDispatch();
  const reduxStore = initializeStore();
  const { dispatch, getState } = reduxStore;
  const state = getState();
  console.log(state, "hey");
  dispatch(login());
  return { props: { initialReduxState: reduxStore.getState() } };
};

function listings() {
  const state = useSelector((state) => state);
  console.log(state);
  const router = useRouter();
  // console.log(router.query, "hey");
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
        {[0, 1, 2, 3, 4, 4, 5, 5, 55, 4, 5, 354, 2].map((el, index) => (
          <div key={index}>
            <Product_cards />
          </div>
        ))}
      </div>
    </div>
  );
}

export default listings;
