import React from "react";

import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import { Divider } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import styles from "../styles/cart-dialog.module.scss";

function Dialoge(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <h2 className={styles.header}>My Cart</h2>
      <div className={styles.itemsContainer}>
        {["emails", "hey theere", "h", "h", "h", "h"].map(
          (email, i, { length }) => (
            <>
              <div className={styles.item} key={i}>
                <img
                  className={styles.img}
                  src={
                    "./hust-wilson-WyDr1KFS23Y-unsplash-removebg-preview.png"
                  }
                />
                <div className={styles.count}>1 x</div>
                <div className={styles.text}>
                  <h3>product name its soo good </h3>
                  <p>200$</p>
                </div>
                <div className={styles.iconButton}>
                  <IconButton edge={"end"} color={"secondary"}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
              {i !== length - 1 ? <Divider /> : null}
            </>
          )
        )}
        <div className={styles.total}>
          <h3>Total</h3>
          <h2>$1223.00</h2>
        </div>
        <div className={styles.button}>
          Continue to checkout
          <ArrowForwardIcon />
        </div>
      </div>
    </Dialog>
  );
}

export default Dialoge;
