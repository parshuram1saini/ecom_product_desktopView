import React from "react";
import "./header.css";
import avatar from "../../image/avatar.png";
import logo from "../../image/logo.svg";
import cart_icon from "../../image/icon-cart.svg";


function HeaderNavbar({setOpencart,data}) {
 console.log(data)
  const openCart = (value) => {
    setOpencart(value)
    // console.log("not rendered");
  };
  return (
    <div>
      <div id="navbar" className="ui pointing menu ">
        <img src={logo} className="item-logo" alt="sneaker" />
        <span className="item active">Collections</span>
        <span className="item">Men</span>
        <span className="item">Women</span>
        <span className="item">About</span>
        <span className="item">Contact</span>
        <div className="right menu cart p-relative">
          <img
            src={cart_icon}
            alt="carticon"
            id="cart-icon"
            onClick={() => openCart(true)}
          />
          <p className="cartItem-counter p-absolute">1</p>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </div>
  );
}
export default HeaderNavbar;
