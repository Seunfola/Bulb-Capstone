//Add cart items
export const addCart = (product) =>{
    return {
      type: "ADD_ITEM",
      payload: product
    };
};
// Delete cart items
export const deleteCart = (product) => {
  return {
    type: "DELETE_ITEM",
    payload: product
  };
};

//Displaying the username

