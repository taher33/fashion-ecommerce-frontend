import React, { useEffect, useState } from "react";
import CheckoutForm from "../../components/checkoutform";
import { axios_instance } from "../../lib/axios ";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "../../styles/single-product.module.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

async function addToCart(id, setErrMsg, setSuccess) {
  try {
    const { data } = await axios_instance(true)({
      method: "POST",
      url: "/cart",
      data: { product: id },
    });
  } catch (err) {
    setErrMsg(err.response.data.message);
    setSuccess(false);
  }
}

function product({ image, price, details, title, _id }) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("something went wrong");

  const handleClick = async () => {
    await addToCart(_id, setErrMsg, setSuccess);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <img src={"https://fashion-app-taher.herokuapp.com/" + image} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{price}.00$</h3>
        <p>{details}</p>
        <CheckoutForm price={price}>
          <button>buy</button>
        </CheckoutForm>
        <button className={styles.secondary} onClick={handleClick}>
          Add to Cart
        </button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={success ? "success" : "error"}>
          {success ? "added to cart" : errMsg}
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

  return { props, revalidate: 3 };
}

export default product;
