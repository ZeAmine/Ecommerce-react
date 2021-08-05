import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import inventory from "../../data/inventory";

const ShoppingCart = () => {
  const storeState = useSelector((state) => state);

  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier:</p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
