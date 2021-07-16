import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axios_instance } from "../lib/axios ";
import StripeCheckout from "react-stripe-checkout";

const stripe_key =
  "pk_test_51JBKYfDKgylqbfFcECfOKzv4XWQVLNL64rxbrZafqB58JnghPA4AR1Gew7CBjc0euW3WFqnpF8DkZklZLzcNoeAc00WfyyMu9z";

export default function CheckoutForm({ children }) {
  const buyProduct = async (token) => {
    console.log(token);
    try {
      await axios_instance(true)({
        method: "POST",
        url: "products/buy",
        data: { product_id: "60ede717cfc77d0015439410", amount: 2, token },
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <StripeCheckout
      stripeKey={stripe_key}
      token={buyProduct}
      name={`buy product`}
      amount={1000}
    >
      {children}
    </StripeCheckout>
  );
}
