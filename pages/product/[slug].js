import React from "react";

import styles from "../../styles/single-product.module.scss";

function product() {
  return (
    <div className={styles.container}>
      <img src="/alex-hddife-6wWiZlA2n0Q-unsplash-removebg-preview.png" />
      <div>
        <h2>product name</h2>
        <p>
          Velit est ex adipisicing fugiat esse ea pariatur magna. Deserunt
          laboris et anim fugiat minim incididunt
        </p>
      </div>
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
