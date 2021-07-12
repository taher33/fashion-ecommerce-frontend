import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { axios_instance } from "../../lib/axios ";
import InfiniteScroll from "react-infinite-scroll-component";

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
  let props = { params: context.params };
  try {
    const products = await getProducts(context.params);
    props = { ...props, products };
  } catch (error) {
    console.log("err", error);
    props.products = [];
  }

  return {
    props,
    revalidate: 30,
  };
}

async function getProducts(params, page = 1) {
  try {
    let response;
    if (params.slug === "new") {
      response = await axios_instance()({
        method: "GET",
        url: "products?" + "page=" + page,
      });
    } else {
      response = await axios_instance()({
        method: "GET",
        url: "products?type=" + params.slug + "&page=" + page,
      });
    }
    return response.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function listings(props) {
  const [page, setpage] = useState(1);
  const [products, setProducts] = useState(props.products);
  const [haseMore, setHaseMore] = useState(true);
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {props.params.slug === "new" ? (
          <h3>Most recent in the store</h3>
        ) : (
          <h3>{`${props.params.slug}'s Wear`}</h3>
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
        hasMore={haseMore}
        next={async () => {
          const newProducts = await getProducts(props.params, page + 1);
          setProducts((prev) => [...prev, ...newProducts]);
          if (newProducts.length !== 0) {
            setpage((prev) => prev + 1);
          } else {
            setHaseMore(false);
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

export default listings;
