import React from "react";
import "./header.css";
function OpenCart({ data }) {
  return (
    <>
      <div className="open-cart">
        <h2>CART:</h2>
        <div className="ui divider"></div>
        <span>product:{data.product}</span>
        <span>Quantity:{data.quantity}</span>
        <span>price:{data.totalPrice}</span>
        {/* <h3>You Cart is Empty</h3> */}
        <div className="ui divider"></div>
      </div>
    </>
  );
}
export default OpenCart;
