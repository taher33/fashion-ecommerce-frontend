import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../store/actions";
import PhoneMenu from "./phone-menu";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state.logedIn) {
      dispatch(checkAuth());
    }
  }, [state.logedIn]);
  return (
    <div className={styles.nav_container}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <p>
              Arachi <br />
              Brands
            </p>
          </a>
        </Link>
        <nav>
          <ul>
            <Link href="/listings/new">
              <li>
                <a href="#">New</a>
              </li>
            </Link>
            <Link href="/listings/men">
              <li>
                <a href="#">Men</a>
              </li>
            </Link>
            <Link href="/listings/women">
              <li>
                <a href="#">Women</a>
              </li>
            </Link>
            <Link href="/listings/kids">
              <li>
                <a href="#">Kids</a>
              </li>
            </Link>
          </ul>
        </nav>
        {state.logedIn ? (
          <div className={styles.logs}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </div>
        ) : (
          <div className={styles.logs}>
            <Link href="/login">
              <a className={styles.login_btn}>Login</a>
            </Link>
            <Link href="/signup">
              <a className={styles.signup_btn}>Signup</a>
            </Link>
          </div>
        )}
        <div className={styles.menu}>
          <PhoneMenu userIsLogedIn={state.logedIn} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
