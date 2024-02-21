"use client";

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../CartSlice';

function page() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart("second"))
  }

  return (
    <div>
      {cart.map((val) => 
        <li>{val}</li>
      )}

      <button onClick={addToCartHandler}>
        Click me
      </button>
    </div>
  )
}

export default page