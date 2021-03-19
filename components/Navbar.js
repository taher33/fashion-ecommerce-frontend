import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../store/actions";

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
  }, []);
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
            <Link href="/listings?type=new">
              <li>
                <a href="#">New</a>
              </li>
            </Link>
            <Link href="/listings">
              <li>
                <a href="#">Men</a>
              </li>
            </Link>
            <Link href="listings">
              <li>
                <a href="#">Women</a>
              </li>
            </Link>
            <Link href="/listings">
              <li>
                <a href="#">Kids</a>
              </li>
            </Link>
          </ul>
        </nav>
        <div className={styles.menu}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 384.97 384.97"
            // style="enable-background: new 0 0 384.97 384.97"
            // xml:space="preserve"
          >
            <g>
              <g id="Menu_1_">
                <path
                  d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                   c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"
                />
                <path
                  d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                   S379.58,180.455,372.939,180.455z"
                />
                <path
                  d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                   c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {state.logedIn ? (
        <div>
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
    </div>
  );
}

export default Navbar;
