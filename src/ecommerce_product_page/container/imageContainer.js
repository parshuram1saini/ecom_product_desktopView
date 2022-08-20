import { connect } from "react-redux";
import ProductContent from "../productContent/ProductContent";
import HeaderNavbar from "../header/HeaderNavbar";
import { addToCart } from "../Action/Action";

const mapStateToProps = (state) => {
  return {
    items: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (data) => {
      dispatch(addToCart(data));
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductContent,HeaderNavbar);
