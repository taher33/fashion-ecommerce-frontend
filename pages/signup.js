import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signup } from "../store/actions";

import styles from "../styles/signup.module.scss";

function login() {
  const [active, setActive] = useState(true);
  const [apiErrors, setapiErrors] = useState({ msg: "" });
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(errors);

  const onSubmit = async (data) => {
    setActive(false);

    try {
      await dispatch(signup(data));
      setActive(true);
      router.push("/");
    } catch (err) {
      setActive(true);
      setapiErrors({ msg: err.response.data.msg });
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>{apiErrors.msg}</span>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref={register({
                required: "must specify a name",
                minLength: {
                  value: 4,
                  message: "please use more then 4 charachters",
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <label htmlFor="email">Email</label>
            <input
              // type="email"
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
              type="password"
              name="password"
              ref={register({
                required: "must specify a password",
                minLength: {
                  value: 4,
                  message: "please use more then 4 charachters",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <label htmlFor="confirmPass">Confirm your password</label>
            <input
              type="password"
              name="passwordConf"
              ref={register({
                required: "confirm your password",
              })}
            />
            {errors.passwordConf && <span>{errors.passwordConf.message}</span>}

            <button type="submit" className={styles.btn} disabled={!active}>
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
