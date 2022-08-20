import React from "react";
import HeaderNavbar from "./ecommerce_product_page/header/HeaderNavbar";
import ProductContent from "./ecommerce_product_page/productContent/ProductContent";
import ProductImage from "./ecommerce_product_page/productImage/ProductImage";
import "./App.css";
import ImageModal from "./ecommerce_product_page/ImageModal/ImageModal";
import OpenCart from "./ecommerce_product_page/header/OpenCart";

function App() {
  const [expandImg, setExpandImg] = React.useState(false);
  const [opencart, setOpencart] = React.useState(false);

  const [count, setCount] = React.useState(1); //item quantity
  const [price, setPrice] = React.useState(1000); // item price
  const [data, setData] = React.useState({});
  const AddToCart = () => {
    // confirm("Add cart Successfully");
    console.log({
      product: "Sneaker",
      quantity: count,
      totalPrice: price,
    });
    setData({
      product: "Sneaker",
      quantity: count,
      totalPrice: price,
    });
  };
  const getBigImage = (value) => {
    console.log("show large image ");
    setExpandImg(value);
  };
  function trnasparentHandler() {
    setOpencart(false);
  }
  return (
    <>
      <div>
        <HeaderNavbar setOpencart={setOpencart} />
        <div className="image-content-flex">
          <ProductImage getBigImage={getBigImage} />
          <ProductContent
            AddToCart={AddToCart}
            count={count}
            price={price}
            setPrice={setPrice}
            setCount={setCount}
          />
        </div>
        {expandImg && <ImageModal getBigImage={getBigImage} />}
      </div>
      <div className="cart-open">
        {opencart && (
          <div className="d-flex">
            <div
              className={"fix-transparent"}
              onClick={trnasparentHandler}
            ></div>
            <OpenCart data={data} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
