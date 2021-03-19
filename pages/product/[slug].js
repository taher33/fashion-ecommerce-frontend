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
          laboris et anim fugiat minim incididunt consectetur irure id dolor
          exercitation. Et minim aliqua ad nulla consequat velit et cupidatat
          reprehenderit. Lorem ullamco voluptate dolor magna voluptate non
          ullamco excepteur amet do reprehenderit duis Lorem fugiat. Nulla
          laborum pariatur consectetur commodo ex sit duis duis. Deserunt elit
          laboris ut ullamco tempor laborum cillum non qui id sunt fugiat
          pariatur. Nisi ut cillum est laborum veniam tempor quis et aliquip ut
          eu officia eiusmod quis.
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
