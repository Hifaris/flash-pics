import React from 'react';
import cartStore from '../store/cart-store';
import CartBox from './cartBox';
import { addCart } from '../api/cart';
import useAuthStore from '../store/auth-store';

const Cart = () => {
  const { cart, removeFromCart, clearCart} = cartStore();


 
  const handleRemove = (id) => {
      removeFromCart(id);
  
  };


  const handleClearCart = () => {

      clearCart();
  }

  

  return (
    <div className="w-2/4 mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-sky-600 mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
           <CartBox item={item} index={index} handleRemove={handleRemove}/>
          ))}
          <div className='flex justify-around'>
            
          <button className="bg-white border border-orange-500 text-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition"> Checkout </button>
          <div>
          <p className='text-lg font-semibold justify-center items-center  text-sky-600 mt-2 '>
            Total:</p>

          </div>
          <button onClick={handleClearCart} className="bg-white border border-sky-600 text-sky-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded">
            Clear Cart
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;