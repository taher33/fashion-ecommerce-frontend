import React, { useEffect, useState } from "react";

import { axios_instance } from "../lib/axios ";

import { IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DeleteIcon from "@material-ui/icons/Delete";
import { Divider } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import styles from "../styles/cart-dialog.module.scss";

function Dialoge(props) {
  const { onClose, selectedValue, open } = props;
  const [Enteries, setEnteries] = useState([]);
  const [loading, setLoading] = useState(true);
  //calculating the total price of cart enteries
  const total = Enteries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.product.price;
  }, 0);
  //deletes a cart enterie
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
    getCartData().then((res) => {
      setEnteries(res);
      setLoading(false);
    });
  }, [open]);

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
        {Enteries.length === 0 && !loading ? (
          <h3>so empty</h3>
        ) : (
          Enteries.map(({ amount, product, _id }, i, { length }) => (
            <div className={styles.item} key={_id}>
              <img
                className={styles.img}
                src={"https://fashion-app-taher.herokuapp.com/" + product.image}
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
              {i !== length - 1 ? <Divider /> : null}
            </div>
          ))
        )}
        <div className={styles.total}>
          <h3>Total</h3>
          <h2>${total}.00</h2>
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
