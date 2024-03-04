"use client";

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../CartSlice';
import apiClient from "../../../utils";

function page() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    apiClient('http://local.api.in');
    dispatch(addToCart("second"))
  }

  return (
    <div>
      {cart.map((i, val) => 
        <li key={val}>{i}</li>
      )}

      <button onClick={addToCartHandler}>
        Click me
      </button>
    </div>
  )
}

export default page