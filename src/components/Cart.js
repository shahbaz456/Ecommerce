import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";

const Cart = () => {
  const { products } = useSelector((state) => state.CartReducer);

  return (
    <div className="cart">
      <div className="container">
        <h3>Your cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.image}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={product?.image} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name">{product.title}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart__price">{product?.price}$</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </div>
  );
};

export default Cart;
