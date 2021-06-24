import React, { useState } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "../../styles/single-product.module.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function product() {
  const [open, setopen] = useState(false);

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

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "t-shert" } }, { params: { slug: "pants" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  return { props: {}, revalidate: 3600 };
}

export default product;
