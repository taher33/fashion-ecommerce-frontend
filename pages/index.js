import Head from "next/head";
import Product_cards from "../components/Product_cards";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero_section}>
        <div className={styles.hero_text}>
          <h1>Building a Better You</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            egestas faucibus.
          </p>
          <button className={styles.cta_btn}>Start Shopping</button>
        </div>
        <img src="hero-img.png" alt="hero-img" className={styles.hero_img} />
      </section>
    </div>
  );
}
