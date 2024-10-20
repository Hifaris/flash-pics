import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/auth-store'
import { ShoppingCart, ImageDown, UserRound } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useNavigate, useParams } from 'react-router-dom';
import { getOneOrder, getOrder } from '../api/cart';

function FinishOrder() {
    const user = useAuthStore((state) => state.user);
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    const hdlCart = () => {
        navigate("/user/user/cart")
    };

    const hdlOrder = () => {
        navigate("/user/order")
    };

    const hdlProfile = () => {
        navigate("/user/profile")
    };

    const getUserOrder = async () => {
        const resp = await getOneOrder(token, id);
        // console.log(resp.data.order)
        setOrder(resp.data.order);
        // setTotal(resp.data.order[0].total)
    };

    useEffect(() => {
        getUserOrder();
    }, []);


    const getPayment = (id) => {
        navigate(`/user/payment/${id}`)
    }

    console.log(order)

    const name = user.email.split("@")[0];

    return (
        <div className='flex w-screen'>

            <nav className="w-[300px] h-screen bg-slate-400 text-white flex flex-col items-center gap-9 p-4">
                <h1 className="text-lg font-bold">Hello, {name}</h1>
                <div className='flex gap-3 cursor-pointer' onClick={hdlProfile}>
                    <UserRound color="#ffffff" size={25} />
                    <span className='font-bold'>Profile</span>
                </div>
                <div className='flex gap-3 cursor-pointer' onClick={hdlCart}>
                    <ShoppingCart color="#ffffff" size={25} />
                    <span className='font-bold'>Cart</span>
                </div>
                <div className='flex gap-3 cursor-pointer' onClick={hdlOrder}>
                    <ImageDown color="#ffffff" size={25} />
                    <span className='font-bold'>Order</span>
                </div>
            </nav>

            {/* Main Content */}
            <main className='bg-gray-200 w-full h-screen p-6'>
                <div className='w-3/4 mx-auto bg-white rounded-lg shadow-md'>
                    <Card className="p-5">
                        <CardHeader className="items-center">
                            <CardTitle className="text-xl font-semibold text-sky-600">Order Details</CardTitle>
                        </CardHeader>

                        <Table className="w-full mt-5">
                            <TableHeader className="text-lg font-medium bg-gray-100">
                                <TableRow>
                                    <TableHead className="text-sky-600 py-2">Photo ID</TableHead>
                                    <TableHead className="text-sky-600 py-2">Image</TableHead>
                                    <TableHead className="text-sky-600 py-2">Title</TableHead>
                                    <TableHead className="text-sky-600 py-2">Price (THB)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {order && order.photoOrders.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.photo.id}</TableCell>
                                        <TableCell>
                                            <img
                                                src={item.photo.url}
                                                alt={item.photo.title}
                                                className="w-20 h-20 object-cover rounded-md shadow-sm"
                                            />
                                        </TableCell>
                                        <TableCell>{item.photo.title}</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                    </TableRow>
                                ))}
                                {order && (
                                    <TableRow>
                                        <TableCell colSpan={3} className="font-medium text-right">Total:</TableCell>
                                        <TableCell className="font-bold">{order.total} THB</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>

                        <div className="flex justify-center mt-6">
                            {
                                order && order.paymentStatus === "PENDING"
                                    ? <button className='bg-orange-500 text-white rounded-lg px-6 py-2 hover:bg-orange-600 transition duration-300 mb-5' onClick={() => getPayment(order.id)}>
                                        Checkout
                                    </button>
                                    : <div></div>


                            }
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default FinishOrder;
