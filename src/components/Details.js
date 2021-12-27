import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductsReducer);
  console.log("detailspro", product);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col-6">
          <div className="details__image">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="details__name">{product?.title}</div>

          <div className="details__p">
            <h4>Details</h4>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
