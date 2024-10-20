import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneOrder } from '../api/cart';
import useAuthStore from '../store/auth-store';
import PaymentCredit from './PaymentCredit';


function Payment() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const token = useAuthStore((state) => state.token);
    const user = useAuthStore((state) => state.user)
    
    useEffect(() => {
      getUserOrder();
    }, []);

    const getUserOrder = async () => {
        const resp = await getOneOrder(token, id);
        setOrder(resp.data.order);

      };

    //   const photoOrdersLength = order.photoOrders.length

    //   console.log(order.id)
  return (

    <div className="flex h-screen">
    {/* Left Side - Payment Section */}
    <div className="w-1/2 p-8 bg-gray-100">
    {order&& <PaymentCredit amount={Math.round(order?.total*100)}/>}
     
    </div>
  
    {/* Right Side - Order Details Section */}
    {order && (
        <div className="w-1/2 p-8 bg-white border-l border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-sky-600">Order Summary</h2>
          <div className="mb-4 flex flex-col gap-5">
            <p className="font-medium">Order ID: {order.id}</p>
            <p className="font-medium">User ID: {user.id}</p>
            <p className="font-medium">Email: {user.email}</p>
            <p className="font-medium">Photos Total: {order.photoOrders.length}</p>
          </div>
          <div className="mt-10">
            <p className="font-medium text-xl text-sky-600">Total: {order.total} THB</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment