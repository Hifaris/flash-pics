import React from 'react';
import cartStore from '../store/cart-store';
import CartBox from './cartBox';

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
          <button onClick={handleClearCart} className="bg-white border border-sky-600 text-sky-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;