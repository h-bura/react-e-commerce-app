import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const existingUserData = JSON.parse(localStorage.getItem("user")) || {};
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const updatedUserData = {
    ...existingUserData,

    cartData: state,
  };

  localStorage.setItem("user", JSON.stringify(updatedUserData));
  const handleDelete = (item) => {
    dispatch(delCart(item));
  };
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} X ${cartItem.price}= $
                {cartItem.qty * cartItem.price}
              </p>
              <button onClick={() => handleDelete(cartItem)}>
                <i className="fa fa-minus " />
              </button>

              <button onClick={() => handleAdd(cartItem)} className="ms-2">
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Go to pay
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
