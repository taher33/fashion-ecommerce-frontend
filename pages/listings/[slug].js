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
    console.log(error);
  }
  return {
    props,
    revalidate: 30,
  };
}

async function getProducts(params, page = 1) {
  try {
    const { data } = await axios_instance()({
      method: "GET",
      url: "products?type=" + params.slug + "&page=" + page,
    });

    return data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function listings(props) {
  const [page, setpage] = useState(1);
  const [products, setProducts] = useState(props.products);

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

      <InfiniteScroll
        dataLength={products.length}
        className={styles.cards}
        hasMore={true}
        next={async () => {
          const newProducts = await getProducts(props.params, page + 1);
          setProducts((prev) => [...prev, ...newProducts]);
          console.log(products);
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

export default listings;
