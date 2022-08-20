/* eslint-disable no-restricted-globals */
import React from "react";
import {useDispatch} from "react-redux";
import "./productContent.css";
import minus from "../../image/icon-minus.svg";
import plus from "../../image/icon-plus.svg";

function ProductContent({count,price,setPrice,setCount,AddToCart}) {
  const dispatch = useDispatch();
 
  const handleDecrement = () => {
    console.log("decrement");
    // console.log(count, "dec");
    if (count > 1) {
      setPrice((prevPrice)=>prevPrice-1000)
      setCount((precount) => precount - 1);
    }
  };
  const handleIncrement = () => {
    setPrice((prevPrice)=> prevPrice+1000)
    setCount((prevcount) => prevcount + 1);
  };
  
  return (
    <div className="product-content">
      <h3 className="sneaker-company">sneaker company</h3>
      <div className="ui divider"></div>
      <h2> Fall Limited Edition Sneakers</h2>
      <div className="ui divider"></div>
      <p className="product-text">
        These low-price sneakers are you perfect casual wear company. Featuring
        a durable rubber outer sole, they will withstand everything the weather
        can offer. If you have a small shoe retail store, you must draw
        inspiration from great brands and then come up with your own footwear
        marketing strategies. At the same time, these 25 marketing ideas may
        help you reach your target market group and succeed as a small shoe
        retail store owner.
      </p>
      <div className="ui divider"></div>
      <h3>
        price:{price}/- <span className="discount"> Discount:50%</span>
      </h3>
      <div className="ui divider"></div>
      <div className="Add-icons">
        <div>
          <img
            src={minus}
            onClick={() => handleDecrement()}
            alt="icon-minus"
            className="icon-minus"
          />
        </div>
        <span className="show-field">{count}</span>
        <div>
          <img
            src={plus}
            alt="icon-plus"
            className="icon-plus"
            onClick={() => handleIncrement()}
          />
        </div>
        <div
          className="ui inverted orange button addCart"
          onClick={() => AddToCart()}
        >
          <i className="shop icon"></i> Add to Cart
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
