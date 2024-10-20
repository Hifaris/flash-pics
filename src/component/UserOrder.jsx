import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/auth-store'
import { ShoppingCart } from 'lucide-react';
import { ImageDown } from 'lucide-react';
import { UserRound } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { currentUser } from '../api/auth'
import { useNavigate } from 'react-router-dom';
import { getOrder } from '../api/cart';



function UserOrder() {

  const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state)=>state.token)
  // const [form,setForm] = useState([])
  const navigate = useNavigate()
  const [order,setOrder]= useState(null)

  
  
  // const getUser = async(token)=>{
    //   const resp = await currentUser(token)
    //   setForm(resp.data.member)
    // }
    const hdlCart =()=>{
      navigate("/user/user/cart")
    }
    const hdlOrder =()=>{
      navigate("/user/order")
    }
    const hdlProfile =()=>{
      navigate("/user/profile")
    }

    const getUserOrder = async(token)=>{
      const resp = await getOrder(token)
      setOrder(resp.data.order)
      console.log(resp.data.order)
    }

    
    useEffect(()=>{
      // getUser(token)
      getUserOrder(token)
      },[])

      const hdlOnClick =(id)=>{
        navigate(`/user/order/${id}`)
      }
    
    // console.log(form)

  const name = user.email.split("@")[0]
  return (
    <div className='flex w-screen'>

      <div className="w-[300px] h-screen bg-slate-400 text-white flex flex-col items-center gap-9">
        <div className="text-lg font-bold p-4">Hello {name}</div>

        <div className='flex gap-3'>
        <UserRound color="#ffffff" size={25}/> <span className='text-white font-bold cursor-pointer' onClick={hdlProfile}>Profile</span>

        </div>
        <div className='flex gap-3 mr-5'>
        <ShoppingCart color="#ffffff" size={25}/> <span className='text-white font-bold cursor-pointer' onClick={hdlCart}>Cart</span>

        </div>
        <div className='flex gap-3'>
        <ImageDown color="#ffffff" size={25}/> <span className='text-white font-bold cursor-pointer' onClick={hdlOrder}>Order</span>

        </div>
      </div>
      <div className='bg-gray-200 w-full h-screen'>
        <div className='w-3/4 mx-auto mt-8 p-6 bg-white rounded-lg'>

        <Card>
          <CardHeader className="items-center">
            <CardTitle className="text-xl font-semibold text-sky-600">User Order</CardTitle>
          
          </CardHeader>
          <Table className="w-3/4 mx-auto mt-5">
      <TableHeader className="text-lg font-medium">
        <TableRow>
          <TableHead className="w-[100px]  text-sky-600 py-2">Id</TableHead>
          <TableHead className="w-[100px]  text-sky-600 py-2">Date</TableHead>
          <TableHead className=" text-sky-600 py-2">Photo Id</TableHead>
          <TableHead className=" text-sky-600 py-2">Total</TableHead>
          <TableHead className="text-right  text-sky-600 py-2">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
  {order && 
    order.map((el) => (
      <TableRow key={el.id} onClick={() => hdlOnClick(el.id)}>
        <TableCell className="font-medium">{el.id}</TableCell>
        <TableCell className="font-medium">{new Date(el.paymentDate).toLocaleDateString()}</TableCell>
        <TableCell>{el.photoOrders.map((photo) => photo.photoId).join(', ')}</TableCell>
        <TableCell>{el.total}</TableCell>
        <TableCell 
          className={`text-right font-medium ${
            el.paymentStatus === 'PENDING' ? 'text-green-600' : 'text-orange-500'
          }`}
        >
          {el.paymentStatus}
        </TableCell>
      </TableRow>
    ))
  }
</TableBody>
    </Table>
        </Card>
        </div>

      </div>
    </div>
  )
}

export default UserOrder