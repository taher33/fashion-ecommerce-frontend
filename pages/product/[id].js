import React, { useEffect, useState } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "../../styles/single-product.module.scss";
import { axios_instance } from "../../lib/axios ";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function product(props) {
  console.log(props);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <img src="/alex-hddife-6wWiZlA2n0Q-unsplash-removebg-preview.png" />
      <div className={styles.content}>
        <h2>product name</h2>
        <h3>100$</h3>
        <p>
          Velit est ex adipisicing fugiat esse ea pariatur magna. Deserunt
          laboris et anim fugiat minim incididunt
        </p>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

async function getProducts() {
  try {
    const { data } = await axios_instance()({
      method: "GET",
      url: "products",
    });

    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getOneProduct(id) {
  try {
    const { data } = await axios_instance(true)({
      method: "GET",
      url: "products/single/" + id,
    });

    console.log("product:", data.product);
    return data.product;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((el) => {
    return {
      params: { id: el._id },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let props = {};
  try {
    props = await getOneProduct(params.id);
  } catch (error) {
    console.log(error.err.statusCode);
  }
  console.log("props:", props);
  return { props, revalidate: 3 };
}

export default product;
