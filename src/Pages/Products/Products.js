import React from "react";
import heart from "./heart.svg";
import "./Products.css";
import { Link } from "react-router-dom";
import inventory from "../../data/inventory";

const Products = () => {
  return (
    <div className="container-products">
      {inventory.map((item, index) => {
        const { title, price, img, id } = item;
        return (
          <Link
            to={{
              pathname: `/produits/${title.replace(/\s+/g, "").trim()}`,
            }}
            key={id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${img}.png`}
                    alt="produit"
                  />
                  <div className="like-container">
                    <img src={heart} alt="icon like" />
                  </div>
                </div>
                <div className="info">
                  <p>{title}</p>
                  <p>Prix: {price}€</p>
                </div>
              </div>
              <div className="back-card"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
