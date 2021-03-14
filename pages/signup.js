import React, { useState } from "react";
import styles from "../styles/signup.module.scss";

function login() {
  const [active, setActive] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(false);
    setTimeout(() => {
      setActive(true);
    }, 2000);
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1> Create your acount today</h1>
          <p>
            Get access to the latest fashion trends <br /> with a click of a
            button
          </p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <label htmlFor="confirmPass">Confirm your password</label>
            <input type="password" name="confirmPass" />
            <button
              type="submit"
              className={styles.btn}
              disabled={!active}
              onClick={handleSubmit}
            >
              {active ? (
                "Sign Up"
              ) : (
                <div className={styles.lds_ripple}>
                  <div></div>
                  <div></div>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
