import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
  const { products, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();

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
                    <div className="col-2">Quantity</div>

                    <div className="col-2">Remove</div>
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
                    <div className="col-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product?.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product?.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product?.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">Summary</div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalQuantities}</div>
                    </div>

                    <Link to="/signin">
                      <button type="button" className="checkout">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
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
