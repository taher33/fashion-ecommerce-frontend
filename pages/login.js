import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axios_instance } from "../lib/axios ";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/login.module.scss";
import { loginA } from "../store/actions";

function login() {
  const [active, setActive] = useState(true);
  const [apiErrors, setapiErrors] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setActive(false);

    const error = (await dispatch(loginA(data))) || {};
    setapiErrors(error);
    console.log(apiErrors);
    setActive(true);
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access your acount</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>{apiErrors !== {} && apiErrors}</span>
            <label htmlFor="email">Email</label>
            <input
              className={errors.email && styles.error}
              type="text"
              name="email"
              ref={register({
                required: "must specify an email",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "please use a valid email",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <label htmlFor="password">Password</label>
            <input
              className={errors.password && styles.error}
              type="password"
              name="password"
              ref={register({
                required: "must specify a password",
                minLength: {
                  value: 8,
                  message: "please use more then 8 charachters",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit" className={styles.btn} disabled={!active}>
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
