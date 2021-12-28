const initState = {
  products: [],
};
const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
export default ProductsReducer;
