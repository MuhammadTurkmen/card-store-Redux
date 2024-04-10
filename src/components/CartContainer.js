import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  return <div>CartContainer</div>;
};

export default CartContainer;
