export const getAllCategories = async (body) => {
  try {
    const result = await fetch("https://fakestoreapi.com/products/categories", {
      method: "GET",
    });
    const response = await result.json();
    console.log("show data", response);

    return response;
  } catch (error) {
    console.warn(error);
  }
};

export const getAllProducts = async () => {
  try {
    const result = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const response = await result.json();
    console.log("show data", response);

    return response;
  } catch (error) {
    console.warn(error);
  }
};

// export const getSingleProduct = async (id) => {
//   try {
//     const result = await fetch(`https://fakestoreapi.com/products${id}`, {
//       method: "GET",
//     });
//     const response = await result.json();
//     console.log("show data", response);

//     return response;
//   } catch (error) {
//     console.warn(error);
//   }
// };

export const sortProduct = async (body) => {
  try {
    const result = await fetch("https://fakestoreapi.com/products?sort=desc", {
      method: "GET",
    });
    const response = await result.json();
    console.log("show data", response);

    return response;
  } catch (error) {
    console.warn(error);
  }
};
