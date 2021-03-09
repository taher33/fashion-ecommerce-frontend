import React from "react";
import styles from "../styles/login.module.scss";

function login() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access your acount</p>
          <form>
            <span>Email</span>
            <input type="text" />
            <span>Password</span>
            <input type="password" />
            <button type="submit" className={styles.btn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
