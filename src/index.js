import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./ecommerce_product_page/ReduxStore/Store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
