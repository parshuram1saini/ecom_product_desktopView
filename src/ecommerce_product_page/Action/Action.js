export const addToCart = (itemid) => {
    console.log(itemid)
  return {
    type: "Add_To_Cart",
    payload: {
        id:itemid
    }
  };
};
export const removeCart = (itemid) => {
  return {
    type: "REMOVE_Cart",
    payload: {
        id:itemid
    }
  };
};
