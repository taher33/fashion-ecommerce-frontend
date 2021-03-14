import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Product_cards from "../components/Product_cards";
import styles from "../styles/listings.module.scss";
import SortIcon from "@material-ui/icons/Sort";
import FilterListIcon from "@material-ui/icons/FilterList";

function listings() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Men's Wear (113)</h3>
        <div>
          <p>
            <Dropdown icon={<SortIcon />} name={"Sort"} />
          </p>
          <p>
            <Dropdown icon={<FilterListIcon />} name={"Filter"} />
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
