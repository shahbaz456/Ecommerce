import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BsDash, BsPlus } from "react-icons/bs";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  const getDetails = async () => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
    });
    const searchresult = await response.json();
    console.log("Get Details ", searchresult);
    setProduct(searchresult);
  };
  useEffect(() => {
    getDetails();
  }, []);
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col-6">
          <div className="details__image">
            <img src={product?.image} alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="details__name">{product?.title}</div>
          <div className="details__p">
            <h4>price</h4>
            {product?.price} $
          </div>
          <div className="details__p">
            <h4>category</h4>
            {product?.category}
          </div>
          <div className="details__p">
            <h4>Details</h4>
            {product?.description}
          </div>
          <div className="details__info">
            <div className="details__incDec">
              <span className="dec" onClick={decQuantity}>
                <BsDash />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                <BsPlus />
              </span>
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
  );
};

export default Details;
