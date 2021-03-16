import React, { useState } from "react";
import { axios_instance } from "../lib/axios ";
import styles from "../styles/login.module.scss";

function login() {
  const [active, setActive] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setActive(false);
    try {
      const res = await axios_instance(true)({
        method: "POST",
        url: "/users/login",
        data: { email: "taher@gmail.com", password: "test1234" },
      });
      console.log(res.data);
      setActive(true);
    } catch (err) {
      setActive(true);
      console.log(err);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access your acount</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <button
              type="submit"
              className={styles.btn}
              disabled={!active}
              onClick={handleSubmit}
            >
              {active ? (
                "Sign In"
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
