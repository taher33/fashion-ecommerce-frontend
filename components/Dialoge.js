import React, { useEffect, useState } from "react";

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
import { axios_instance } from "../lib/axios ";

function Dialoge(props) {
  const { onClose, selectedValue, open } = props;
  const [Enteries, setEnteries] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios_instance(true)({
        method: "DELETE",
        url: "/cart/" + id,
      });
      const newEnter = Enteries.filter((el) => el._id !== id);
      setEnteries(newEnter);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  useEffect(() => {
    getCartData().then((res) => setEnteries(res));
  }, [open]);
  console.log(Enteries);

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
        {Enteries.length === 0 ? (
          <h3>loading</h3>
        ) : (
          Enteries.map(({ amount, product, _id }, i, { length }) => (
            <>
              <div className={styles.item} key={_id}>
                <img
                  className={styles.img}
                  src={
                    "https://fashion-app-taher.herokuapp.com/" + product.image
                  }
                />
                <div className={styles.count}>1 x</div>
                <div className={styles.text}>
                  <h3>{product.title} </h3>
                  <p>{product.price}$</p>
                </div>
                <div className={styles.iconButton}>
                  <IconButton
                    edge={"end"}
                    color={"secondary"}
                    onClick={() => handleDelete(_id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
              {i !== length - 1 ? <Divider /> : null}
            </>
          ))
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

async function getCartData() {
  try {
    const { data } = await axios_instance(true)({
      method: "GET",
      url: "/cart",
    });

    return data.cart;
  } catch (err) {
    console.log(err.response.data);
    return [];
  }
}

export default Dialoge;
