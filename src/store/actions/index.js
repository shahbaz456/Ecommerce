import { getAllProducts } from "../../Services";

export const getData = async (dispatch) => {
  const data = await getAllProducts();

  try {
    dispatch({
      type: "PRODUCTS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: "ALERT", payload: { type: "error", msg: "failed" } });
  }

  return data;
};
