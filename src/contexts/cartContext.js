import { createContext, useContext, useReducer } from "react";
import React, { useEffect}  from 'react';

import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();


const initialState = {
    cart: [],
    total_quantity: "",
    total_price: "",
    shipping_fee: 100,
  };
  
  const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    const addToCart = (product, quantity) => {
      dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    
    };
  
    const removeFromCart = (product) => {
      dispatch({ type: "REMOVE_FROM_CART", payload:{product}});
    };

    
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" })}, [state.cart]);
  
    return (
      <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    )
  }
  
  const UseCartContext = () => {
    return useContext(CartContext)
  }
  
  export { CartProvider, UseCartContext }
  