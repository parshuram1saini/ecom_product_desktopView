const initialState = {
  // products: [
  //   { id: 1, title: "Sneaker", price: 1000 },
  //   { id: 2, title: "Adidas", price: 1200 },
  // ],
  additem: []
  // totalItems: 0,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return[
          ...state,
          {}
      ];
    case "REMOVE_Cart":
      return {};
    default:
      return state;
  }
};
export default productReducer;
