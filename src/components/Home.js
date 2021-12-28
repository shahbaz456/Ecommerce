import React, { useEffect, useState } from "react";
import Header from "./Header";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services";

const Home = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.ProductsReducer.products);
  console.log("data", products);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getAllProducts();
      console.log("resp::", response);
      dispatch({ type: "PRODUCT", payload: response });
    }
    fetchMyAPI();
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          {products &&
            products.map((product) => (
              <div className="col-3" key={product?.id}>
                <div className="product">
                  <div className="product__img">
                    <Link to={`/details/${product?.id}`}>
                      <img src={product?.image} alt="image name" />
                    </Link>
                  </div>

                  <div className="product__name">
                    Category : {product.category}
                  </div>
                  <div className="product__name">{product.title}</div>

                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                      <div className="product__discount__price">
                        {product.price} $
                      </div>

                      <div className="details__info">
                        <div className="details__incDec">
                          <button
                            className="btn-default"
                            onClick={() =>
                              dispatch({
                                type: "ADD_TO_CART",
                                payload: { product, quantity },
                              })
                            }
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
