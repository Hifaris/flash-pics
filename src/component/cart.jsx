import React, { useEffect, useState } from 'react';
import cartStore from '../store/cart-store';
import CartBox from './cartBox';
import { addCart, deleteCart, getUserCart, saveOrder } from '../api/cart';
import useAuthStore from '../store/auth-store';
import { Link } from 'react-router-dom';
import { IdCardIcon } from '@radix-ui/react-icons';
import { IdCard } from 'lucide-react';
import { toast } from 'react-toastify';

const Cart = () => {
  const { carts, removeFromCart, clearCart,totalPrice} = cartStore();
  const token = useAuthStore((state)=> state.token)
  const [order,setOrder]=useState(null)

  useEffect(() => {
   getCart(token)
  }, [])

  const getCart =async(token)=>{
    try {
      
      const resp = await getUserCart(token)
      setOrder(resp.data)
      console.log(resp.data)
    } catch (err) {
      console.log(err)
    }
  }


 
  const handleRemove = async(id) => {

      try {
        const resp = await deleteCart(token,id)
        console.log(resp)
        removeFromCart(id)
        getCart(token)
      } catch (err) {
        console.log(err)
      }
      // removeFromCart(id);
  
  };


  const handleClearCart = () => {

      clearCart();
  }

  const hdlCheckout =async()=>{
    const resp = await saveOrder(token)
    console.log(resp)
    toast.success("Check out")

    clearCart()
  

    // getCart(token)
  }
//  console.log(token)

  

  return (
    <div className="w-3/4 mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-sky-700 mb-6 text-center">Shopping Cart</h1>
    
    {order && (
      <div>
        {/* Check if CartDetail is empty */}
        {order.CartDetail.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div>
            {order.CartDetail.map((item, index) => (
              <CartBox key={index} item={item} handleRemove={handleRemove} />
            ))}
            
            <div className='flex justify-between items-center mt-6'>
              <p className='text-xl font-semibold text-sky-600'>Total: {order.cartTotal} THB</p>
              
              <div className="flex space-x-4">
                <Link to={"/user/order"}>
                  <button 
                    className="bg-orange-500 text-white rounded-lg px-6 py-2 hover:bg-orange-500 transition" 
                    onClick={hdlCheckout}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default Cart;