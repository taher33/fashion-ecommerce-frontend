import React from "react";
import styles from "../styles/footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_text}>
          <div className={styles.about}>
            <div className={styles.flex}>
              <h2>About Us</h2>
              <h2 className={styles.icon}>+</h2>
            </div>
            <p>Our Story</p>
            <p>FAQ</p>
          </div>
          <div className={styles.Legal}>
            <div className={styles.flex}>
              <h2>Legal</h2>
              <h2 className={styles.icon}>+</h2>
            </div>
            <p>Privacy Policy</p>
            <p>Terms Conditions</p>
          </div>
        </div>
        <div className={styles.icons}>
          <img src="instagram1.svg" alt="" />
          <img src="twitter.svg" alt="" />
          <img src="facebook.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
