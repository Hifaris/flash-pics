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
import { currentUser } from '../api/auth'
import { useNavigate } from 'react-router-dom';



function UserOrder() {

  const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state)=>state.token)
  const [form,setForm] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getUser(token)
    },[])
    

    const getUser = async(token)=>{
      const resp = await currentUser(token)
      setForm(resp.data.member)
    }
    const hdlCart =()=>{
      navigate("/user/user/cart")
    }
    const hdlOrder =()=>{
      navigate("/user/order")
    }
    const hdlProfile =()=>{
      navigate("/user/profile")
    }
    
    console.log(form)

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
        <div className='w-2/4 mx-auto mt-8 p-6 bg-white rounded-lg'>

        <Card>
          <CardHeader className="items-center">
            <CardTitle className="text-xl font-semibold text-sky-600">User Order</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          {/* <CardContent className="flex gap-2">
            <p className='text-lg font-semibold'>Firstname :</p>
            <p className='text-lg'>{form.firstName}</p>
          </CardContent>
          <CardContent className="flex gap-2">
            <p className='text-lg font-semibold'>Lastname :</p>
            <p className='text-lg'>{form.lastName}</p>
          </CardContent>
          <CardContent className="flex gap-2">
            <p className='text-lg font-semibold'>Email :</p>
            <p className='text-lg'>{form.email}</p>
          </CardContent>
          <CardFooter className="w-full">
            <button className='bg-white border border-orange-500 text-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition mx-auto my-auto"'>Update Profile</button>
          </CardFooter> */}
        </Card>
        </div>

      </div>
    </div>
  )
}

export default UserOrder