import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../store/actions";
import PhoneMenu from "./phone-menu";
import Dialoge from "./Dialoge";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const state = useSelector((state) => state);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Link href="/listings?type=new">
              <a>New</a>
            </Link>
            <Link href="/listings?type=men">
              <a>Men</a>
            </Link>
            <Link href="/listings?type=women">
              <a>Women</a>
            </Link>
            <Link href="/listings?type=kids">
              <a>Kids</a>
            </Link>
          </ul>
        </nav>
        {state.logedIn ? (
          <div className={styles.logs}>
            <IconButton onClick={handleClickOpen}>
              <ShoppingCartIcon />
            </IconButton>
            <Dialoge
              // selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
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
