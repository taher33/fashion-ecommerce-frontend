import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { axios_instance } from "../lib/axios ";
import InfiniteScroll from "react-infinite-scroll-component";

import Dropdown from "../components/Dropdown";
import Product_cards from "../components/Product_cards";
import SortIcon from "@material-ui/icons/Sort";

import styles from "../styles/listings.module.scss";

async function getProducts(query, page = 1) {
  try {
    const { data } = await axios_instance()({
      method: "GET",
      url: "products?type=" + query.type + "&page=" + page,
    });

    return data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function listings({ pageName, products }) {
  const [page, setpage] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {pageName === "new" ? (
          <h3>New in our shop</h3>
        ) : (
          <h3>{`${pageName}'s wear`} </h3>
        )}
        <div>
          {/* <p>
            <Dropdown icon={<SortIcon />} name={"Sort"} />
          </p> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={products.length}
        className={styles.cards}
        hasMore={true}
        next={async () => {
          const newProducts = await getProducts(pageName, page + 1);
          products.push(...newProducts);
          if (newProducts.length !== 0) {
            setpage((prev) => prev + 1);
          }
        }}
      >
        {products.map((el) => (
          <div key={el._id}>
            <Product_cards {...el} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let props = {};
  props.pageName = ctx.query.type;
  try {
    const products = await getProducts(ctx.query);
    props.products = products;
  } catch (error) {
    console.log(error);
    props.products = [];
  }
  return {
    props,
  };
}

export default listings;
